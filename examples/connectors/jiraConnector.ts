import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";
import { PipeshubDefaultError } from "@pipeshub-ai/sdk/models/errors";

// Register a Jira Cloud connector with an API token, sync one project and
// index it, then search it.
//
// Reads the connector's auth fields from the registry, creates a team "Jira"
// connector with an Atlassian API token (PIPESHUB_ATLASSIAN_BASE_URL,
// PIPESHUB_ATLASSIAN_EMAIL, PIPESHUB_ATLASSIAN_API_TOKEN), limits its sync
// to one project (PIPESHUB_JIRA_PROJECT_KEY, or the first project it can
// see) and issues modified in the last 30 days, turns the sync on, waits
// until the sync and indexing have finished, runs a semantic search scoped
// to the connector, and finally turns the sync off and deletes the
// connector.
//
// Jira records keep Jira's permissions, so search only finds issues for
// PipesHub users whose email can browse the project in Jira. The example
// reports that instead of failing when the caller sees none.

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // OAuth2 client credentials. The SDK fetches the access token itself.
  security: {
    oauth2: {
      clientID: process.env["PIPESHUB_CLIENT_ID"] ?? "",
      clientSecret: process.env["PIPESHUB_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["PIPESHUB_TOKEN_URL"]
        || `${process.env["PIPESHUB_BASE_URL"]}/api/v1/oauth2/token`,
    },
  },
  timeoutMs: 120_000,
});

const connectorType = "Jira";
const authType = "API_TOKEN";
const atlassianBaseUrl = process.env["PIPESHUB_ATLASSIAN_BASE_URL"] ?? "";
const atlassianEmail = process.env["PIPESHUB_ATLASSIAN_EMAIL"] ?? "";
const atlassianApiToken = process.env["PIPESHUB_ATLASSIAN_API_TOKEN"] ?? "";
const preferredOption = process.env["PIPESHUB_JIRA_PROJECT_KEY"];
const searchQuery = process.env["PIPESHUB_JIRA_SEARCH_QUERY"] || "bug";

// Polls until the sync has finished and no record is still waiting to be indexed.
// A sync can legitimately find nothing, so finishing is judged from the connector's status.
async function waitUntilIndexed(connectorId: string, timeoutMs = 1_800_000) {
  const start = Date.now();
  let seenSync = false;
  for (;;) {
    const { connector } = await pipeshub.connectorInstances.getConnectorInstance({ connectorId });
    const syncing = connector.status === "SYNCING" || connector.status === "FULL_SYNCING";
    const { stats } = (await pipeshub.connectorInstances.getConnectorStats({ connectorId })).data;
    const s = stats.indexingStatus;
    const pending = (s.notStarted ?? 0) + (s.queued ?? 0) + (s.inProgress ?? 0);
    seenSync ||= syncing || stats.total > 0;
    console.log(`status: ${connector.status}  records: ${stats.total}  indexed: ${s.completed ?? 0}  pending: ${pending}  failed: ${s.failed ?? 0}`);
    // Give the sync a minute to show up before trusting an idle status.
    if (!syncing && pending === 0 && (seenSync || Date.now() - start > 60_000)) return stats;
    if (Date.now() - start > timeoutMs) throw new Error(`sync or indexing still running after ${timeoutMs / 1000}s`);
    await new Promise((resolve) => setTimeout(resolve, 15_000));
  }
}

// Searches the connector and prints each matching record once (hits are chunks).
async function search(connectorId: string) {
  try {
    const results = await pipeshub.semanticSearch.search({
      query: searchQuery,
      filters: { apps: [connectorId] },
      limit: 3,
    });
    const names = new Set(results.searchResponse.searchResults.map((hit) => hit.metadata?.recordName).filter(Boolean));
    for (const name of names) console.log(`- ${name}`);
  } catch (err) {
    // Search answers 404 when the caller can see no indexed record.
    if (!(err instanceof PipeshubDefaultError) || err.statusCode !== 404) throw err;
    console.log("search: nothing you can see yet. This connector keeps the source's permissions, "
      + "so only PipesHub users whose email has access in the source find its records");
  }
}

async function main() {
  if (!process.env["PIPESHUB_ATLASSIAN_BASE_URL"] || !process.env["PIPESHUB_ATLASSIAN_EMAIL"] || !process.env["PIPESHUB_ATLASSIAN_API_TOKEN"]) throw new Error("set PIPESHUB_ATLASSIAN_BASE_URL, PIPESHUB_ATLASSIAN_EMAIL, PIPESHUB_ATLASSIAN_API_TOKEN in .env");

  const { schema } = await pipeshub.connectorRegistry.getConnectorSchema({ connectorType });
  console.log(`${connectorType} auth fields:`, schema.auth?.schemas?.[authType]?.fields?.map((f) => f.name));

  const created = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType,
    instanceName: "Jira example",
    scope: "team",
    authType,
    config: {
      // Auth fields are keyed by the registry schema's field names.
      auth: { baseUrl: atlassianBaseUrl, email: atlassianEmail, apiToken: atlassianApiToken },
      sync: { selectedStrategy: "MANUAL" },
    },
  });
  const connectorId = created.connector.connectorId;
  console.log(`created connector ${connectorId}`);

  try {
    const { options } = await pipeshub.connectorFilters.getFilterFieldOptions({
      connectorId,
      filterKey: "project_keys",
      limit: 10,
    });
    console.log("projects it can sync:", options.map((o) => o.label));
    // The options are paged; an explicit value needs no lookup.
    const chosen = preferredOption || options[0]?.id;
    if (!chosen) throw new Error("the connector can't see any project");

    const values: Record<string, { operator: string; value: unknown; type: "list" | "multiselect" | "datetime" }> = {
          project_keys: { operator: "in", value: [chosen], type: "list" },
          modified: { operator: "last_30_days", value: null, type: "datetime" },
    };
    // Filter values are keyed by the schema's filter names; each has an operator and a type.
    await pipeshub.connectorConfiguration.updateConnectorFiltersSyncConfig({
      connectorId,
      body: { filters: { sync: { values } } },
    });
    console.log("sync filters:", Object.keys(values));

    // Toggling flips the sync state; turning it on tests the credentials and starts a full sync.
    await pipeshub.connectorControl.toggleConnector({ connectorId, body: { type: "sync" } });
    console.log("sync on");

    const stats = await waitUntilIndexed(connectorId);
    console.log(`indexed ${stats.indexingStatus.completed ?? 0} of ${stats.total} records`);
    await search(connectorId);
  } finally {
    const { connector } = await pipeshub.connectorInstances.getConnectorInstance({ connectorId });
    if (connector.isActive) {
      await pipeshub.connectorControl.toggleConnector({ connectorId, body: { type: "sync" } });
    }
    await pipeshub.connectorInstances.deleteConnectorInstance({ connectorId });
    console.log("sync off, connector deleted");
  }
}

main().catch(console.error);

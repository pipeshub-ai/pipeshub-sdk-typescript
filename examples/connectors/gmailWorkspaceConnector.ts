import "dotenv/config";
import { readFileSync } from "node:fs";
import { Pipeshub } from "@pipeshub-ai/sdk";
import { PipeshubDefaultError } from "@pipeshub-ai/sdk/models/errors";

// Register a Gmail Workspace connector with a service account, sync the last
// 7 days of mail and index it, then search it.
//
// Reads the connector's auth fields from the registry, creates a team "Gmail
// Workspace" connector with a Google service account that has domain-wide
// delegation (the key file at PIPESHUB_GOOGLE_SERVICE_ACCOUNT_FILE) and the
// Workspace admin email in PIPESHUB_GOOGLE_ADMIN_EMAIL, limits its sync to
// mail received in the last 7 days, turns the sync on, waits until the sync
// and indexing have finished, runs a semantic search scoped to the
// connector, and finally turns the sync off and deletes the connector.
//
// Gmail records keep Google's permissions, so search only finds a mailbox's
// messages for the PipesHub user with that email. The example reports that
// instead of failing when the caller sees none.

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

const connectorType = "Gmail Workspace";
const authType = "CUSTOM";
const googleAdminEmail = process.env["PIPESHUB_GOOGLE_ADMIN_EMAIL"] ?? "";
const googleServiceAccountFilePath = process.env["PIPESHUB_GOOGLE_SERVICE_ACCOUNT_FILE"] ?? "";
const searchQuery = process.env["PIPESHUB_GMAIL_SEARCH_QUERY"] || "meeting";

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
  if (!process.env["PIPESHUB_GOOGLE_ADMIN_EMAIL"] || !process.env["PIPESHUB_GOOGLE_SERVICE_ACCOUNT_FILE"]) throw new Error("set PIPESHUB_GOOGLE_ADMIN_EMAIL, PIPESHUB_GOOGLE_SERVICE_ACCOUNT_FILE in .env");

  const { schema } = await pipeshub.connectorRegistry.getConnectorSchema({ connectorType });
  console.log(`${connectorType} auth fields:`, schema.auth?.schemas?.[authType]?.fields?.map((f) => f.name));

  const created = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType,
    instanceName: "Gmail Workspace example",
    scope: "team",
    authType,
    config: {
      // Auth fields are keyed by the registry schema's field names.
      auth: { adminEmail: googleAdminEmail, serviceAccountJson: readFileSync(googleServiceAccountFilePath, "utf8") },
      sync: { selectedStrategy: "MANUAL" },
    },
  });
  const connectorId = created.connector.connectorId;
  console.log(`created connector ${connectorId}`);

  try {
    const values: Record<string, { operator: string; value: unknown; type: "list" | "multiselect" | "datetime" }> = {
          received_date: { operator: "last_7_days", value: null, type: "datetime" },
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

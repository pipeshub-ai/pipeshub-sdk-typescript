import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

// Register an RSS connector, sync and index a feed, then search what it indexed.
//
// Looks RSS up in the connector registry, creates a team RSS connector for
// PIPESHUB_RSS_FEED_URL (default: Hacker News), turns its sync on, waits until
// every record is indexed, runs a semantic search scoped to the connector, and
// finally turns the sync off and deletes the connector.

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

const feedURL = process.env["PIPESHUB_RSS_FEED_URL"] || "https://news.ycombinator.com/rss";

async function waitUntilIndexed(connectorId: string, timeoutMs = 600_000) {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const { stats } = (await pipeshub.connectorInstances.getConnectorStats({ connectorId })).data;
    const s = stats.indexingStatus;
    const pending = (s.notStarted ?? 0) + (s.queued ?? 0) + (s.inProgress ?? 0);
    console.log(`records: ${stats.total}  indexed: ${s.completed ?? 0}  pending: ${pending}  failed: ${s.failed ?? 0}`);
    if (stats.total > 0 && pending === 0) return stats;
    if (Date.now() > deadline) throw new Error(`records still pending after ${timeoutMs / 1000}s`);
    await new Promise((resolve) => setTimeout(resolve, 10_000));
  }
}

async function main() {
  const registry = await pipeshub.connectorRegistry.getConnectorRegistry({ search: "RSS" });
  const rss = registry.connectors.find((c) => c.type === "RSS");
  console.log(`registry: ${rss?.name}, auth types ${rss?.supportedAuthTypes?.join(", ")}`);

  const { schema } = await pipeshub.connectorRegistry.getConnectorSchema({ connectorType: "RSS" });
  console.log("sync fields:", schema.sync?.customFields?.map((f) => f.name));

  const created = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "RSS",
    instanceName: "RSS example",
    scope: "team",
    authType: "NONE",
    config: {
      auth: {},
      sync: {
        selectedStrategy: "MANUAL",
        feed_urls: feedURL,
        max_articles_per_feed: 10,
        fetch_full_content: false,
      },
    },
  });
  const connectorId = created.connector.connectorId;
  console.log(`created connector ${connectorId}`);

  try {
    // Toggling flips the sync state; turning it on tests the feed and starts a full sync.
    await pipeshub.connectorControl.toggleConnector({ connectorId, body: { type: "sync" } });
    console.log("sync on");

    const stats = await waitUntilIndexed(connectorId);
    console.log(`indexed ${stats.indexingStatus.completed ?? 0} of ${stats.total} records`);

    const results = await pipeshub.semanticSearch.search({
      query: "technology news",
      filters: { apps: [connectorId] },
      limit: 3,
    });
    // Hits are chunks, so one record can match several times; print each record once.
    const names = new Set(results.searchResponse.searchResults.map((hit) => hit.metadata?.recordName).filter(Boolean));
    for (const name of names) console.log(`- ${name}`);
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

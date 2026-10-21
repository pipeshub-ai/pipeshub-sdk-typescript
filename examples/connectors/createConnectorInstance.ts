// Create a team RSS connector for one feed. Sync stays off until you toggle it.
// No IDs needed.
import "dotenv/config";
import { Pipeshub } from "@pipeshub-ai/sdk";

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
});

async function main() {
  const created = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "RSS",
    instanceName: "qs-rss",
    scope: "team",
    authType: "NONE",
    config: {
      auth: {},
      sync: {
        selectedStrategy: "MANUAL",
        feed_urls: "http://feeds.arstechnica.com/arstechnica/index/",
        max_articles_per_feed: 10,
        fetch_full_content: false,
      },
    },
  });

  console.log(created.connector.connectorId);
}

main().catch(console.error);

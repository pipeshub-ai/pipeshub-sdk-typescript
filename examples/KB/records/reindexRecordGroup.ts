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

// Display name of a connector instance, e.g. "BBC News RSS".
const connectorName = process.env["PIPESHUB_CONNECTOR_NAME"] ?? "";

async function main() {
  if (!connectorName) throw new Error("set PIPESHUB_CONNECTOR_NAME in .env");

  // Only connector record groups can be reindexed; a knowledge base or one of
  // its folders isn't a record group. The knowledge hub calls are deprecated,
  // but they're still the way to browse a connector's record groups.
  const root = await pipeshub.knowledgeHub.getKnowledgeHubRootNodes({ limit: 100 });
  const app = root.items.find((node) => node.nodeType === "app" && node.name === connectorName);
  if (!app) throw new Error(`no connector named "${connectorName}"`);

  const children = await pipeshub.knowledgeHub.getKnowledgeHubChildNodes({
    parentType: "app",
    parentId: app.id,
    limit: 100,
  });
  const group = children.items.find((node) => node.nodeType === "recordGroup");
  if (!group) throw new Error(`connector "${connectorName}" has no record groups`);

  const result = await pipeshub.knowledgeBase.reindexRecordGroup({
    recordGroupId: group.id,
    body: { depth: 1 },
  });

  console.log(`${group.name}: ${result.message}`);
}

main().catch(console.error);

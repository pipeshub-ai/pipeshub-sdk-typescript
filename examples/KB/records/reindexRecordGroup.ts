// Reindex a connector record group (depth 1 = its direct children).
// Needs PIPESHUB_RECORD_GROUP_ID.
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

const recordGroupId = process.env["PIPESHUB_RECORD_GROUP_ID"] ?? "";

async function main() {
  const result = await pipeshub.knowledgeBase.reindexRecordGroup({
    recordGroupId,
    body: { depth: 1 },
  });

  console.log(result.message);
}

main().catch(console.error);

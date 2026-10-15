// Restore several deleted records at once; check `results` for per-record failures.
// Needs PIPESHUB_RECORD_ID.
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

const recordId = process.env["PIPESHUB_RECORD_ID"] ?? "";

async function main() {
  const restored = await pipeshub.knowledgeBase.restoreRecords({ recordIds: [recordId] });

  console.log(restored.restoredCount, restored.failedCount);
}

main().catch(console.error);

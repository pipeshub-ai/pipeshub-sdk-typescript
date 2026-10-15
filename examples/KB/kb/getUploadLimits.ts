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
  const limits = await pipeshub.knowledgeBase.getUploadLimits();

  console.log(`max files per request: ${limits.maxFilesPerRequest}`);
  console.log(`max file size: ${(limits.maxFileSizeBytes / 1024 / 1024).toFixed(1)} MiB`);
}

main().catch(console.error);

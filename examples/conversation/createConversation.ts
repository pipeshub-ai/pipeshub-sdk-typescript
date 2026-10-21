// Start a conversation and get the first answer (non-streaming).
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
  const created = await pipeshub.conversations.createConversation(
    { query: "Who moved the cheese?", chatMode: "internal_search" },
    { timeoutMs: 300_000 },
  );

  console.log(created.result.conversation.id);
}

main().catch(console.error);

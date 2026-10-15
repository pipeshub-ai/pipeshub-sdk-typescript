// Cancel a running chat stream; runId is the one you passed to streamChat.
// Needs PIPESHUB_CONVERSATION_ID, PIPESHUB_RUN_ID.
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

const conversationId = process.env["PIPESHUB_CONVERSATION_ID"] ?? "";
const runId = process.env["PIPESHUB_RUN_ID"] ?? "";

async function main() {
  const cancelled = await pipeshub.conversations.cancelConversationStream({
    conversationId,
    body: { runId },
  });

  console.log(cancelled);
}

main().catch(console.error);

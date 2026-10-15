// Add a message to a conversation and get the answer (non-streaming).
// Needs PIPESHUB_CONVERSATION_ID.
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

async function main() {
  const { result } = await pipeshub.conversations.addMessage(
    {
      conversationId,
      body: { query: "Summarize that in one sentence.", chatMode: "internal_search" },
    },
    { timeoutMs: 300_000 },
  );

  console.log(result.conversation.messages?.at(-1)?.content);
}

main().catch(console.error);

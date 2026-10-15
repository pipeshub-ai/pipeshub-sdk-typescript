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
  const created = await pipeshub.conversations.createConversation({
    query: "Who moved the cheese?",
    chatMode: "internal_search",
  }, { timeoutMs: 300_000 });

  const conversationId = created.result.conversation.id;
  if (!conversationId) throw new Error("createConversation returned no conversation id");

  const { result } = await pipeshub.conversations.addMessage({
    conversationId,
    body: { query: "Summarize that in one sentence.", chatMode: "internal_search" },
  }, { timeoutMs: 300_000 });

  const answer = result.conversation.messages
    ?.filter((m) => m.messageType === "bot_response")
    .at(-1);

  console.log(answer?.content);

  await pipeshub.conversations.deleteConversationById({ conversationId });
}

main().catch(console.error);

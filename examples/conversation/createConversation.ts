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
  // Non-streaming: the request returns once the answer is complete.
  const { result } = await pipeshub.conversations.createConversation({
    query: "Who moved the cheese?",
    chatMode: "internal_search",
  }, { timeoutMs: 300_000 });

  const { conversation } = result;
  if (!conversation.id) throw new Error("createConversation returned no conversation id");

  const answer = conversation.messages
    ?.filter((m) => m.messageType === "bot_response")
    .at(-1);

  console.log(`conversation id: ${conversation.id}`);
  console.log(answer?.content);

  await pipeshub.conversations.deleteConversationById({ conversationId: conversation.id });
}

main().catch(console.error);

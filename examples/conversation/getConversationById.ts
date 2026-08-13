import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const stream = await pipeshub.conversations.streamChat({
    query: "Who moved the cheese?",
    chatMode: "internal_search",
  });

  let conversationId: string | undefined;

  for await (const event of stream) {
    const data = event.data ? JSON.parse(event.data) : undefined;
    if (event.event === "RUN_ERROR") throw new Error(data.message);
    if (event.event === "CUSTOM" && data.name === "conversation_created") {
      conversationId = data.value.conversationId;
    }
  }

  if (!conversationId) throw new Error("stream ended without a conversation id");

  const result = await pipeshub.conversations.getConversationById({ conversationId });

  console.log(result.conversation);
}

main().catch(console.error);

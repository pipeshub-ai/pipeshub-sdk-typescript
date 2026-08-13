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

  let conversation;

  for await (const event of stream) {
    const data = event.data ? JSON.parse(event.data) : undefined;
    if (event.event === "RUN_ERROR") throw new Error(data.message);
    // Sub-agent runs emit RUN_FINISHED too; only the root one carries `result`.
    if (event.event === "RUN_FINISHED" && data.result) conversation = data.result.conversation;
  }

  if (!conversation) throw new Error("stream ended without a persisted conversation");

  const answer = conversation.messages
    .filter((m: { messageType: string }) => m.messageType === "bot_response")
    .at(-1);

  const feedback = await pipeshub.conversations.updateMessageFeedback({
    conversationId: conversation._id,
    messageId: answer._id,
    body: { isHelpful: true },
  });

  console.log(feedback);
}

main().catch(console.error);

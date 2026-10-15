import "dotenv/config";
import { randomUUID } from "node:crypto";
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
  // A client-generated runId is what makes the run cancellable.
  const runId = randomUUID();

  const stream = await pipeshub.conversations.streamChat({
    query: "Write a detailed, multi-section history of cheese making.",
    chatMode: "internal_search",
    runId,
  });

  let conversationId: string | undefined;

  for await (const event of stream) {
    const data = event.data ? JSON.parse(event.data) : undefined;
    if (event.event === "RUN_ERROR") throw new Error(data.message);
    if (event.event === "CUSTOM" && data.name === "conversation_created") {
      conversationId = data.value.conversationId;
    }

    // Cancel as soon as the answer starts arriving.
    if (event.event === "TEXT_MESSAGE_CONTENT" && conversationId) {
      const cancelled = await pipeshub.conversations.cancelConversationStream({
        conversationId,
        body: { runId },
      });
      console.log(cancelled);
      break;
    }
  }

  if (!conversationId) throw new Error("stream ended without a conversation id");

  await pipeshub.conversations.deleteConversationById({ conversationId });
}

main().catch(console.error);

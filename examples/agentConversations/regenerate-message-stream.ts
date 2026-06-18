import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";

import { printAgentConversationStream } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";

type StreamConversationMessage = {
  _id?: string;
  messageType?: string;
  content?: string;
};

function extractConversationDetails(completeEventData: string): {
  answer: string;
  conversationId: string;
  title: string;
  botResponseMessageId: string | null;
} {
  const conv =
    (
      JSON.parse(completeEventData) as {
        conversation?: {
          _id?: string;
          title?: string;
          messages?: StreamConversationMessage[];
        };
      }
    ).conversation ?? {};

  let conversationId = conv._id ?? "";
  let title = conv.title ?? "";
  let answer = "";
  let botResponseMessageId: string | null = null;

  const messages = conv.messages ?? [];
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i]!;
    if (!title && msg.messageType === "user_query") {
      title = msg.content ?? "";
    }
    if (msg.messageType === "bot_response") {
      answer = msg.content ?? "";
      botResponseMessageId = msg._id ?? null;
      break;
    }
  }

  return { answer, conversationId, title, botResponseMessageId };
}

dotenv.config({ path: ".env" });

const token = process.env.PIPESHUB_ACCESS_TOKEN;
if (!token) {
  throw new Error("PIPESHUB_ACCESS_TOKEN is required");
}

const baseUrl = (
  process.env.PIPESHUB_BASE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

const pipeshub = new Pipeshub({
  serverURL: `${baseUrl}/api/v1`,
  security: { bearerAuth: token },
});

const key = "52b7e901-f3e9-4009-bcd7-c0274c58f296";
const filters = { apps: ["270d4bac-234a-4c0d-963f-84f152cd21f0"] };

const createStream = await pipeshub.agents.streamAgentConversation({
  agentKey: key,
  body: { query: FIRST_MESSAGE, filters, chatMode: "auto" },
});

const createCompleteData = await printAgentConversationStream(createStream, {
  query: FIRST_MESSAGE,
});
const {
  answer: original,
  conversationId: convId,
  botResponseMessageId,
} = extractConversationDetails(createCompleteData);

console.log(`conversation id: ${convId}`);
console.log(`bot response message id: ${botResponseMessageId}`);
console.log(`original answer: ${original}`);

if (!botResponseMessageId) {
  throw new Error("stream create completed without bot response message id");
}

const regenerateStream =
  await pipeshub.agents.regenerateAgentConversationMessage({
    agentKey: key,
    conversationId: convId,
    messageId: botResponseMessageId,
    body: { filters },
  });

const regenerateCompleteData = await printAgentConversationStream(
  regenerateStream,
  { label: `Regenerating message ${botResponseMessageId} ...` },
);
const { answer: regenerated } = extractConversationDetails(
  regenerateCompleteData,
);

console.log(`original answer length: ${original.length}`);
console.log(`regenerated answer length: ${regenerated.length}`);
console.log(`regenerated answer: ${regenerated}`);

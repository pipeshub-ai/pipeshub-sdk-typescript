import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";
import { MessageFeedbackSubmitRequestCategory } from "@pipeshub-ai/sdk/models";

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
const POSITIVE_CATEGORIES = [
  MessageFeedbackSubmitRequestCategory.ExcellentAnswer,
  MessageFeedbackSubmitRequestCategory.HelpfulCitations,
  MessageFeedbackSubmitRequestCategory.WellExplained,
];
const POSITIVE_COMMENT =
  "The answer stayed on topic and cited relevant sources clearly.";

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

const stream = await pipeshub.agents.streamAgentConversation({
  agentKey: key,
  body: { query: FIRST_MESSAGE, filters, chatMode: "auto" },
});

const completeData = await printAgentConversationStream(stream, {
  query: FIRST_MESSAGE,
});
const { answer, conversationId: convId, botResponseMessageId } =
  extractConversationDetails(completeData);

console.log(`conversation id: ${convId}`);
console.log(`bot response message id: ${botResponseMessageId}`);
console.log(`answer: ${answer}`);

if (!botResponseMessageId) {
  throw new Error("stream create: missing bot response message id");
}

const response = await pipeshub.agents.updateAgentConversationMessageFeedback({
  agentKey: key,
  conversationId: convId,
  messageId: botResponseMessageId,
  body: {
    isHelpful: true,
    categories: POSITIVE_CATEGORIES,
    comments: { positive: POSITIVE_COMMENT },
  },
});

console.log(`feedback submitted (conversation id: ${response.conversationId})`);

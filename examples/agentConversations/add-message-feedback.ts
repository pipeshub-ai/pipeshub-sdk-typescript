import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";
import { MessageFeedbackSubmitRequestCategory } from "@pipeshub-ai/sdk/models";

import { decodeComplete, printAgentConversationStream } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
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
const [answer, convId, , botResponseMessageId] = decodeComplete(completeData);

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

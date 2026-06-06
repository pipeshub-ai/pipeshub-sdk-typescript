import { MessageFeedbackSubmitRequestCategory } from "@pipeshub-ai/sdk/models";

import { loadEnv, createClient } from "../client.js";
import { agentKey, defaultFilters, streamCreate } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
const POSITIVE_CATEGORIES = [
  MessageFeedbackSubmitRequestCategory.ExcellentAnswer,
  MessageFeedbackSubmitRequestCategory.HelpfulCitations,
  MessageFeedbackSubmitRequestCategory.WellExplained,
];
const POSITIVE_COMMENT =
  "The answer stayed on topic and cited relevant sources clearly.";

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/add-message-feedback.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const key = agentKey();
const filters = defaultFilters();

const [convId, , answer, botResponseMessageId] = await streamCreate(
  pipeshub,
  FIRST_MESSAGE,
  filters,
  { key },
);

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

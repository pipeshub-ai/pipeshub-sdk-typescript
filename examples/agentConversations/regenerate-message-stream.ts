import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";

import { decodeComplete, printAgentConversationStream } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";

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
const [original, convId, , botResponseMessageId] =
  decodeComplete(createCompleteData);

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
const [regenerated] = decodeComplete(regenerateCompleteData);

console.log(`original answer length: ${original.length}`);
console.log(`regenerated answer length: ${regenerated.length}`);
console.log(`regenerated answer: ${regenerated}`);

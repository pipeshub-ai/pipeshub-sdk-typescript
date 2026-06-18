import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";
import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

import { decodeComplete, printAgentConversationStream } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
const FOLLOW_UP = "Can you give me more details on that?";

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
const [, convId] = decodeComplete(createCompleteData);

console.log(`conversation id: ${convId}`);

const messageStream = await pipeshub.agents.streamAgentConversationMessage({
  agentKey: key,
  conversationId: convId,
  body: { query: FOLLOW_UP, filters, chatMode: "auto" },
});

await printAgentConversationStream(messageStream, { query: FOLLOW_UP });

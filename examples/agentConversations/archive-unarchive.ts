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

const stream = await pipeshub.agents.streamAgentConversation({
  agentKey: key,
  body: { query: FIRST_MESSAGE, filters, chatMode: "auto" },
});

const completeData = await printAgentConversationStream(stream, {
  query: FIRST_MESSAGE,
  silent: true,
});
const [, convId, title] = decodeComplete(completeData);

console.log(`conversation id: ${convId}`);
console.log(`title: ${title}`);

const archiveRes = await pipeshub.agents.archiveAgentConversation({
  agentKey: key,
  conversationId: convId,
});

console.log(`archived at: ${archiveRes.archivedAt.toISOString()}`);

const unarchiveRes = await pipeshub.agents.unarchiveAgentConversation({
  agentKey: key,
  conversationId: convId,
});

console.log(`unarchived at: ${unarchiveRes.unarchivedAt.toISOString()}`);

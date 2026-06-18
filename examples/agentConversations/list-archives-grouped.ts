import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";
import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

import { printAgentConversationStream } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
const SECOND_MESSAGE = "Can you give me more details on that?";

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

function formatActivity(conv: AgentConversationListItem): string {
  if (conv.lastActivityAt != null) {
    return new Date(conv.lastActivityAt).toISOString();
  }
  if (conv.updatedAt != null) {
    return new Date(conv.updatedAt).toISOString();
  }
  return "-";
}

function printConversations(
  heading: string,
  convs: AgentConversationListItem[],
): void {
  console.log(`\n${heading}:`);
  if (convs.length === 0) {
    console.log("  (none)");
    return;
  }
  for (const conv of convs) {
    const title = conv.title ?? "(untitled)";
    console.log(
      `  - ${JSON.stringify(title)} — ${conv.id} — ${formatActivity(conv)}`,
    );
  }
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

const createStream1 = await pipeshub.agents.streamAgentConversation({
  agentKey: key,
  body: { query: FIRST_MESSAGE, filters, chatMode: "auto" },
});
const completeData1 = await printAgentConversationStream(createStream1, {
  query: FIRST_MESSAGE,
  silent: true,
});
const { conversationId: convId1 } = extractConversationDetails(completeData1);
console.log(`created conversation 1: ${convId1}`);

const createStream2 = await pipeshub.agents.streamAgentConversation({
  agentKey: key,
  body: { query: SECOND_MESSAGE, filters, chatMode: "auto" },
});
const completeData2 = await printAgentConversationStream(createStream2, {
  query: SECOND_MESSAGE,
  silent: true,
});
const { conversationId: convId2 } = extractConversationDetails(completeData2);
console.log(`created conversation 2: ${convId2}`);

await pipeshub.agents.archiveAgentConversation({
  agentKey: key,
  conversationId: convId1,
});
console.log(`archived conversation 1: ${convId1}`);

await pipeshub.agents.archiveAgentConversation({
  agentKey: key,
  conversationId: convId2,
});
console.log(`archived conversation 2: ${convId2}`);

const createdIds = new Set([convId1, convId2]);

const res = await pipeshub.agents.listAgentArchivedConversationsGrouped({
  agentPage: 1,
  agentLimit: 20,
});

const group = res.groups?.find((g) => g.agentKey === key);
if (!group) {
  console.log(`\n(no archived group found for agent ${key})`);
  process.exit(0);
}

const archivedConversationsCreatedHere = (group.conversations ?? []).filter(
  (conv) => conv.id != null && createdIds.has(conv.id),
);

printConversations(
  `Archived conversations for agent ${key} (created here)`,
  archivedConversationsCreatedHere,
);

if (archivedConversationsCreatedHere.length === 0) {
  console.log(
    "\n(created conversations not found in grouped archive slice; they may be outside the per-agent page limit)",
  );
} else {
  console.log(
    `\nFound ${archivedConversationsCreatedHere.length} of ${createdIds.size} created conversation(s) in grouped archives.`,
  );
}

import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";
import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

import { decodeComplete, printAgentConversationStream } from "./helpers.js";

const QUERIES = [
  "What is 2+2?",
  "Name three primary colors.",
  "What day comes after Monday?",
];

const PAGE_LIMIT = 20;

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

async function listArchived(): Promise<AgentConversationListItem[]> {
  const conversations: AgentConversationListItem[] = [];
  let page = 1;

  while (true) {
    const res = await pipeshub.agents.listAgentConversationArchives({
      agentKey: key,
      page,
      limit: PAGE_LIMIT,
    });

    conversations.push(...(res.conversations ?? []));

    if (!res.pagination?.hasNextPage) {
      break;
    }

    page += 1;
  }

  return conversations;
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

const created: Array<{ id: string; title: string }> = [];

for (const query of QUERIES) {
  const stream = await pipeshub.agents.streamAgentConversation({
    agentKey: key,
    body: { query, filters, chatMode: "auto" },
  });

  const completeData = await printAgentConversationStream(stream, {
    query,
    silent: true,
  });
  const [, convId, title] = decodeComplete(completeData);

  await pipeshub.agents.archiveAgentConversation({
    agentKey: key,
    conversationId: convId,
  });

  created.push({ id: convId, title });
  console.log(`created and archived: ${convId} — ${JSON.stringify(title)}`);
}

const createdIds = new Set(created.map((conv) => conv.id));

function printMatchedArchived(
  heading: string,
  archived: AgentConversationListItem[],
): AgentConversationListItem[] {
  const matched = archived.filter((conv) => createdIds.has(conv.id ?? ""));
  console.log(`\n${heading}:`);
  if (matched.length === 0) {
    console.log("  (none)");
    return matched;
  }
  for (const conv of matched) {
    const title = conv.title ?? "(untitled)";
    console.log(
      `  - ${JSON.stringify(title)} — ${conv.id} — ${formatActivity(conv)}`,
    );
  }
  return matched;
}

const archivedBefore = await listArchived();
const matchedBefore = printMatchedArchived(
  `Archived conversations we created (${created.length} expected)`,
  archivedBefore,
);

if (matchedBefore.length !== created.length) {
  throw new Error(
    `expected ${created.length} archived conversation(s), found ${matchedBefore.length}`,
  );
}

for (const { id } of created) {
  await pipeshub.agents.deleteAgentConversationById({
    agentKey: key,
    conversationId: id,
  });
  console.log(`deleted: ${id}`);
}

const archivedAfter = await listArchived();
const matchedAfter = printMatchedArchived(
  "After cleanup (should be none)",
  archivedAfter,
);

if (matchedAfter.length !== 0) {
  throw new Error(
    `cleanup failed: ${matchedAfter.length} created conversation(s) still archived`,
  );
}

console.log("\nCleanup verified: none of our archived conversations remain.");

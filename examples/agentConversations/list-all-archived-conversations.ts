import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

import { loadEnv, createClient } from "../client.js";
import {
  agentKey,
  archiveConversation,
  defaultFilters,
  deleteConversation,
  formatActivity,
  listArchived,
  streamCreate,
} from "./helpers.js";

const QUERIES = [
  "What is 2+2?",
  "Name three primary colors.",
  "What day comes after Monday?",
];

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/list-all-archived-conversations.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const key = agentKey();
const filters = defaultFilters();

console.log(`agent key: ${key}`);

const created: Array<{ id: string; title: string }> = [];

for (const query of QUERIES) {
  const [convId, title] = await streamCreate(pipeshub, query, filters, {
    key,
    printBot: false,
  });
  await archiveConversation(pipeshub, convId, { key });
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

const archivedBefore = await listArchived(pipeshub, { key });
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
  await deleteConversation(pipeshub, id, { key });
  console.log(`deleted: ${id}`);
}

const archivedAfter = await listArchived(pipeshub, { key });
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

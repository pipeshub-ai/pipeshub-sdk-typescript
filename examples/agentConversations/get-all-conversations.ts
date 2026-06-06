import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

import { loadEnv, createClient } from "../client.js";
import { agentKey, formatActivity } from "./helpers.js";

const PAGE_LIMIT = 20;

function printSection(
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
    console.log(`  - ${JSON.stringify(title)} — ${conv.id} — ${formatActivity(conv)}`);
  }
}

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/get-all-conversations.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const key = agentKey();
console.log(`Active conversations for agent ${key} (newest first):`);

let page = 1;
const owned: AgentConversationListItem[] = [];
const shared: AgentConversationListItem[] = [];
let ownedTotal = 0;

while (true) {
  const res = await pipeshub.agents.listAgentConversations({
    agentKey: key,
    page,
    limit: PAGE_LIMIT,
    sortBy: "lastActivityAt",
    sortOrder: "desc",
  });

  if (page === 1) {
    ownedTotal = res.pagination.totalCount;
  }
  owned.push(...res.conversations);
  shared.push(...res.sharedWithMeConversations);

  const p = res.pagination;
  if (!p.hasNextPage || page >= p.totalPages) {
    break;
  }
  page += 1;
}

printSection("Your conversations", owned);
printSection("Shared with you", shared);

if (owned.length === 0 && shared.length === 0) {
  console.log("\n(no active conversations for this agent)");
} else {
  console.log(
    `\nListed ${owned.length} owned and ${shared.length} shared conversation(s) (owned total reported: ${ownedTotal}).`,
  );
}

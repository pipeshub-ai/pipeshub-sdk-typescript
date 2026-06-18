import dotenv from "dotenv";
import { Pipeshub } from "@pipeshub-ai/sdk";
import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

const PAGE_LIMIT = 20;

function formatActivity(conv: AgentConversationListItem): string {
  if (conv.lastActivityAt != null) {
    return new Date(conv.lastActivityAt).toISOString();
  }
  if (conv.updatedAt != null) {
    return new Date(conv.updatedAt).toISOString();
  }
  return "-";
}

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
    ownedTotal = res.pagination?.totalCount ?? 0;
  }
  owned.push(...(res.conversations ?? []));
  shared.push(...(res.sharedWithMeConversations ?? []));

  const p = res.pagination;
  if (!p?.hasNextPage || page >= (p?.totalPages ?? 0)) {
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

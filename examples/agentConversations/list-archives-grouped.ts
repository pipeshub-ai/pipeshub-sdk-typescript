import type { AgentConversationListItem } from "@pipeshub-ai/sdk/models";

import { loadEnv, createClient } from "../client.js";
import {
  agentKey,
  archiveConversation,
  defaultFilters,
  formatActivity,
  streamCreate,
} from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
const SECOND_MESSAGE = "Can you give me more details on that?";

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

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/list-archives-grouped.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const key = agentKey();
const filters = defaultFilters();

console.log(`agent key: ${key}`);

const [convId1] = await streamCreate(pipeshub, FIRST_MESSAGE, filters, {
  key,
  printBot: false,
});
console.log(`created conversation 1: ${convId1}`);

const [convId2] = await streamCreate(pipeshub, SECOND_MESSAGE, filters, {
  key,
  printBot: false,
});
console.log(`created conversation 2: ${convId2}`);

await archiveConversation(pipeshub, convId1, { key });
console.log(`archived conversation 1: ${convId1}`);

await archiveConversation(pipeshub, convId2, { key });
console.log(`archived conversation 2: ${convId2}`);

const createdIds = new Set([convId1, convId2]);

const res = await pipeshub.agents.listAgentArchivedConversationsGrouped({
  agentPage: 1,
  agentLimit: 20,
});

const group = res.groups.find((g) => g.agentKey === key);
if (!group) {
  console.log(`\n(no archived group found for agent ${key})`);
  process.exit(0);
}

const ours = group.conversations.filter((conv) => createdIds.has(conv.id));

printConversations(`Archived conversations for agent ${key} (created here)`, ours);

if (ours.length === 0) {
  console.log(
    "\n(created conversations not found in grouped archive slice; they may be outside the per-agent page limit)",
  );
} else {
  console.log(
    `\nFound ${ours.length} of ${createdIds.size} created conversation(s) in grouped archives.`,
  );
}

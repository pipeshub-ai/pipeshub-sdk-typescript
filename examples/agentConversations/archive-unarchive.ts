import { loadEnv, createClient } from "../client.js";
import { agentKey, defaultFilters, streamCreate } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/archive-unarchive.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const key = agentKey();
const filters = defaultFilters();

const [convId, title] = await streamCreate(pipeshub, FIRST_MESSAGE, filters, {
  key,
  printBot: false,
});

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

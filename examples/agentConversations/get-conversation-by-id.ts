import { loadEnv, createClient } from "../client.js";
import { defaultFilters, printConversation, streamCreate } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/get-conversation-by-id.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const filters = defaultFilters();

const [convId] = await streamCreate(pipeshub, FIRST_MESSAGE, filters, {
  printBot: false,
});

console.log(`conversation id: ${convId}`);

await printConversation(pipeshub, convId, { verbose: true });

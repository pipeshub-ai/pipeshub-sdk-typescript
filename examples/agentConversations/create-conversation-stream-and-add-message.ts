import { loadEnv, createClient } from "../client.js";
import { agentKey, defaultFilters, streamAddMessage, streamCreate } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
const FOLLOW_UP = "Can you give me more details on that?";

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/create-conversation-stream-and-add-message.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const key = agentKey();
const filters = defaultFilters();

console.log(`agent key: ${key}`);

const [convId] = await streamCreate(pipeshub, FIRST_MESSAGE, filters, { key });

console.log(`conversation id: ${convId}`);

await streamAddMessage(pipeshub, convId, FOLLOW_UP, filters, { key });

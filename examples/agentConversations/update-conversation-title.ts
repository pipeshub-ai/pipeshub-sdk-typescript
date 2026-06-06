import { loadEnv, createClient } from "../client.js";
import { defaultFilters, streamCreate, updateTitle } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";
const NEW_TITLE = "SDK example: updated title";

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/update-conversation-title.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const filters = defaultFilters();

const [convId, oldTitle] = await streamCreate(
  pipeshub,
  FIRST_MESSAGE,
  filters,
);

console.log(`conversation id: ${convId}`);

const newTitle = await updateTitle(pipeshub, convId, NEW_TITLE);

console.log(`old title: ${oldTitle}`);
console.log(`new title: ${newTitle}`);

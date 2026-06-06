import { loadEnv, createClient } from "../client.js";
import { defaultFilters, streamCreate, streamRegenerate } from "./helpers.js";

const FIRST_MESSAGE = "Who moved the cheese?";

const envPath = process.argv[2];
if (!envPath) {
  console.error(
    "usage: npx tsx agentConversations/regenerate-message-stream.ts .env",
  );
  process.exit(1);
}

loadEnv(envPath);
const pipeshub = await createClient();

const filters = defaultFilters();

const [convId, , original, botResponseMessageId] = await streamCreate(
  pipeshub,
  FIRST_MESSAGE,
  filters,
);

console.log(`conversation id: ${convId}`);
console.log(`bot response message id: ${botResponseMessageId}`);
console.log(`original answer: ${original}`);

if (!botResponseMessageId) {
  throw new Error("stream create completed without bot response message id");
}

const regenerated = await streamRegenerate(
  pipeshub,
  convId,
  botResponseMessageId,
  filters,
);

console.log(`original answer length: ${original.length}`);
console.log(`regenerated answer length: ${regenerated.length}`);
console.log(`regenerated answer: ${regenerated}`);

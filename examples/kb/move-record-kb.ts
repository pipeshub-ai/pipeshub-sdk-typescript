/**
 * Move a record within a knowledge base — same collection (root) and different collection (folder).
 *   npm run start:move-record
 *   npx ts-node move-record-kb.ts
 *
 * Env: KB_ID, RECORD_ID, TARGET_FOLDER_ID (folder id for "different collection" move).
 */
import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  const kbId = process.env.KB_ID;
  const recordId = process.env.RECORD_ID;
  const targetFolderId = process.env.TARGET_FOLDER_ID;

  // 1) Same collection: move record to root (newParentId = null)
  const sameCollection = await pipeshub.knowledgeBases.moveRecord({
    kbId,
    recordId,
    body: { newParentId: null },
  });
  logger.json("Move to root (same collection)", sameCollection);

  // 2) Different collection: move record to another folder (newParentId = target folder id)
  const differentCollection = await pipeshub.knowledgeBases.moveRecord({
    kbId,
    recordId,
    body: { newParentId: targetFolderId },
  });
  logger.json("Move to folder (different collection)", differentCollection);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});

/**
 * Reindex failed records for a connector
 *   npm run start:reindex-failed
 *   npx ts-node reindex-failed-kb.ts
 *
 * Optional: set CONNECTOR_ID to reindex a specific connector; omit to use API default.
 */
import { Pipeshub } from "@pipeshub-ai/sdk";

async function main(): Promise<void> {
  const pipeshub = new Pipeshub({
    security: { bearerAuth: process.env.PIPESHUB_BEARER_AUTH },
    serverURL: process.env.PIPESHUB_SERVER_URL,
  });

  const connectorId = process.env.CONNECTOR_ID;

  const response = await pipeshub.knowledgeBases.reindexFailedRecords({
    ...(connectorId ? { connectorId } : {}),
  });

  logger.json("Reindex failed records result", response);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});

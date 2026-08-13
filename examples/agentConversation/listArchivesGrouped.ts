import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const result = await pipeshub.agents.listAgentArchivedConversationsGrouped({
    agentPage: 1,
    agentLimit: 20,
  });

  for (const group of result.groups) {
    console.log(`\n${group.agentKey}`);
    for (const conversation of group.conversations) {
      console.log(`  ${conversation.id}  ${conversation.title ?? "(untitled)"}`);
    }
  }
}

main().catch(console.error);

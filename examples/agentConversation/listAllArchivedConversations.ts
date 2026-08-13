import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const agentKey = process.env["AGENT_KEY"] ?? "";

async function main() {
  const result = await pipeshub.agents.listAgentConversationArchives({
    agentKey,
    page: 1,
    limit: 20,
    sortOrder: "desc",
  });

  for (const conversation of result.conversations) {
    console.log(`${conversation.id}  ${conversation.title ?? "(untitled)"}`);
  }
}

main().catch(console.error);

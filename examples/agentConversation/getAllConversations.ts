import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const agentKey = process.env["AGENT_KEY"] ?? "";

async function main() {
  let page = 1;

  while (true) {
    const result = await pipeshub.agents.listAgentConversations({
      agentKey,
      page,
      limit: 20,
      sortBy: "lastActivityAt",
      sortOrder: "desc",
    });

    for (const conversation of result.conversations) {
      console.log(`${conversation.id}  ${conversation.title ?? "(untitled)"}`);
    }

    if (!result.pagination.hasNextPage) break;
    page += 1;
  }
}

main().catch(console.error);

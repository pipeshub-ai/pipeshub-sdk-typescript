import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const result = await pipeshub.agents.listAgents({
    page: 1,
    limit: 20,
    sortBy: "updatedAtTimestamp",
    sortOrder: "desc",
  });

  for (const agent of result.agents) {
    console.log(`${agent.key}  ${agent.name}`);
  }
}

main().catch(console.error);

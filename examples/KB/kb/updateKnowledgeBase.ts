import "dotenv/config";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

async function main() {
  const kb = await pipeshub.knowledgeBase.createKnowledgeBase({
    kbName: "Internal documents",
  });

  const updated = await pipeshub.knowledgeBase.updateKnowledgeBase({
    kbId: kb.id,
    body: { kbName: "Internal documents (2026)" },
  });

  console.log(updated);
}

main().catch(console.error);

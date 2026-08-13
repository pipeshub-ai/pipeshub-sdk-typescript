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

  const folder = await pipeshub.knowledgeBase.createFolder({
    kbId: kb.id,
    body: { folderName: "Reports" },
  });

  const deleted = await pipeshub.knowledgeBase.deleteFolder({
    kbId: kb.id,
    folderId: folder.id,
  });

  console.log(deleted);
}

main().catch(console.error);

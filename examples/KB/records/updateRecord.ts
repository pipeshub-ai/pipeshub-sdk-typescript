import "dotenv/config";
import { openAsBlob } from "node:fs";
import { basename } from "node:path";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: { bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "" },
});

const uploadPath = process.env["PIPESHUB_UPLOAD_PATH"] ?? "";

async function main() {
  const kb = await pipeshub.knowledgeBase.createKnowledgeBase({
    kbName: "Internal documents",
  });

  const upload = await pipeshub.knowledgeBase.uploadRecords({
    kbId: kb.id,
    body: {
      files: [{ fileName: basename(uploadPath), content: await openAsBlob(uploadPath) }],
    },
  }, { timeoutMs: 120_000 });

  let recordId: string | undefined;

  for await (const event of upload) {
    if (event.event === "file:succeeded" && event.data) {
      recordId = JSON.parse(event.data).recordId;
    }
  }

  if (!recordId) throw new Error("upload finished without a file:succeeded event");

  const updated = await pipeshub.knowledgeBase.updateRecord({
    recordId,
    body: { recordName: "Updated record name" },
  });

  console.log(updated);
}

main().catch(console.error);

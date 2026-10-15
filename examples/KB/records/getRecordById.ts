import "dotenv/config";
import { openAsBlob } from "node:fs";
import { basename } from "node:path";
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  // OAuth2 client credentials. The SDK fetches the access token itself.
  security: {
    oauth2: {
      clientID: process.env["PIPESHUB_CLIENT_ID"] ?? "",
      clientSecret: process.env["PIPESHUB_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["PIPESHUB_TOKEN_URL"]
        || `${process.env["PIPESHUB_BASE_URL"]}/api/v1/oauth2/token`,
    },
  },
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
      recordId = event.data.recordId;
    }
  }

  if (!recordId) throw new Error("upload finished without a file:succeeded event");

  const result = await pipeshub.knowledgeBase.getRecordById({ recordId });

  console.log(`${result.record.recordName}  ${result.record.indexingStatus}`);
  console.log(`knowledge base: ${result.knowledgeBase?.name}`);
  console.log(result.permissions);

  await pipeshub.knowledgeBase.deleteKnowledgeBase({ kbId: kb.id });
}

main().catch(console.error);

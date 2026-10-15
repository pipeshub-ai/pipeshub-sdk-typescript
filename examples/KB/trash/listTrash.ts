// List the deleted records of a knowledge base. Needs the Labs setting "Move Deleted Records to the Trash".
// Needs PIPESHUB_KB_ID.
import "dotenv/config";
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

const kbId = process.env["PIPESHUB_KB_ID"] ?? "";

async function main() {
  const trash = await pipeshub.knowledgeBase.listTrash({ kbId, limit: 20 });

  console.log(trash.items.map((item) => item.name));
}

main().catch(console.error);

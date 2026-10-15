# pipeshub Examples

This directory contains example scripts demonstrating how to use the pipeshub SDK.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Edit `.env` and add your actual credentials (API keys, tokens, etc.)

The examples need SDK 1.8.0 or later (`package.json` asks for `^1.8.0`).

### Authentication

The examples added in SDK 1.7.1 (`KB/trash`, `KB/kb/getUploadLimits`,
`KB/records/getRecordById`, `KB/records/reindexRecordGroup`, and the non-streaming
`conversation` scripts) authenticate with **OAuth2 client credentials**. Create an OAuth
app with the `client_credentials` grant and set `PIPESHUB_CLIENT_ID` and
`PIPESHUB_CLIENT_SECRET`. The SDK fetches the access token for you, and a new one when it
expires. `PIPESHUB_TOKEN_URL` defaults to `${PIPESHUB_BASE_URL}/api/v1/oauth2/token`.

```ts
const pipeshub = new Pipeshub({
  serverURL: `${process.env["PIPESHUB_BASE_URL"]}/api/v1`,
  security: {
    oauth2: {
      clientID: process.env["PIPESHUB_CLIENT_ID"] ?? "",
      clientSecret: process.env["PIPESHUB_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["PIPESHUB_TOKEN_URL"]
        || `${process.env["PIPESHUB_BASE_URL"]}/api/v1/oauth2/token`,
    },
  },
});
```

The older examples read a JWT access token from `PIPESHUB_BEARER_AUTH` instead.

## Running the Examples

Install once, then run any example by path:

```bash
npm i
npx tsx KB/kb/createKnowledgeBase.ts
npx tsx conversation/streamChat.ts
```

The examples added in SDK 1.7.1 and later are quick-start snippets: one SDK operation per
file. Any ID they need comes from an environment variable (see `.env.template`), so the
header comment of each file says which ones to set.

| Directory | What it covers |
| --- | --- |
| `KB/kb` | Knowledge base CRUD, uploads and upload limits |
| `KB/folder` | Folders inside a knowledge base |
| `KB/records` | Records: get, update, move, reindex, delete, download; reindex a connector record group (`PIPESHUB_RECORD_GROUP_ID`) |
| `KB/trash` | List deleted records and restore them. Needs the workspace Labs setting "Move Deleted Records to the Trash" (`ENABLE_SOFT_DELETE`) |
| `agent` | Agent CRUD |
| `agentConversation` | Conversations scoped to an agent (`AGENT_KEY`) |
| `conversation` | Org assistant conversations, streaming and non-streaming (`createConversation`, `addMessage`), archives, and cancelling a stream |
| `connectors` | One file per connector operation: registry (`getConnectorRegistry`, `getConnectorSchema`, `testConnectorConnection`, `getConnectorEgressIps`), instances (`listConnectorInstances`, `createConnectorInstance` for an RSS feed, `getConnectorInstance`, `deleteConnectorInstance`, `getConnectorStats`, `resyncConnector`, `stopConnectorSync`, `toggleConnector`), configuration (`getConnectorConfig`, `updateConnectorConfig`, `updateConnectorAuthConfig`, `updateConnectorFiltersSyncConfig`), filters (`getConnectorFilters`, `saveConnectorFilters`, `getFilterFieldOptions`), OAuth (`getOAuthAuthorizationUrl`, `handleOAuthCallback`) and OAuth app configs (`getOAuthRegistry`, `getOAuthConnectorType`, `listOAuthConfigs`, `listOAuthConfigsByType`, `createOAuthConfig`, `getOAuthConfig`, `updateOAuthConfig`, `deleteOAuthConfig`). The OAuth app needs the `connector:*` scopes |
| `semanticSearch` | Semantic search and its history |

The streaming examples (`streamChat`, `addMessageStream`, `regenerateAnswer`, and their
`agentConversation` counterparts) speak [AG-UI](https://docs.ag-ui.com/). `event.data` is a
JSON string, so parse it before reading fields:

```ts
for await (const event of stream) {
  const data = event.data ? JSON.parse(event.data) : undefined;
  if (event.event === "TEXT_MESSAGE_CONTENT") process.stdout.write(data.delta ?? "");
}
```

## Type-checking

```bash
npm run typecheck
```

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.

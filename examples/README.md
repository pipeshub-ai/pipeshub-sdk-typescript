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

The personal access token endpoints reject OAuth tokens: they need an
interactive session. Those examples sign in with `PIPESHUB_TEST_USER_EMAIL` and
`PIPESHUB_TEST_USER_PASSWORD` (`userAccount.initAuth`, then `userAccount.authenticate`)
and use the returned session token.

## Running the Examples

Install once, then run any example by path:

```bash
npm i
npx tsx KB/kb/createKnowledgeBase.ts
npx tsx conversation/streamChat.ts
```

Each script is self-contained — it creates whatever it needs (a knowledge base, a
conversation) rather than expecting IDs to already exist.

| Directory | What it covers |
| --- | --- |
| `KB/kb` | Knowledge base CRUD, uploads and upload limits |
| `KB/folder` | Folders inside a knowledge base |
| `KB/records` | Records: get, update, move, reindex, delete, download; reindex a connector record group (`PIPESHUB_CONNECTOR_NAME`) |
| `KB/trash` | List deleted records and restore them. Needs the workspace Labs setting "Move Deleted Records to the Trash" (`ENABLE_SOFT_DELETE`) |
| `agent` | Agent CRUD |
| `agentConversation` | Conversations scoped to an agent (`AGENT_KEY`) |
| `conversation` | Org assistant conversations, streaming and non-streaming (`createConversation`, `addMessage`), archives, and cancelling a stream |
| `connectors` | `gmailWorkspaceConnector.ts`: a team Gmail Workspace connector with a Google service account with domain-wide delegation (`PIPESHUB_GOOGLE_SERVICE_ACCOUNT_FILE`, `PIPESHUB_GOOGLE_ADMIN_EMAIL`), mail received in the last 7 days. `driveWorkspaceConnector.ts`: a team Drive Workspace connector with the same Google service account, files modified in the last 30 days, one drive when `PIPESHUB_GOOGLE_DRIVE_ID` is set or the connector lists any. `confluenceConnector.ts`: a team Confluence connector with an Atlassian API token (`PIPESHUB_ATLASSIAN_BASE_URL`, `PIPESHUB_ATLASSIAN_EMAIL`, `PIPESHUB_ATLASSIAN_API_TOKEN`), one space (`PIPESHUB_CONFLUENCE_SPACE_KEY`, or the first). `jiraConnector.ts`: a team Jira connector with the same Atlassian API token, one project (`PIPESHUB_JIRA_PROJECT_KEY`, or the first) and issues modified in the last 30 days. `s3Connector.ts`: a team S3 connector with an access key (`PIPESHUB_S3_ACCESS_KEY`, `PIPESHUB_S3_SECRET_KEY`), one bucket (`PIPESHUB_S3_BUCKET`, or the first). Each syncs, waits until indexing finishes, searches it, then turns the sync off and deletes it. Gmail, Drive, Confluence, Jira and Slack keep the source's permissions, so search only finds their records for PipesHub users whose email has access in the source; the examples report that instead of failing. `azureFilesConnector.ts`: creates a team Azure Files connector with the storage account connection string (`PIPESHUB_AZURE_FILES_CONNECTION_STRING`), limits its sync to one file share (`PIPESHUB_AZURE_FILES_SHARE`, or the first it can see), syncs, waits until indexing finishes, searches it, then turns the sync off and deletes it. `slackWorkspaceConnector.ts`: creates a team Slack Workspace connector with `PIPESHUB_SLACK_BOT_TOKEN`, limits its sync to one channel (`PIPESHUB_SLACK_CHANNEL_ID`, or the first the bot can see) and the last 7 days, syncs, waits for indexing, searches it, then deletes it. Slack records keep Slack's permissions, so search only finds them for PipesHub users whose email matches a member of the channel; the example says so instead of failing when the caller sees none. `rssConnector.ts`: registers an RSS connector for `PIPESHUB_RSS_FEED_URL` (default Hacker News), syncs it, waits until every record is indexed, searches it, then turns the sync off and deletes it. The OAuth app needs `connector:read`, `connector:write`, `connector:sync`, `connector:delete` and `semantic:write`. Hacker News currently refuses the RSS connector (HTTP 419), so use another feed |
| `personalAccessTokens` | Create, list and revoke personal access tokens, plus the admin list and revoke. Signs in with email and password |
| `semanticSearch` | Semantic search and its history |

The streaming examples (`streamChat`, `addMessageStream`, `regenerateAnswer`, and their
`agentConversation` counterparts) speak [AG-UI](https://docs.ag-ui.com/). `event.data` is
already a parsed object, so read fields from it directly:

```ts
for await (const event of stream) {
  const data = event.data ?? {};
  if (event.event === "TEXT_MESSAGE_CONTENT") process.stdout.write(data.delta ?? "");
}
```

## Type-checking

```bash
npm run typecheck
```

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.

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
| `KB/kb` | Knowledge base CRUD and uploads |
| `KB/folder` | Folders inside a knowledge base |
| `KB/records` | Records: update, move, reindex, delete, download |
| `agent` | Agent CRUD |
| `agentConversation` | Conversations scoped to an agent (`AGENT_KEY`) |
| `conversation` | Org assistant conversations |
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

## Connectors

`connectors/` has one program per connector operation, new in SDK 2.0.0. They sign in with
**OAuth2 client credentials**: create an OAuth app with the `client_credentials` grant and the
`connector:*` scopes, then set `PIPESHUB_CLIENT_ID` and `PIPESHUB_CLIENT_SECRET`. The SDK fetches the
token from `PIPESHUB_TOKEN_URL`, or `${PIPESHUB_BASE_URL}/api/v1/oauth2/token` when that is unset.

The file names are camelCase (`createConnectorInstance.ts` for `create_connector_instance`).

```bash
npx tsx connectors/createConnectorInstance.ts
npx tsx connectors/listConnectorInstances.ts
```

`create_connector_instance` creates a team RSS connector and prints its id. Put it in
`PIPESHUB_CONNECTOR_ID` for the programs that act on one connector, and delete it with
`delete_connector_instance` when you are done.

| Variable | Used by |
| --- | --- |
| `PIPESHUB_CONNECTOR_ID` | the programs that act on one connector instance |
| `PIPESHUB_CONNECTOR_TYPE` | the registry, schema, connection check and OAuth configuration programs (`RSS`, `Jira`, ...) |
| `PIPESHUB_FILTER_KEY` | `get_filter_field_options`: a filter of the connector's type whose options are fetched from the source |
| `PIPESHUB_OAUTH_CONFIG_ID` | the get, update and delete OAuth configuration programs |
| `PIPESHUB_OAUTH_CODE`, `PIPESHUB_OAUTH_STATE` | `handle_oauth_callback`: the `code` and `state` of the provider's redirect |

- `get_oauth_authorization_url` needs a connector created with an OAuth auth type; an RSS connector is refused.
- `test_connector_connection` works only for types with a connection check (PostgreSQL, SMB, OneDrive).

## Type-checking

```bash
npx tsc --noEmit -p .
```

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.

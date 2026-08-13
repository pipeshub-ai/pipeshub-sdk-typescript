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

Build once, then run any example by path:

```bash
npm run build
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

## Type-checking

```bash
npx tsc --noEmit -p .
```

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.

# @pipeshub-ai/sdk Examples

Runnable scripts that call a live PipesHub instance through `@pipeshub-ai/sdk`. These are integration demos, not unit tests.

## Prerequisites

- Node.js 18+
- npm
- A running PipesHub backend (local or remote)

## Setup

From this directory:

```bash
npm run build
cp .env.template .env
```

Edit `.env` with your credentials. **Do not commit real secrets.**

On Windows PowerShell:

```powershell
npm run build
Copy-Item .env.template .env
```

If `npm run build` fails on Windows because of `cd -` in the parent build script, build the SDK from the repo root instead:

```powershell
cd ..
npm i
npm run build
cd examples
npm i
```

TypeScript in this folder resolves `@pipeshub-ai/sdk` to the parent [`src/`](../src/) via [`tsconfig.json`](tsconfig.json) `paths`, so the editor can type-check examples without a published `dist/` build. Runtime still uses the `file:..` dependency installed by `npm i`.

## Authentication

Examples use two different auth patterns:

| Example group | Auth | Env vars |
| --- | --- | --- |
| [`agentConversations/`](agentConversations/README.md) | Email/password via [`client.ts`](client.ts) | `PIPESHUB_TEST_USER_EMAIL`, `PIPESHUB_TEST_USER_PASSWORD`, optional `PIPESHUB_BASE_URL` |
| [`kb/`](kb/) | Pre-obtained bearer token | `PIPESHUB_BEARER_AUTH`, `PIPESHUB_SERVER_URL` |

### Agent conversation examples (recommended starting point)

All agent examples are run with `npm run` from this directory. They read credentials from `.env` automatically.

Verify login:

```bash
npm run agent:login
```

Expected output: `login ok`

Run an example (full list in [`agentConversations/README.md`](agentConversations/README.md)):

```bash
npm run agent:stream-and-message
npm run agent:get-all
```

### Knowledge base examples

Set `PIPESHUB_BEARER_AUTH` and `PIPESHUB_SERVER_URL` in `.env`, then:

```bash
npx tsx kb/create-kb.ts
```

(KB scripts do not have npm shortcuts yet.)

## Environment variables (agent conversation)

| Variable | Required | Default / notes |
| --- | --- | --- |
| `PIPESHUB_TEST_USER_EMAIL` | yes | Workspace user email |
| `PIPESHUB_TEST_USER_PASSWORD` | yes | Password for that user (quote the value if it contains `#`, `$`, or spaces) |
| `PIPESHUB_BASE_URL` | no | `http://localhost:3000` (without `/api/v1`) |
| `PIPESHUB_AGENT_KEY` | no | Falls back to default in [`agentConversations/helpers.ts`](agentConversations/helpers.ts) |
| `CONNECTOR_ID` | no | Falls back to default in `helpers.ts`; used in default retrieval filters |
| `PIPESHUB_AGENT_MODEL_KEY` | no | Only needed for `createAgentWithWebSearch()` in helpers |

## Shared utilities

### `client.ts`

- `loadEnv(path)` — loads key/value pairs from a `.env` file via `dotenv`
- `createClient()` — performs email/password auth and returns an authenticated `Pipeshub` client

Agent conversation scripts import these helpers; the npm scripts in [`package.json`](package.json) pass `.env` for you.

## Example groups

| Directory | Description |
| --- | --- |
| [`agentConversations/`](agentConversations/README.md) | Agent chat streaming, conversation CRUD, archives, feedback, regeneration |
| [`kb/`](kb/) | Knowledge base CRUD and node operations (bearer auth) |

## Creating new examples

Duplicate an existing example file — they are not overwritten by the Speakeasy generation process. Only add files under `examples/`; do not edit generated code under `src/`. Add a matching entry to `package.json` `scripts` if you want an npm shortcut.

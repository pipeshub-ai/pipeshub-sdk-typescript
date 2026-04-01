# Mcp

## Overview

Model Context Protocol (MCP) endpoints for AI tool integration.

PipesHub exposes a Streamable HTTP MCP server that allows MCP-compatible clients
(such as Claude Desktop, Cursor, or custom agents) to interact with PipesHub tools
including search, conversations, knowledge base management, and connector operations.

**Transport:** Streamable HTTP (JSON-RPC over HTTP)
**Base Path:** `/mcp` (not under `/api/v1`)

**Authentication:**
All MCP requests require a valid Bearer token or OAuth 2.0 access token.

**Stateless Mode:**
The server operates in stateless mode — each request creates an independent MCP session.


### Available Operations

* [handleMCPRequest](#handlemcprequest) - Handle MCP JSON-RPC request
* [handleMCPStreamingRequest](#handlemcpstreamingrequest) - MCP SSE streaming endpoint

## handleMCPRequest

Main MCP endpoint that handles all JSON-RPC requests including:
- `initialize` — Negotiate capabilities and protocol version
- `tools/list` — List available tools
- `tools/call` — Execute a tool (search, conversations, KB management, etc.)

The server operates in stateless mode with Streamable HTTP transport.
Each request creates an independent MCP server session.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="handleMCPRequest" method="post" path="/mcp" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.mcp.handleMCPRequest({
    jsonrpc: "2.0",
    method: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { mcpHandleMCPRequest } from "@pipeshub-ai/sdk/funcs/mcp-handle-mcp-request.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await mcpHandleMCPRequest(pipeshub, {
    jsonrpc: "2.0",
    method: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpHandleMCPRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HandleMCPRequestRequest](../../models/operations/handle-mcp-request-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.HandleMCPRequestResponse](../../models/operations/handle-mcp-request-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## handleMCPStreamingRequest

Used by MCP clients for SSE (Server-Sent Events) streaming.
In stateless mode, the transport returns 405 Method Not Allowed
since each request is handled independently via POST.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="handleMCPStreamingRequest" method="get" path="/mcp" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.mcp.handleMCPStreamingRequest();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { mcpHandleMCPStreamingRequest } from "@pipeshub-ai/sdk/funcs/mcp-handle-mcp-streaming-request.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await mcpHandleMCPStreamingRequest(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpHandleMCPStreamingRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
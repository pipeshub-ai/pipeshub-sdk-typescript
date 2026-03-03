# ConnectorControl

## Overview

Enable/disable connectors for sync or agent functionality

### Available Operations

* [toggleConnector](#toggleconnector) - Toggle connector sync or agent

## toggleConnector

Enable or disable a connector for sync or agent functionality.<br><br>
<b>Toggle Types:</b><br>
<ul>
<li><code>sync</code> - Enable/disable data synchronization</li>
<li><code>agent</code> - Enable/disable AI agent integration</li>
</ul>
<b>Prerequisites for Enabling:</b><br>
<ul>
<li>Connector must be configured (<code>isConfigured: true</code>)</li>
<li>For OAuth connectors: Must be authenticated (<code>isAuthenticated: true</code>)</li>
<li>For agent: Connector must support agent (<code>supportsAgent: true</code>)</li>
</ul>
<b>Permissions:</b><br>
<ul>
<li>Team scope: Requires admin</li>
<li>Personal scope: Only creator can toggle</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="toggleConnector" method="post" path="/connectors/{connectorId}/toggle" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorControl.toggleConnector({
    connectorId: "<id>",
    body: {
      type: "sync",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorControlToggleConnector } from "@pipeshub-ai/sdk/funcs/connector-control-toggle-connector.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorControlToggleConnector(pipeshub, {
    connectorId: "<id>",
    body: {
      type: "sync",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorControlToggleConnector failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToggleConnectorRequest](../../models/operations/toggle-connector-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToggleConnectorResponse](../../models/operations/toggle-connector-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
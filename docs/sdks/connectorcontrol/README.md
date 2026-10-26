# ConnectorControl

## Overview

Enable/disable connectors for sync or agent functionality

### Available Operations

* [toggleConnector](#toggleconnector) - Toggle connector sync or agent

## toggleConnector

Flip a connector's sync or agent use: each call turns it on when it is off and
off when it is on. Read <code>isActive</code> / <code>isAgentActive</code> first. Turning sync on
starts the first sync.<br><br>
<b>Toggle Types:</b><br>
<ul>
<li><code>sync</code> - data synchronization</li>
<li><code>agent</code> - use by AI agents</li>
</ul>
<b>Before Sync Can Be Turned On:</b><br>
<ul>
<li>The connector is configured (<code>isConfigured: true</code>)</li>
<li>OAuth connectors: sign-in has completed</li>
<li>The connection test against the source passes</li>
<li>For agent: the connector supports agents (<code>supportsAgent: true</code>)</li>
<li>Local FS: must be enabled from the owner device via the desktop app, which sends <code>deviceId</code> and <code>deviceName</code>. The first enable claims that device as owner.</li>
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

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 403, 404                | application/json                  |
| errors.LocalFsDesktopRefusalError | 409                               | application/json                  |
| errors.ErrorResponse              | 409                               | application/json                  |
| errors.ErrorResponse              | 500                               | application/json                  |
| errors.PipeshubDefaultError       | 4XX, 5XX                          | \*/\*                             |
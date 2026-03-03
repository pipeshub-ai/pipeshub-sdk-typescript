# ConnectorRegistry

## Overview

Browse available connector types and their configuration schemas

### Available Operations

* [getConnectorRegistry](#getconnectorregistry) - List available connector types
* [getConnectorSchema](#getconnectorschema) - Get connector configuration schema

## getConnectorRegistry

Get all available connector types from the registry.<br><br>
<b>Overview:</b><br>
The registry contains all connector types that can be configured as instances.
Each type has specific authentication requirements, supported scopes, and capabilities.<br><br>
<b>Connector Types Include:</b><br>
<ul>
<li><b>Google Workspace:</b> Drive, Gmail, Calendar, etc.</li>
<li><b>Microsoft 365:</b> OneDrive, Outlook, SharePoint, etc.</li>
<li><b>Cloud Storage:</b> Dropbox, Box, AWS S3</li>
<li><b>Collaboration:</b> Slack, Confluence, Notion, Jira</li>
<li><b>Databases:</b> PostgreSQL, MySQL, MongoDB</li>
</ul>
<b>Filtering:</b><br>
Use <code>scope</code> to filter by team or personal connectors.
Use <code>search</code> for full-text search across connector names.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorRegistry" method="get" path="/connectors/registry" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorRegistry.getConnectorRegistry({
    scope: "team",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorRegistryGetConnectorRegistry } from "@pipeshub-ai/sdk/funcs/connector-registry-get-connector-registry.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorRegistryGetConnectorRegistry(pipeshub, {
    scope: "team",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorRegistryGetConnectorRegistry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorRegistryRequest](../../models/operations/get-connector-registry-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorRegistryResponse](../../models/operations/get-connector-registry-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConnectorSchema

Get the configuration schema for a specific connector type.<br><br>
<b>Overview:</b><br>
Returns JSON Schema definitions for authentication, sync settings, and
filter options. Use this to dynamically build configuration forms.<br><br>
<b>Schema Sections:</b><br>
<ul>
<li><b>authSchema:</b> Fields for authentication (credentials, tokens)</li>
<li><b>syncSchema:</b> Sync settings (schedule, incremental options)</li>
<li><b>filterSchema:</b> Filter field definitions</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorSchema" method="get" path="/connectors/registry/{connectorType}/schema" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorRegistry.getConnectorSchema({
    connectorType: "google-drive",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorRegistryGetConnectorSchema } from "@pipeshub-ai/sdk/funcs/connector-registry-get-connector-schema.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorRegistryGetConnectorSchema(pipeshub, {
    connectorType: "google-drive",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorRegistryGetConnectorSchema failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorSchemaRequest](../../models/operations/get-connector-schema-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorSchemaResponse](../../models/operations/get-connector-schema-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
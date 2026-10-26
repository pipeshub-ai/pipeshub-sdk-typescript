# ConnectorRegistry

## Overview

Browse available connector types and their configuration schemas

### Available Operations

* [getConnectorRegistry](#getconnectorregistry) - List available connector types
* [getConnectorSchema](#getconnectorschema) - Get connector configuration schema
* [testConnectorConnection](#testconnectorconnection) - Test connector credentials before saving
* [getConnectorEgressIps](#getconnectoregressips) - Get the IP addresses connectors connect from

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
  const result = await pipeshub.connectorRegistry.getConnectorRegistry({});

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
  const res = await connectorRegistryGetConnectorRegistry(pipeshub, {});
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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConnectorSchema

The configuration form for one connector type.<br><br>
<b>Sections:</b><br>
<ul>
<li><b>auth:</b> <code>supportedAuthTypes</code>, and per auth type in <code>schemas</code> the
fields to send in <code>config.auth</code> (by <code>name</code>) plus, for OAuth, the
<code>redirectUri</code> path</li>
<li><b>sync:</b> <code>supportedStrategies</code>, <code>scheduledConfig</code> defaults, and the
connector's own settings in <code>customFields</code> (sent in <code>config.sync</code> by
<code>name</code>)</li>
<li><b>filters:</b> the <code>sync</code> and <code>indexing</code> filter fields; a field with
<code>optionSourceType: dynamic</code> gets its values from
<code>GET /connectors/{connectorId}/filters/{filterKey}/options</code></li>
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
    connectorType: "Jira",
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
    connectorType: "Jira",
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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## testConnectorConnection

Try the auth settings from a connector's setup form without creating or
changing an instance.<br><br>
<b>Overview:</b><br>
Only connector types whose schema has <code>supportsConnectionCheck: true</code>
can be tested. A failed check is not an error: the response is
<code>200</code> with <code>success: false</code> and a <code>message</code>
to show the user (for example a wrong password, an unknown database, or a
timeout because a firewall blocks PipesHub's IP address).<br><br>
<b>Editing an instance:</b><br>
Pass <code>connectorId</code> to lay the settings over the instance's saved
ones, as <code>PUT /connectors/{connectorId}/config/auth</code> does. The
caller must be allowed to update that instance.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="testConnectorConnection" method="post" path="/connectors/registry/{connectorType}/test-connection" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorRegistry.testConnectorConnection({
    connectorType: "PostgreSQL",
    body: {
      auth: {
        "host": "db.example.com",
        "port": "5432",
        "database": "analytics",
        "username": "reader",
        "password": "your-password",
      },
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
import { connectorRegistryTestConnectorConnection } from "@pipeshub-ai/sdk/funcs/connector-registry-test-connector-connection.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorRegistryTestConnectorConnection(pipeshub, {
    connectorType: "PostgreSQL",
    body: {
      auth: {
        "host": "db.example.com",
        "port": "5432",
        "database": "analytics",
        "username": "reader",
        "password": "your-password",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorRegistryTestConnectorConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TestConnectorConnectionRequest](../../models/operations/test-connector-connection-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TestConnectorConnectionResponse](../../models/operations/test-connector-connection-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConnectorEgressIps

Public IP addresses PipesHub's connectors use to reach external systems, for
users to allow in a database's or API's firewall.<br><br>
Set by the deployment through <code>CONNECTOR_EGRESS_IPS</code>; otherwise
looked up by the connector service and cached. The list is empty when the
address cannot be determined, or when the deployment sets
<code>CONNECTOR_EGRESS_IPS=none</code>.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorEgressIps" method="get" path="/connectors/network/egress-ips" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorRegistry.getConnectorEgressIps();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorRegistryGetConnectorEgressIps } from "@pipeshub-ai/sdk/funcs/connector-registry-get-connector-egress-ips.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorRegistryGetConnectorEgressIps(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorRegistryGetConnectorEgressIps failed:", res.error);
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

### Response

**Promise\<[operations.GetConnectorEgressIpsResponse](../../models/operations/get-connector-egress-ips-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403                    | application/json            |
| errors.ErrorResponse        | 503                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
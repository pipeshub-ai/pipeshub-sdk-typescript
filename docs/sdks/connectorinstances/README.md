# ConnectorInstances

## Overview

Create, manage, and delete connector instances for your organization

### Available Operations

* [listConnectorInstances](#listconnectorinstances) - List connector instances
* [createConnectorInstance](#createconnectorinstance) - Create connector instance
* [getConnectorInstance](#getconnectorinstance) - Get connector instance
* [deleteConnectorInstance](#deleteconnectorinstance) - Delete connector instance
* [getConnectorStats](#getconnectorstats) - Get connector statistics
* [resyncConnector](#resyncconnector) - Resync connector
* [stopConnectorSync](#stopconnectorsync) - Stop the running sync for a connector

## listConnectorInstances

Get all configured connector instances for your organization.<br><br>
<b>Overview:</b><br>
Returns instances created by users, filtered by scope and permissions.
Team-scope connectors are visible to all org users. Personal connectors
are only visible to their creators.<br><br>
<b>Instance States:</b><br>
<ul>
<li><b>isConfigured:</b> All required settings are complete</li>
<li><b>isAuthenticated:</b> OAuth flow complete or credentials valid</li>
<li><b>isActive:</b> Connector is enabled for sync/agent</li>
<li><b>desktopOnline:</b> Owner device's desktop app connected (Local FS only)</li>
<li><b>ownerDeviceId / ownerDeviceName:</b> Desktop device that owns the connector, set on first enable (Local FS only)</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listConnectorInstances" method="get" path="/connectors" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.listConnectorInstances({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesListConnectorInstances } from "@pipeshub-ai/sdk/funcs/connector-instances-list-connector-instances.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesListConnectorInstances(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesListConnectorInstances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConnectorInstancesRequest](../../models/operations/list-connector-instances-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectorInstancesResponse](../../models/operations/list-connector-instances-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## createConnectorInstance

Create a connector instance from a registry type.<br><br>
<b>Body:</b><br>
Put the auth fields the registry schema lists for <code>authType</code> in <code>config.auth</code>,
flat, and the connector's own sync settings in <code>config.sync</code>. A connector that needs no
OAuth sign-in is configured on creation.<br><br>
<b>OAuth:</b><br>
An admin may send the OAuth app's credentials in <code>config.auth</code>: the app is saved and
linked. Anyone may send <code>config.auth.oauthConfigId</code> to use a saved app; non-admins must.
Send <code>baseUrl</code>: the provider redirects to <code>{baseUrl}/{redirectUri}</code>.<br><br>
<b>Scope Permissions:</b><br>
<ul>
<li><code>team</code> scope requires admin privileges</li>
<li><code>personal</code> scope available to all users</li>
</ul>
<b>Next Steps After Creation:</b><br>
<ol>
<li>OAuth only: <code>GET /{id}/oauth/authorize</code>, then <code>GET /oauth/callback</code></li>
<li>Optionally set sync and filters via <code>PUT /{id}/config/filters-sync</code></li>
<li>Turn sync on via <code>POST /{id}/toggle</code></li>
</ol>


### Example Usage: confluence

<!-- UsageSnippet language="typescript" operationID="createConnectorInstance" method="post" path="/connectors" example="confluence" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "confluence",
    instanceName: "My Confluence",
    scope: "personal",
    authType: "API_TOKEN",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesCreateConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-create-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesCreateConnectorInstance(pipeshub, {
    connectorType: "confluence",
    instanceName: "My Confluence",
    scope: "personal",
    authType: "API_TOKEN",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesCreateConnectorInstance failed:", res.error);
  }
}

run();
```
### Example Usage: googleDrive

<!-- UsageSnippet language="typescript" operationID="createConnectorInstance" method="post" path="/connectors" example="googleDrive" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "google-drive",
    instanceName: "Company Google Drive",
    scope: "team",
    authType: "OAUTH_ADMIN_CONSENT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesCreateConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-create-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesCreateConnectorInstance(pipeshub, {
    connectorType: "google-drive",
    instanceName: "Company Google Drive",
    scope: "team",
    authType: "OAUTH_ADMIN_CONSENT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesCreateConnectorInstance failed:", res.error);
  }
}

run();
```
### Example Usage: jiraNewOAuthApp

<!-- UsageSnippet language="typescript" operationID="createConnectorInstance" method="post" path="/connectors" example="jiraNewOAuthApp" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "Jira",
    instanceName: "Engineering Jira",
    scope: "team",
    authType: "OAUTH",
    config: {
      auth: {
        oauthInstanceName: "Atlassian app",
        "clientId": "your-atlassian-client-id",
        "clientSecret": "your-atlassian-client-secret",
      },
    },
    baseUrl: "https://pipeshub.example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesCreateConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-create-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesCreateConnectorInstance(pipeshub, {
    connectorType: "Jira",
    instanceName: "Engineering Jira",
    scope: "team",
    authType: "OAUTH",
    config: {
      auth: {
        oauthInstanceName: "Atlassian app",
        "clientId": "your-atlassian-client-id",
        "clientSecret": "your-atlassian-client-secret",
      },
    },
    baseUrl: "https://pipeshub.example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesCreateConnectorInstance failed:", res.error);
  }
}

run();
```
### Example Usage: jiraSavedOAuthApp

<!-- UsageSnippet language="typescript" operationID="createConnectorInstance" method="post" path="/connectors" example="jiraSavedOAuthApp" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "Jira",
    instanceName: "Engineering Jira",
    scope: "team",
    authType: "OAUTH",
    config: {
      auth: {
        oauthConfigId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    },
    baseUrl: "https://pipeshub.example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesCreateConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-create-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesCreateConnectorInstance(pipeshub, {
    connectorType: "Jira",
    instanceName: "Engineering Jira",
    scope: "team",
    authType: "OAUTH",
    config: {
      auth: {
        oauthConfigId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    },
    baseUrl: "https://pipeshub.example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesCreateConnectorInstance failed:", res.error);
  }
}

run();
```
### Example Usage: postgresBasicAuth

<!-- UsageSnippet language="typescript" operationID="createConnectorInstance" method="post" path="/connectors" example="postgresBasicAuth" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "PostgreSQL",
    instanceName: "Analytics database",
    scope: "team",
    authType: "BASIC_AUTH",
    config: {
      auth: {
        "host": "db.example.com",
        "port": 5432,
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
import { connectorInstancesCreateConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-create-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesCreateConnectorInstance(pipeshub, {
    connectorType: "PostgreSQL",
    instanceName: "Analytics database",
    scope: "team",
    authType: "BASIC_AUTH",
    config: {
      auth: {
        "host": "db.example.com",
        "port": 5432,
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
    console.log("connectorInstancesCreateConnectorInstance failed:", res.error);
  }
}

run();
```
### Example Usage: rss

<!-- UsageSnippet language="typescript" operationID="createConnectorInstance" method="post" path="/connectors" example="rss" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.createConnectorInstance({
    connectorType: "RSS",
    instanceName: "Company blog",
    scope: "team",
    config: {
      sync: {
        "feed_urls": "https://example.com/feed.xml",
        "max_articles_per_feed": 50,
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
import { connectorInstancesCreateConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-create-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesCreateConnectorInstance(pipeshub, {
    connectorType: "RSS",
    instanceName: "Company blog",
    scope: "team",
    config: {
      sync: {
        "feed_urls": "https://example.com/feed.xml",
        "max_articles_per_feed": 50,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesCreateConnectorInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateConnectorRequest](../../models/create-connector-request.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateConnectorInstanceResponse](../../models/operations/create-connector-instance-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConnectorInstance

Retrieve a specific connector instance by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorInstance" method="get" path="/connectors/{connectorId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.getConnectorInstance({
    connectorId: "conn_abc123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesGetConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-get-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesGetConnectorInstance(pipeshub, {
    connectorId: "conn_abc123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesGetConnectorInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorInstanceRequest](../../models/operations/get-connector-instance-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorInstanceResponse](../../models/operations/get-connector-instance-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteConnectorInstance

Delete a connector instance and everything synced from it. The request
answers `202` as soon as the deletion has started; the deletion itself
runs in the background.<br><br>
<b>Warning:</b><br>
Deletion is permanent. The connector's records, record groups,
permissions and relations are removed from the graph database, its
embeddings are removed from the vector store, its stored configuration
and credentials are deleted, and its stored files are deleted (content
another connector still uses is kept). The records don't go to the
trash and can't be restored. Its sync schedule is removed too.<br><br>
<b>Permissions:</b><br>
The connector's creator or an admin, for either scope. An admin can
delete a member's personal connector.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteConnectorInstance" method="delete" path="/connectors/{connectorId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.deleteConnectorInstance({
    connectorId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesDeleteConnectorInstance } from "@pipeshub-ai/sdk/funcs/connector-instances-delete-connector-instance.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesDeleteConnectorInstance(pipeshub, {
    connectorId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesDeleteConnectorInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConnectorInstanceRequest](../../models/operations/delete-connector-instance-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteConnectorInstanceResponse](../../models/operations/delete-connector-instance-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403, 404, 409          | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConnectorStats

Retrieve statistics for a specific connector instance including record counts,
indexing status breakdown, and sync information.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorStats" method="get" path="/connectors/{connectorId}/stats" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.getConnectorStats({
    connectorId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesGetConnectorStats } from "@pipeshub-ai/sdk/funcs/connector-instances-get-connector-stats.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesGetConnectorStats(pipeshub, {
    connectorId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesGetConnectorStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorStatsRequest](../../models/operations/get-connector-stats-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConnectorStats](../../models/connector-stats.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## resyncConnector

Trigger a resync of records from a connector instance.

**Overview:**

Fetches content from the external source and updates local records. Use when you suspect data is out of sync.

**Warning:** This can be resource-intensive for large connectors.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="resyncConnector" method="post" path="/connectors/{connectorId}/resync" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.resyncConnector({
    connectorId: "<id>",
    body: {
      connectorName: "GOOGLE_DRIVE",
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
import { connectorInstancesResyncConnector } from "@pipeshub-ai/sdk/funcs/connector-instances-resync-connector.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesResyncConnector(pipeshub, {
    connectorId: "<id>",
    body: {
      connectorName: "GOOGLE_DRIVE",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesResyncConnector failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResyncConnectorRequest](../../models/operations/resync-connector-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResyncConnectorResponse](../../models/operations/resync-connector-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorResponse              | 400, 401, 403                     | application/json                  |
| errors.LocalFsDesktopRefusalError | 409                               | application/json                  |
| errors.ErrorResponse              | 409                               | application/json                  |
| errors.ErrorResponse              | 500, 503                          | application/json                  |
| errors.PipeshubDefaultError       | 4XX, 5XX                          | \*/\*                             |

## stopConnectorSync

Ask the in-flight sync for a connector instance to stop.

**Overview:**

Returns as soon as the request is recorded; the sync halts at its next
interruptible point, which for a connector inside a long provider call
is when that call returns. `stopped` reports whether a sync was actually
running, and `false` is a normal answer rather than a failure.

Deliberately not refused while the connector is busy or locked: this is
the endpoint that has to work precisely then, including against a lock a
crashed process left behind. When nothing is running it also repairs a
stale SYNCING or FULL_SYNCING status, unless the service cannot tell a
live sync on another worker from a stale one, in which case it changes
nothing and says so.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopConnectorSync" method="post" path="/connectors/{connectorId}/sync/stop" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorInstances.stopConnectorSync({
    connectorId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorInstancesStopConnectorSync } from "@pipeshub-ai/sdk/funcs/connector-instances-stop-connector-sync.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorInstancesStopConnectorSync(pipeshub, {
    connectorId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorInstancesStopConnectorSync failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StopConnectorSyncRequest](../../models/operations/stop-connector-sync-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StopConnectorSyncResponse](../../models/operations/stop-connector-sync-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
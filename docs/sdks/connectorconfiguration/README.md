# ConnectorConfiguration

## Overview

Configure authentication, sync settings, and filters for connectors

### Available Operations

* [getConnectorConfig](#getconnectorconfig) - Get connector configuration
* [updateConnectorConfig](#updateconnectorconfig) - Update connector configuration
* [updateConnectorAuthConfig](#updateconnectorauthconfig) - Update authentication configuration
* [updateConnectorFiltersSyncConfig](#updateconnectorfilterssyncconfig) - Update filters and sync configuration

## getConnectorConfig

Get the current configuration for a connector instance.<br><br>
<b>Security:</b><br>
Stored credentials and OAuth tokens (<code>credentials</code>, <code>oauth</code>)
are never returned. The saved <code>auth</code> values are returned so the
form can be edited, except that each secret (an <code>isSecret</code> or
<code>PASSWORD</code> field of the connector type's auth schema, and a
legacy <code>private_key</code>) comes back as <code>••••••••</code>.
Sending that mask back on a save keeps the stored value. A personal connector's configuration is only
readable by its creator: to anyone else, admins included, it is
answered `404` as if it did not exist. A team connector of another
user is answered `404` to a member.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorConfig" method="get" path="/connectors/{connectorId}/config" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorConfiguration.getConnectorConfig({
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
import { connectorConfigurationGetConnectorConfig } from "@pipeshub-ai/sdk/funcs/connector-configuration-get-connector-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorConfigurationGetConnectorConfig(pipeshub, {
    connectorId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorConfigurationGetConnectorConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectorConfigRequest](../../models/operations/get-connector-config-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorConfigResponse](../../models/operations/get-connector-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConnectorConfig

Update authentication, sync, and filter configuration.<br><br>
<b>Prerequisites:</b><br>
Connector must be <b>disabled</b> before updating configuration.
Disable it first using <code>POST /{id}/toggle</code>.<br><br>
<b>Partial Updates:</b><br>
Only provide the sections you want to update. Omitted sections
are not modified.<br><br>
<b>Secrets:</b><br>
A secret field in <code>auth</code> sent as <code>••••••••</code> keeps the
stored value, so the configuration can be sent back as it was read. The
response masks stored secrets the same way.<br><br>
<b>Signing out:</b><br>
A change to <code>auth</code>, a different top-level <code>oauthConfigId</code>,
or a linked OAuth app that now holds a different client signs the connector
out and clears its OAuth tokens. Sending <code>auth</code> back as it was read,
with secrets as the mask or in full, keeps it signed in.<br><br>
<b>OAuth apps (OAUTH connectors):</b><br>
An OAUTH connector signs in with the client ID and secret of its linked OAuth
app, so client credentials an admin sends in <code>auth</code> go into an app,
as on <code>PUT /{connectorId}/config/auth</code>:
<ul>
  <li>On a connector with no app, an app is created from them and linked
  (<code>auth.oauthConfigId</code> in the response) once every required OAuth
  field is present; until then the values are kept on the connector.</li>
  <li>On a linked connector, changed values update the app named in
  <code>auth.oauthConfigId</code>, and only the fields that changed. Without that
  field a new app is created and linked; the previously linked app, which other
  connectors may share, is not changed.</li>
  <li>The new app is named <code>auth.oauthInstanceName</code>, or else after the
  connector.</li>
</ul>
A linked connector stores no copy of its app's secret fields: they are not
stored, and not returned, in <code>config.auth</code>. Its client ID and provider
URLs are the app's. Only an admin's credentials create or change an app.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConnectorConfig" method="put" path="/connectors/{connectorId}/config" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorConfiguration.updateConnectorConfig({
    connectorId: "<id>",
    body: {
      auth: {
        "baseUrl": "https://mycompany.atlassian.net",
        "email": "admin@mycompany.com",
        "apiToken": "ATATT3x...",
      },
      baseUrl: "https://confluence.mycompany.com",
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
import { connectorConfigurationUpdateConnectorConfig } from "@pipeshub-ai/sdk/funcs/connector-configuration-update-connector-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorConfigurationUpdateConnectorConfig(pipeshub, {
    connectorId: "<id>",
    body: {
      auth: {
        "baseUrl": "https://mycompany.atlassian.net",
        "email": "admin@mycompany.com",
        "apiToken": "ATATT3x...",
      },
      baseUrl: "https://confluence.mycompany.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorConfigurationUpdateConnectorConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConnectorConfigRequest](../../models/operations/update-connector-config-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectorConfigResponse](../../models/operations/update-connector-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConnectorAuthConfig

Update only the authentication configuration.<br><br>
<b>Use Case:</b><br>
Use this when you need to update credentials without changing
sync or filter settings. Useful for credential rotation.<br><br>
<b>Prerequisites:</b><br>
Connector must be disabled. This endpoint clears OAuth state,
requiring re-authentication for OAuth connectors.<br><br>
<b>Secrets:</b><br>
A secret field sent as <code>••••••••</code> keeps the stored value; send a
new value to replace it. The response masks stored secrets the same way.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConnectorAuthConfig" method="put" path="/connectors/{connectorId}/config/auth" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorConfiguration.updateConnectorAuthConfig({
    connectorId: "<id>",
    body: {
      auth: {
        "baseUrl": "https://mycompany.atlassian.net",
        "email": "admin@mycompany.com",
        "apiToken": "ATATT3x...",
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
import { connectorConfigurationUpdateConnectorAuthConfig } from "@pipeshub-ai/sdk/funcs/connector-configuration-update-connector-auth-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorConfigurationUpdateConnectorAuthConfig(pipeshub, {
    connectorId: "<id>",
    body: {
      auth: {
        "baseUrl": "https://mycompany.atlassian.net",
        "email": "admin@mycompany.com",
        "apiToken": "ATATT3x...",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorConfigurationUpdateConnectorAuthConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConnectorAuthConfigRequest](../../models/operations/update-connector-auth-config-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectorAuthConfigResponse](../../models/operations/update-connector-auth-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConnectorFiltersSyncConfig

Update filter selections and sync settings without touching auth.<br><br>
<b>Use Case:</b><br>
Use this to change what data is synced or adjust sync schedule
without re-authenticating.<br><br>
<b>Merging:</b><br>
`sync` is merged key by key into the saved sync settings. Each of
`filters.sync` and `filters.indexing` that is sent replaces the saved
one. A `sync` or `filters` value that is not an object is skipped
without an error. Fields other than `sync` and `filters`, `baseUrl`
included, are dropped without an error.<br><br>
The connector must be disabled (`400` otherwise).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConnectorFiltersSyncConfig" method="put" path="/connectors/{connectorId}/config/filters-sync" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorConfiguration.updateConnectorFiltersSyncConfig({
    connectorId: "<id>",
    body: {
      sync: {},
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
import { connectorConfigurationUpdateConnectorFiltersSyncConfig } from "@pipeshub-ai/sdk/funcs/connector-configuration-update-connector-filters-sync-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorConfigurationUpdateConnectorFiltersSyncConfig(pipeshub, {
    connectorId: "<id>",
    body: {
      sync: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorConfigurationUpdateConnectorFiltersSyncConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConnectorFiltersSyncConfigRequest](../../models/operations/update-connector-filters-sync-config-request.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectorFiltersSyncConfigResponse](../../models/operations/update-connector-filters-sync-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
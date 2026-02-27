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
Sensitive data (credentials, OAuth tokens) are redacted from the response.
Only admins can see partial credential information.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConnectorConfig" method="get" path="/connectors/{connectorId}/config" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.connectorConfiguration.getConnectorConfig({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { connectorConfigurationGetConnectorConfig } from "pipeshub/funcs/connector-configuration-get-connector-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await connectorConfigurationGetConnectorConfig(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
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
| `security`                                                                                                                                                                     | [operations.GetConnectorConfigSecurity](../../models/operations/get-connector-config-security.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectorConfigResponse](../../models/operations/get-connector-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConnectorConfig

Update authentication, sync, and filter configuration.<br><br>
<b>Prerequisites:</b><br>
Connector must be <b>disabled</b> before updating configuration.
Disable it first using <code>POST /{id}/toggle</code>.<br><br>
<b>Partial Updates:</b><br>
Only provide the sections you want to update. Omitted sections
are not modified.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConnectorConfig" method="put" path="/connectors/{connectorId}/config" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.connectorConfiguration.updateConnectorConfig({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
    body: {
      auth: {
        values: {
          "apiKey": "sk-xxxxx",
          "baseUrl": "https://api.example.com",
        },
        oauthConfigId: "oauth_config_123",
      },
      sync: {
        scheduledConfig: {
          cronExpression: "0 */6 * * *",
          timezone: "America/New_York",
        },
        webhookConfig: {
          events: [
            "file.created",
            "file.modified",
            "file.deleted",
          ],
        },
      },
      filters: {
        sync: {
          values: {
            "folders": [
              "folder_id_1",
              "folder_id_2",
            ],
            "fileTypes": [
              "pdf",
              "docx",
              "xlsx",
            ],
            "includeShared": true,
          },
        },
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
import { PipeshubCore } from "pipeshub/core.js";
import { connectorConfigurationUpdateConnectorConfig } from "pipeshub/funcs/connector-configuration-update-connector-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await connectorConfigurationUpdateConnectorConfig(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
    body: {
      auth: {
        values: {
          "apiKey": "sk-xxxxx",
          "baseUrl": "https://api.example.com",
        },
        oauthConfigId: "oauth_config_123",
      },
      sync: {
        scheduledConfig: {
          cronExpression: "0 */6 * * *",
          timezone: "America/New_York",
        },
        webhookConfig: {
          events: [
            "file.created",
            "file.modified",
            "file.deleted",
          ],
        },
      },
      filters: {
        sync: {
          values: {
            "folders": [
              "folder_id_1",
              "folder_id_2",
            ],
            "fileTypes": [
              "pdf",
              "docx",
              "xlsx",
            ],
            "includeShared": true,
          },
        },
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
| `security`                                                                                                                                                                     | [operations.UpdateConnectorConfigSecurity](../../models/operations/update-connector-config-security.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectorConfigResponse](../../models/operations/update-connector-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConnectorAuthConfig

Update only the authentication configuration.<br><br>
<b>Use Case:</b><br>
Use this when you need to update credentials without changing
sync or filter settings. Useful for credential rotation.<br><br>
<b>Prerequisites:</b><br>
Connector must be disabled. This endpoint clears OAuth state,
requiring re-authentication for OAuth connectors.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConnectorAuthConfig" method="put" path="/connectors/{connectorId}/config/auth" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.connectorConfiguration.updateConnectorAuthConfig({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
    body: {
      auth: {
        values: {
          "apiKey": "sk-xxxxx",
          "baseUrl": "https://api.example.com",
        },
        oauthConfigId: "oauth_config_123",
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
import { PipeshubCore } from "pipeshub/core.js";
import { connectorConfigurationUpdateConnectorAuthConfig } from "pipeshub/funcs/connector-configuration-update-connector-auth-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await connectorConfigurationUpdateConnectorAuthConfig(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
    body: {
      auth: {
        values: {
          "apiKey": "sk-xxxxx",
          "baseUrl": "https://api.example.com",
        },
        oauthConfigId: "oauth_config_123",
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
| `security`                                                                                                                                                                     | [operations.UpdateConnectorAuthConfigSecurity](../../models/operations/update-connector-auth-config-security.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectorAuthConfigResponse](../../models/operations/update-connector-auth-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateConnectorFiltersSyncConfig

Update filter selections and sync settings without touching auth.<br><br>
<b>Use Case:</b><br>
Use this to change what data is synced or adjust sync schedule
without re-authenticating.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConnectorFiltersSyncConfig" method="put" path="/connectors/{connectorId}/config/filters-sync" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.connectorConfiguration.updateConnectorFiltersSyncConfig({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
    body: {
      sync: {
        scheduledConfig: {
          cronExpression: "0 */6 * * *",
          timezone: "America/New_York",
        },
        webhookConfig: {
          events: [
            "file.created",
            "file.modified",
            "file.deleted",
          ],
        },
      },
      filters: {
        sync: {
          values: {
            "folders": [
              "folder_id_1",
              "folder_id_2",
            ],
            "fileTypes": [
              "pdf",
              "docx",
              "xlsx",
            ],
            "includeShared": true,
          },
        },
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
import { PipeshubCore } from "pipeshub/core.js";
import { connectorConfigurationUpdateConnectorFiltersSyncConfig } from "pipeshub/funcs/connector-configuration-update-connector-filters-sync-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await connectorConfigurationUpdateConnectorFiltersSyncConfig(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    connectorId: "<id>",
    body: {
      sync: {
        scheduledConfig: {
          cronExpression: "0 */6 * * *",
          timezone: "America/New_York",
        },
        webhookConfig: {
          events: [
            "file.created",
            "file.modified",
            "file.deleted",
          ],
        },
      },
      filters: {
        sync: {
          values: {
            "folders": [
              "folder_id_1",
              "folder_id_2",
            ],
            "fileTypes": [
              "pdf",
              "docx",
              "xlsx",
            ],
            "includeShared": true,
          },
        },
      },
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
| `security`                                                                                                                                                                     | [operations.UpdateConnectorFiltersSyncConfigSecurity](../../models/operations/update-connector-filters-sync-config-security.md)                                                | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectorFiltersSyncConfigResponse](../../models/operations/update-connector-filters-sync-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
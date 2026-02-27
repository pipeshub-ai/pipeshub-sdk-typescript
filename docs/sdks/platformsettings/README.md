# PlatformSettings

## Overview

Platform-wide settings including file upload limits, feature flags, and custom system prompts.

### Available Operations

* [setPlatformSettings](#setplatformsettings) - Update platform settings
* [getPlatformSettings](#getplatformsettings) - Get platform settings
* [getAvailableFeatureFlags](#getavailablefeatureflags) - Get available feature flags
* [setCustomSystemPrompt](#setcustomsystemprompt) - Update custom system prompt
* [getCustomSystemPrompt](#getcustomsystemprompt) - Get custom system prompt

## setPlatformSettings

Configure platform-wide settings including file upload limits and feature flags.

**File Upload Limits:**
- Default: 30MB (31457280 bytes)
- Maximum: 1GB (1073741824 bytes)

**Available Feature Flags:**
- ENABLE_BETA_CONNECTORS: Enable beta connector integrations (default: false)


### Example Usage: default30MB

<!-- UsageSnippet language="typescript" operationID="setPlatformSettings" method="post" path="/configurationManager/platform/settings" example="default30MB" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  await pipeshub.platformSettings.setPlatformSettings({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    fileUploadMaxSizeBytes: 31457280,
    featureFlags: {
      "ENABLE_BETA_CONNECTORS": false,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsSetPlatformSettings } from "pipeshub/funcs/platform-settings-set-platform-settings.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsSetPlatformSettings(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    fileUploadMaxSizeBytes: 31457280,
    featureFlags: {
      "ENABLE_BETA_CONNECTORS": false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("platformSettingsSetPlatformSettings failed:", res.error);
  }
}

run();
```
### Example Usage: enableBetaFeatures

<!-- UsageSnippet language="typescript" operationID="setPlatformSettings" method="post" path="/configurationManager/platform/settings" example="enableBetaFeatures" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  await pipeshub.platformSettings.setPlatformSettings({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    fileUploadMaxSizeBytes: 31457280,
    featureFlags: {
      "ENABLE_BETA_CONNECTORS": true,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsSetPlatformSettings } from "pipeshub/funcs/platform-settings-set-platform-settings.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsSetPlatformSettings(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    fileUploadMaxSizeBytes: 31457280,
    featureFlags: {
      "ENABLE_BETA_CONNECTORS": true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("platformSettingsSetPlatformSettings failed:", res.error);
  }
}

run();
```
### Example Usage: increased100MB

<!-- UsageSnippet language="typescript" operationID="setPlatformSettings" method="post" path="/configurationManager/platform/settings" example="increased100MB" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  await pipeshub.platformSettings.setPlatformSettings({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    fileUploadMaxSizeBytes: 104857600,
    featureFlags: {
      "ENABLE_BETA_CONNECTORS": false,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsSetPlatformSettings } from "pipeshub/funcs/platform-settings-set-platform-settings.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsSetPlatformSettings(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    fileUploadMaxSizeBytes: 104857600,
    featureFlags: {
      "ENABLE_BETA_CONNECTORS": false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("platformSettingsSetPlatformSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetPlatformSettingsRequest](../../models/operations/set-platform-settings-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SetPlatformSettingsSecurity](../../models/operations/set-platform-settings-security.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getPlatformSettings

Retrieve current platform settings including file upload limits and feature flag states.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPlatformSettings" method="get" path="/configurationManager/platform/settings" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.platformSettings.getPlatformSettings({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsGetPlatformSettings } from "pipeshub/funcs/platform-settings-get-platform-settings.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsGetPlatformSettings(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("platformSettingsGetPlatformSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetPlatformSettingsSecurity](../../models/operations/get-platform-settings-security.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PlatformSettings](../../models/platform-settings.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAvailableFeatureFlags

List all available feature flags with their descriptions and default values.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAvailableFeatureFlags" method="get" path="/configurationManager/platform/feature-flags/available" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.platformSettings.getAvailableFeatureFlags({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsGetAvailableFeatureFlags } from "pipeshub/funcs/platform-settings-get-available-feature-flags.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsGetAvailableFeatureFlags(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("platformSettingsGetAvailableFeatureFlags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetAvailableFeatureFlagsSecurity](../../models/operations/get-available-feature-flags-security.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAvailableFeatureFlagsResponse](../../models/operations/get-available-feature-flags-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## setCustomSystemPrompt

Set a custom system prompt that will be used by AI models.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setCustomSystemPrompt" method="put" path="/configurationManager/prompts/system" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  await pipeshub.platformSettings.setCustomSystemPrompt({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsSetCustomSystemPrompt } from "pipeshub/funcs/platform-settings-set-custom-system-prompt.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsSetCustomSystemPrompt(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("platformSettingsSetCustomSystemPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CustomSystemPrompt](../../models/custom-system-prompt.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SetCustomSystemPromptSecurity](../../models/operations/set-custom-system-prompt-security.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCustomSystemPrompt

Get custom system prompt.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCustomSystemPrompt" method="get" path="/configurationManager/prompts/system" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.platformSettings.getCustomSystemPrompt({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { platformSettingsGetCustomSystemPrompt } from "pipeshub/funcs/platform-settings-get-custom-system-prompt.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await platformSettingsGetCustomSystemPrompt(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("platformSettingsGetCustomSystemPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetCustomSystemPromptSecurity](../../models/operations/get-custom-system-prompt-security.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomSystemPrompt](../../models/custom-system-prompt.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
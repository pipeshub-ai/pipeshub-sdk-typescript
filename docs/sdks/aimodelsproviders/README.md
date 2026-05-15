# AIModelsProviders

## Overview

### Available Operations

* [getAvailableModelsByType](#getavailablemodelsbytype) - Get available models by type

## getAvailableModelsByType

Returns a **flattened list** of individual AI models of the requested type,
suitable for use in selection dropdowns and model-picker UIs.

Each provider configuration entry may specify multiple comma-separated model
names; this endpoint expands those into one object per model name so callers
receive a flat, enumerable collection.

**Flattening rules:**
- Only the **first** model in a multi-model provider entry is marked
  `isDefault: true`; all subsequent models from the same entry get `false`.
- `modelFriendlyName` is included **only** when the provider entry contains
  exactly one model name (not a comma-separated list).
- When no providers of the requested type are configured the endpoint still
  returns HTTP **200** with an empty `models` array — this is **not** an error.

**Access control:** requires a valid bearer token. For OAuth tokens the
`config:read` scope must be present; regular JWT bearer tokens pass through
without scope enforcement.


### Example Usage: no_models_configured

<!-- UsageSnippet language="typescript" operationID="getAvailableModelsByType" method="get" path="/configurationManager/ai-models/available/{modelType}" example="no_models_configured" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.aiModelsProviders.getAvailableModelsByType({
    modelType: "llm",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { aiModelsProvidersGetAvailableModelsByType } from "@pipeshub-ai/sdk/funcs/ai-models-providers-get-available-models-by-type.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await aiModelsProvidersGetAvailableModelsByType(pipeshub, {
    modelType: "llm",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiModelsProvidersGetAvailableModelsByType failed:", res.error);
  }
}

run();
```
### Example Usage: two_llm_models

<!-- UsageSnippet language="typescript" operationID="getAvailableModelsByType" method="get" path="/configurationManager/ai-models/available/{modelType}" example="two_llm_models" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.aiModelsProviders.getAvailableModelsByType({
    modelType: "embedding",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { aiModelsProvidersGetAvailableModelsByType } from "@pipeshub-ai/sdk/funcs/ai-models-providers-get-available-models-by-type.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await aiModelsProvidersGetAvailableModelsByType(pipeshub, {
    modelType: "embedding",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiModelsProvidersGetAvailableModelsByType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAvailableModelsByTypeRequest](../../models/operations/get-available-models-by-type-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAvailableModelsByTypeResponse](../../models/operations/get-available-models-by-type-response.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetAvailableModelsByTypeBadRequestError     | 400                                                | application/json                                   |
| errors.GetAvailableModelsByTypeUnauthorizedError   | 401                                                | application/json                                   |
| errors.GetAvailableModelsByTypeForbiddenError      | 403                                                | application/json                                   |
| errors.GetAvailableModelsByTypeInternalServerError | 500                                                | application/json                                   |
| errors.PipeshubDefaultError                        | 4XX, 5XX                                           | \*/\*                                              |
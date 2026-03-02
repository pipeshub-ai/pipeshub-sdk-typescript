# AIModelsProviders

## Overview

Manage individual AI model providers - add, update, delete, and set defaults.

### Available Operations

* [getModelsByType](#getmodelsbytype) - Get models by type
* [getAvailableModelsByType](#getavailablemodelsbytype) - Get available models for selection
* [addAIModelProvider](#addaimodelprovider) - Add new AI model provider
* [updateAIModelProvider](#updateaimodelprovider) - Update AI model provider
* [deleteAIModelProvider](#deleteaimodelprovider) - Delete AI model provider
* [setDefaultAIModel](#setdefaultaimodel) - Set default AI model

## getModelsByType

Get all configured models of a specific type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getModelsByType" method="get" path="/configurationManager/ai-models/{modelType}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.aiModelsProviders.getModelsByType({
    modelType: "embedding",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { aiModelsProvidersGetModelsByType } from "pipeshub/funcs/ai-models-providers-get-models-by-type.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await aiModelsProvidersGetModelsByType(pipeshub, {
    modelType: "embedding",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiModelsProvidersGetModelsByType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetModelsByTypeRequest](../../models/operations/get-models-by-type-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetModelsByTypeResponse](../../models/operations/get-models-by-type-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAvailableModelsByType

Get available models in a flattened format for UI selection dropdowns.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAvailableModelsByType" method="get" path="/configurationManager/ai-models/available/{modelType}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
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
import { PipeshubCore } from "pipeshub/core.js";
import { aiModelsProvidersGetAvailableModelsByType } from "pipeshub/funcs/ai-models-providers-get-available-models-by-type.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
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

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## addAIModelProvider

Add a new AI model provider configuration. Performs a health check before saving to verify connectivity. Supported providers: openai, anthropic, azure-openai, aws-bedrock, google-vertex, ollama, huggingface.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addAIModelProvider" method="post" path="/configurationManager/ai-models/providers" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.aiModelsProviders.addAIModelProvider({
    modelType: "embedding",
    provider: "openai",
    configuration: {
      model: "gpt-4",
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
import { aiModelsProvidersAddAIModelProvider } from "pipeshub/funcs/ai-models-providers-add-ai-model-provider.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await aiModelsProvidersAddAIModelProvider(pipeshub, {
    modelType: "embedding",
    provider: "openai",
    configuration: {
      model: "gpt-4",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiModelsProvidersAddAIModelProvider failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AddAIModelProviderRequest](../../models/add-ai-model-provider-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AIModelProviderResponse](../../models/ai-model-provider-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAIModelProvider

Update an existing AI model provider configuration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAIModelProvider" method="put" path="/configurationManager/ai-models/providers/{modelType}/{modelKey}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.aiModelsProviders.updateAIModelProvider({
    modelType: "reasoning",
    modelKey: "<value>",
    body: {
      provider: "<value>",
      configuration: {},
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { aiModelsProvidersUpdateAIModelProvider } from "pipeshub/funcs/ai-models-providers-update-ai-model-provider.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await aiModelsProvidersUpdateAIModelProvider(pipeshub, {
    modelType: "reasoning",
    modelKey: "<value>",
    body: {
      provider: "<value>",
      configuration: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("aiModelsProvidersUpdateAIModelProvider failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAIModelProviderRequest](../../models/operations/update-ai-model-provider-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteAIModelProvider

Remove an AI model provider configuration. Cannot delete the default model if it's the only one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAIModelProvider" method="delete" path="/configurationManager/ai-models/providers/{modelType}/{modelKey}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.aiModelsProviders.deleteAIModelProvider({
    modelType: "reasoning",
    modelKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { aiModelsProvidersDeleteAIModelProvider } from "pipeshub/funcs/ai-models-providers-delete-ai-model-provider.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await aiModelsProvidersDeleteAIModelProvider(pipeshub, {
    modelType: "reasoning",
    modelKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("aiModelsProvidersDeleteAIModelProvider failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAIModelProviderRequest](../../models/operations/delete-ai-model-provider-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## setDefaultAIModel

Set a model as the default for its type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setDefaultAIModel" method="put" path="/configurationManager/ai-models/default/{modelType}/{modelKey}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.aiModelsProviders.setDefaultAIModel({
    modelType: "ocr",
    modelKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { aiModelsProvidersSetDefaultAIModel } from "pipeshub/funcs/ai-models-providers-set-default-ai-model.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await aiModelsProvidersSetDefaultAIModel(pipeshub, {
    modelType: "ocr",
    modelKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("aiModelsProvidersSetDefaultAIModel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetDefaultAIModelRequest](../../models/operations/set-default-ai-model-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
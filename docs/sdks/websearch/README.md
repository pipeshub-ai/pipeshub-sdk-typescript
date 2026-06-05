# WebSearch

## Overview

Manage web search providers (DuckDuckGo, Serper, Tavily, Exa) and settings for internet search.

### Available Operations

* [getWebSearchProviders](#getwebsearchproviders) - Get all web search providers

## getWebSearchProviders

Retrieve all configured web search providers and current web search settings.

**Authentication:** Session JWT or OAuth 2.0 access token via `Authorization: Bearer`.
OAuth tokens must include the `config:read` scope. Admin role is not required.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getWebSearchProviders" method="get" path="/configurationManager/web-search" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.webSearch.getWebSearchProviders();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { webSearchGetWebSearchProviders } from "@pipeshub-ai/sdk/funcs/web-search-get-web-search-providers.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await webSearchGetWebSearchProviders(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webSearchGetWebSearchProviders failed:", res.error);
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

**Promise\<[models.WebSearchProvidersResponse](../../models/web-search-providers-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
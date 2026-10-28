# ConnectorOAuth

## Overview

OAuth 2.0 authorization flow for connectors requiring user consent

### Available Operations

* [getOAuthAuthorizationUrl](#getoauthauthorizationurl) - Get OAuth authorization URL
* [handleOAuthCallback](#handleoauthcallback) - OAuth callback handler

## getOAuthAuthorizationUrl

Start the OAuth sign-in for a connector instance.<br><br>
<b>Flow:</b><br>
<ol>
<li>Call this endpoint to get <code>authorizationUrl</code> and <code>state</code></li>
<li>A person opens the URL and gives consent at the provider</li>
<li>The provider redirects to <code>{baseUrl}/{redirectUri}</code> with <code>code</code> and <code>state</code></li>
<li>Pass both to <code>GET /connectors/oauth/callback</code> with a bearer token</li>
</ol>
The redirect URI is fixed when the connector is created (its <code>baseUrl</code>) and must be
registered with the provider.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOAuthAuthorizationUrl" method="get" path="/connectors/{connectorId}/oauth/authorize" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorOAuth.getOAuthAuthorizationUrl({
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
import { connectorOAuthGetOAuthAuthorizationUrl } from "@pipeshub-ai/sdk/funcs/connector-o-auth-get-o-auth-authorization-url.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorOAuthGetOAuthAuthorizationUrl(pipeshub, {
    connectorId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorOAuthGetOAuthAuthorizationUrl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOAuthAuthorizationUrlRequest](../../models/operations/get-o-auth-authorization-url-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOAuthAuthorizationUrlResponse](../../models/operations/get-o-auth-authorization-url-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## handleOAuthCallback

Finish the OAuth sign-in: exchange the provider's <code>code</code> for tokens and store
them. Call it with the <code>code</code> and <code>state</code> the provider sent to the redirect URI,
as the connector's creator or an admin.<br><br>
<b>Result:</b><br>
Always JSON. <code>success</code> is true when the connector is signed in; otherwise
<code>error</code> and <code>errorMessage</code> say why. Provider tokens are never returned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="handleOAuthCallback" method="get" path="/connectors/oauth/callback" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorOAuth.handleOAuthCallback({
    code: "<value>",
    state: "Arizona",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorOAuthHandleOAuthCallback } from "@pipeshub-ai/sdk/funcs/connector-o-auth-handle-o-auth-callback.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorOAuthHandleOAuthCallback(pipeshub, {
    code: "<value>",
    state: "Arizona",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorOAuthHandleOAuthCallback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HandleOAuthCallbackRequest](../../models/operations/handle-o-auth-callback-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HandleOAuthCallbackResponse](../../models/operations/handle-o-auth-callback-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
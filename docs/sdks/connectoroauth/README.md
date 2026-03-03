# ConnectorOAuth

## Overview

OAuth 2.0 authorization flow for connectors requiring user consent

### Available Operations

* [getOAuthAuthorizationUrl](#getoauthauthorizationurl) - Get OAuth authorization URL
* [handleOAuthCallback](#handleoauthcallback) - OAuth callback handler
* [~~getTokenFromCode~~](#gettokenfromcode) - Exchange Google authorization code for tokens :warning: **Deprecated**

## getOAuthAuthorizationUrl

Generate an OAuth authorization URL to start the OAuth flow.<br><br>
<b>Flow:</b><br>
<ol>
<li>Call this endpoint to get the authorization URL</li>
<li>Redirect user's browser to the URL</li>
<li>User authenticates with the provider</li>
<li>Provider redirects to callback with authorization code</li>
<li>Callback exchanges code for tokens automatically</li>
</ol>
<b>State Parameter:</b><br>
The response includes a <code>state</code> value that encodes the
connector ID. This is validated in the callback.


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
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## handleOAuthCallback

Handle the OAuth callback from the identity provider.<br><br>
<b>Note:</b><br>
This endpoint is called by the OAuth provider after user authentication.
The state parameter contains the encoded connector ID.<br><br>
<b>Success:</b><br>
On success, tokens are stored and the connector becomes authenticated.
User is redirected to the frontend success page.<br><br>
<b>Error:</b><br>
If the provider returns an error (e.g., user denied access),
user is redirected with error information.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="handleOAuthCallback" method="get" path="/connectors/oauth/callback" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.connectorOAuth.handleOAuthCallback();

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
const pipeshub = new PipeshubCore();

async function run() {
  const res = await connectorOAuthHandleOAuthCallback(pipeshub);
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
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## ~~getTokenFromCode~~

<b>⚠️ Deprecated:</b> Legacy Google Workspace token exchange endpoint. Use the generic
OAuth flow via <code>/connectors/{connectorId}/oauth/authorize</code> instead.<br><br>
<b>Overview:</b><br>
Exchanges a Google OAuth authorization code for access and refresh tokens,
stores the credentials, and enables the Google Workspace connector.<br><br>
<b>What Happens:</b><br>
<ol>
<li>Retrieves Google Workspace OAuth config (client ID/secret)</li>
<li>Exchanges the authorization code for tokens via Google's token endpoint</li>
<li>Verifies the ID token</li>
<li>Stores access and refresh tokens in configuration manager</li>
<li>Creates or enables the Google Workspace connector</li>
<li>Publishes an AppEnabledEvent for the sync service</li>
</ol>
<b>Admin Only:</b><br>
Requires organization admin privileges.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTokenFromCode" method="post" path="/connectors/getTokenFromCode" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.connectorOAuth.getTokenFromCode({
    tempCode: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { connectorOAuthGetTokenFromCode } from "@pipeshub-ai/sdk/funcs/connector-o-auth-get-token-from-code.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await connectorOAuthGetTokenFromCode(pipeshub, {
    tempCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorOAuthGetTokenFromCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTokenFromCodeRequest](../../models/operations/get-token-from-code-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTokenFromCodeResponse](../../models/operations/get-token-from-code-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
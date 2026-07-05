# OAuthProvider

## Overview

PipesHub OAuth 2.0 Authorization Server implementing RFC 6749, RFC 7636 (PKCE), and OpenID Connect.

**Supported Grant Types:**
- `authorization_code` - Standard OAuth flow with PKCE support
- `client_credentials` - Machine-to-machine authentication
- `refresh_token` - Token refresh for long-lived access

**Security Features:**
- PKCE (Proof Key for Code Exchange) for public clients
- State parameter for CSRF protection
- Configurable token lifetimes
- Token revocation and introspection

**OpenID Connect:**
- ID tokens with standard claims
- UserInfo endpoint for profile data
- Discovery endpoint for automatic configuration

**Machine tokens (`client_credentials`) — gateway and downstream identity:**
Access tokens may encode **`userId === client_id`**. The **Node.js API gateway** resolves the effective user to the OAuth **app creator**: first using the JWT **`createdBy`** claim when present, otherwise by loading the OAuth app by **`client_id`** from the registry. After verification it sets the authenticated session to that creator.

**Python services:** Validate `Authorization: Bearer` as today and use the JWT payload’s **`userId`** as-is for scopes and user-scoped logic (which may still equal **`client_id`** for machine tokens).

**Operational note:** Prefer tokens whose JWT already carries the creator as **`userId`**; use **`POST /oauth-clients/{appId}/revoke-all-tokens`** and obtain new tokens from **`POST /oauth2/token`** when rotating integrations.


### Available Operations

* [oauthToken](#oauthtoken) - Exchange authorization code for tokens
* [oauthRevoke](#oauthrevoke) - Revoke an access or refresh token
* [oauthIntrospect](#oauthintrospect) - Introspect a token

## oauthToken

OAuth 2.0 Token Endpoint (RFC 6749 Section 4.1.3).

Exchanges an authorization code, client credentials, or refresh token for access tokens.

**Grant Types:**
- `authorization_code`: Exchange auth code for tokens (user-based)
- `client_credentials`: Get tokens for machine-to-machine auth
- `refresh_token`: Get new access token using refresh token

For **`client_credentials`**, access tokens represent the **OAuth app creator** (the user who registered the client). The JWT may encode **`userId === client_id`**; the **Node API gateway** resolves the creator (**`createdBy`** claim or OAuth app lookup) — see **OAuth Provider** tag.

**Client Authentication:**
Can be provided via:
- HTTP Basic auth: `Authorization: Basic base64(client_id:client_secret)`
- Request body: `client_id` and `client_secret` parameters

**PKCE Verification:**
If authorization used PKCE, the `code_verifier` must be provided and will be
verified against the stored code challenge.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauthToken" method="post" path="/oauth2/token" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthProviderOauthToken } from "@pipeshub-ai/sdk/funcs/o-auth-provider-oauth-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await oAuthProviderOauthToken(pipeshub, {
    grantType: "client_credentials",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthProviderOauthToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OAuthTokenRequest](../../models/o-auth-token-request.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OAuthTokenResponse](../../models/o-auth-token-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ErrorResponse                       | 400                                        | application/json                           |
| errors.OAuthErrorResponse                  | 401                                        | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## oauthRevoke

OAuth 2.0 Token Revocation Endpoint (RFC 7009).

Revokes an access token or refresh token, preventing further use.
Revoking a refresh token also invalidates associated access tokens.

**Use Cases:**
- User logs out of third-party app
- User revokes app access from account settings
- Security incident response

**Note:** Returns 200 OK even if token was already revoked or invalid
(per RFC 7009, to prevent token enumeration).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauthRevoke" method="post" path="/oauth2/revoke" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  await pipeshub.oAuthProvider.oauthRevoke({
    token: "<value>",
    clientId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthProviderOauthRevoke } from "@pipeshub-ai/sdk/funcs/o-auth-provider-oauth-revoke.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await oAuthProviderOauthRevoke(pipeshub, {
    token: "<value>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("oAuthProviderOauthRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OAuthRevokeRequest](../../models/o-auth-revoke-request.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.OAuthErrorResponse                  | 401                                        | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## oauthIntrospect

OAuth 2.0 Token Introspection Endpoint (RFC 7662).

Check if a token is active and retrieve its metadata.

**Use Cases:**
- Resource servers validating tokens
- Debugging token issues
- Checking token scopes before processing requests

**Response:**
- Active token: Returns `active: true` with token metadata
- Invalid/expired/revoked token: Returns only `active: false`


### Example Usage: active

<!-- UsageSnippet language="typescript" operationID="oauthIntrospect" method="post" path="/oauth2/introspect" example="active" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuthProvider.oauthIntrospect({
    token: "<value>",
    clientId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthProviderOauthIntrospect } from "@pipeshub-ai/sdk/funcs/o-auth-provider-oauth-introspect.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await oAuthProviderOauthIntrospect(pipeshub, {
    token: "<value>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthProviderOauthIntrospect failed:", res.error);
  }
}

run();
```
### Example Usage: inactive

<!-- UsageSnippet language="typescript" operationID="oauthIntrospect" method="post" path="/oauth2/introspect" example="inactive" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuthProvider.oauthIntrospect({
    token: "<value>",
    clientId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthProviderOauthIntrospect } from "@pipeshub-ai/sdk/funcs/o-auth-provider-oauth-introspect.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await oAuthProviderOauthIntrospect(pipeshub, {
    token: "<value>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthProviderOauthIntrospect failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OAuthIntrospectRequest](../../models/o-auth-introspect-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OAuthIntrospectResponse](../../models/o-auth-introspect-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.OAuthErrorResponse                  | 401                                        | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |
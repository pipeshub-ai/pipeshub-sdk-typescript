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


### Available Operations

* [oauthAuthorize](#oauthauthorize) - Initiate OAuth authorization flow
* [oauthAuthorizeConsent](#oauthauthorizeconsent) - Submit authorization consent
* [oauthToken](#oauthtoken) - Exchange authorization code for tokens
* [oauthRevoke](#oauthrevoke) - Revoke an access or refresh token
* [oauthIntrospect](#oauthintrospect) - Introspect a token

## oauthAuthorize

OAuth 2.0 Authorization Endpoint (RFC 6749 Section 4.1.1).
<br><br>
Initiates the authorization code flow. Users are redirected here by OAuth clients
to authorize access to their account.
<br><br>
<b>Flow:</b><br>
1. Client redirects user to this endpoint with required parameters<br>
2. If not logged in, user is redirected to PipesHub login<br>
3. User sees consent page with requested scopes<br>
4. User grants or denies consent<br>
5. User is redirected back to client with authorization code
<br><br>
<b>PKCE Support (RFC 7636):</b><br>
- Required for public clients (SPA, mobile apps)<br>
- Recommended for confidential clients<br>
- Use S256 method (SHA256 hash of code_verifier)
<br><br>
<b>Security:</b><br>
- Always use HTTPS in production<br>
- State parameter provides CSRF protection<br>
- Redirect URI must match registered URIs exactly


### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauthAuthorize" method="get" path="/oauth2/authorize" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuthProvider.oauthAuthorize({
    responseType: "code",
    clientId: "<id>",
    redirectUri: "https://coordinated-dime.biz/",
    scope: "openid profile email read:records",
    state: "Delaware",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthProviderOauthAuthorize } from "@pipeshub-ai/sdk/funcs/o-auth-provider-oauth-authorize.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await oAuthProviderOauthAuthorize(pipeshub, {
    responseType: "code",
    clientId: "<id>",
    redirectUri: "https://coordinated-dime.biz/",
    scope: "openid profile email read:records",
    state: "Delaware",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthProviderOauthAuthorize failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OauthAuthorizeRequest](../../models/operations/oauth-authorize-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OauthAuthorizeResponse](../../models/operations/oauth-authorize-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.OAuthErrorResponse   | 400                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## oauthAuthorizeConsent

Submit user's consent decision for OAuth authorization.
<br><br>
Called after user reviews the consent page and makes a decision.
This endpoint generates an authorization code if consent is granted.
<br><br>
<b>Responses:</b><br>
- Consent granted: Redirects to client with authorization code<br>
- Consent denied: Redirects to client with `access_denied` error


### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauthAuthorizeConsent" method="post" path="/oauth2/authorize" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthProvider.oauthAuthorizeConsent({
    clientId: "<id>",
    redirectUri: "https://excellent-license.com",
    scope: "<value>",
    state: "South Dakota",
    consent: "denied",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthProviderOauthAuthorizeConsent } from "@pipeshub-ai/sdk/funcs/o-auth-provider-oauth-authorize-consent.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthProviderOauthAuthorizeConsent(pipeshub, {
    clientId: "<id>",
    redirectUri: "https://excellent-license.com",
    scope: "<value>",
    state: "South Dakota",
    consent: "denied",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthProviderOauthAuthorizeConsent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OAuthConsentRequest](../../models/o-auth-consent-request.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OauthAuthorizeConsentResponse](../../models/operations/oauth-authorize-consent-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.OAuthErrorResponse   | 400                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## oauthToken

OAuth 2.0 Token Endpoint (RFC 6749 Section 4.1.3).
<br><br>
Exchanges an authorization code, client credentials, or refresh token for access tokens.
<br><br>
<b>Grant Types:</b><br>
- `authorization_code`: Exchange auth code for tokens (user-based)<br>
- `client_credentials`: Get tokens for machine-to-machine auth<br>
- `refresh_token`: Get new access token using refresh token
<br><br>
<b>Client Authentication:</b><br>
Can be provided via:<br>
- HTTP Basic auth: `Authorization: Basic base64(client_id:client_secret)`<br>
- Request body: `client_id` and `client_secret` parameters
<br><br>
<b>PKCE Verification:</b><br>
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

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.OAuthErrorResponse   | 400, 401                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## oauthRevoke

OAuth 2.0 Token Revocation Endpoint (RFC 7009).
<br><br>
Revokes an access token or refresh token, preventing further use.
Revoking a refresh token also invalidates associated access tokens.
<br><br>
<b>Use Cases:</b><br>
- User logs out of third-party app<br>
- User revokes app access from account settings<br>
- Security incident response
<br><br>
<b>Note:</b> Returns 200 OK even if token was already revoked or invalid
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

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.OAuthErrorResponse   | 401                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## oauthIntrospect

OAuth 2.0 Token Introspection Endpoint (RFC 7662).
<br><br>
Check if a token is active and retrieve its metadata.
<br><br>
<b>Use Cases:</b><br>
- Resource servers validating tokens<br>
- Debugging token issues<br>
- Checking token scopes before processing requests
<br><br>
<b>Response:</b><br>
- Active token: Returns `active: true` with token metadata<br>
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

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.OAuthErrorResponse   | 401                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
# OpenIDConnect

## Overview

OpenID Connect 1.0 endpoints for identity federation and discovery.

**Discovery:**
- `/.well-known/openid-configuration` - Authorization server metadata
- `/.well-known/jwks.json` - Public keys for token verification

**UserInfo:**
- `/oauth/userinfo` - Get authenticated user's profile information

**Supported Claims:**
- `user_id` - User identifier
- `email`, `email_verified` - Email information
- `name`, `given_name`, `family_name` - Name information


### Available Operations

* [oauthUserInfo](#oauthuserinfo) - Get authenticated user information
* [openidConfiguration](#openidconfiguration) - OpenID Connect Discovery
* [jwks](#jwks) - JSON Web Key Set

## oauthUserInfo

OpenID Connect UserInfo Endpoint.
<br><br>
Returns claims about the authenticated user. Requires a valid access token
with the `openid` scope.
<br><br>
<b>Available Claims:</b><br>
- `user_id` - User identifier<br>
- `name`, `given_name`, `family_name` - Name claims (with `profile` scope)<br>
- `email`, `email_verified` - Email claims (with `email` scope)
<br><br>
<b>Authentication:</b><br>
Pass the access token as a Bearer token: `Authorization: Bearer {access_token}`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauthUserInfo" method="get" path="/oauth/userinfo" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.openIDConnect.oauthUserInfo();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { openIDConnectOauthUserInfo } from "pipeshub/funcs/open-id-connect-oauth-user-info.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await openIDConnectOauthUserInfo(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("openIDConnectOauthUserInfo failed:", res.error);
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

**Promise\<[models.OAuthUserInfoResponse](../../models/o-auth-user-info-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## openidConfiguration

OpenID Connect Discovery Endpoint (RFC 8414).
<br><br>
Returns metadata about the OAuth/OIDC authorization server including
endpoint URLs, supported features, and capabilities.
<br><br>
<b>Use Cases:</b><br>
- Automatic client configuration<br>
- Discovering supported features<br>
- Getting endpoint URLs without hardcoding
<br><br>
<b>Note:</b> This endpoint does not require authentication.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="openidConfiguration" method="get" path="/.well-known/openid-configuration" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.openIDConnect.openidConfiguration();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { openIDConnectOpenidConfiguration } from "pipeshub/funcs/open-id-connect-openid-configuration.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await openIDConnectOpenidConfiguration(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("openIDConnectOpenidConfiguration failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.OpenIDConfiguration](../../models/open-id-configuration.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## jwks

JSON Web Key Set Endpoint (RFC 7517).
<br><br>
Returns the public keys used to verify JWT signatures for ID tokens
and access tokens.
<br><br>
<b>Use Cases:</b><br>
- Verifying ID token signatures<br>
- Verifying access token signatures (if JWT-based)
<br><br>
<b>Note:</b><br>
- For HS256 (symmetric) signing, this returns empty keys<br>
- For RS256 (asymmetric) signing, returns public RSA keys<br>
- Keys should be cached with appropriate TTL


### Example Usage

<!-- UsageSnippet language="typescript" operationID="jwks" method="get" path="/.well-known/jwks.json" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.openIDConnect.jwks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { openIDConnectJwks } from "pipeshub/funcs/open-id-connect-jwks.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await openIDConnectJwks(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("openIDConnectJwks failed:", res.error);
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
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[models.Jwks](../../models/jwks.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
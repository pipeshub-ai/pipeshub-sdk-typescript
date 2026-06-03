# OpenIDConnect

## Overview

OpenID Connect 1.0 endpoints for identity federation and discovery.

**Discovery:**
- `/.well-known/openid-configuration` - Authorization server metadata
- `/.well-known/oauth-authorization-server` - Authorization server metadata (RFC 8414)
- `/.well-known/oauth-protected-resource/mcp` - Protected resource metadata (RFC 9728)
- `/.well-known/jwks.json` - Public keys for token verification

**UserInfo:**
- `/oauth2/userinfo` - Get authenticated user's profile information

**Supported Claims:**
- `user_id` - User identifier
- `email`, `email_verified` - Email information
- `name`, `given_name`, `family_name` - Name information


### Available Operations

* [oauthUserInfo](#oauthuserinfo) - Get authenticated user information

## oauthUserInfo

OpenID Connect UserInfo Endpoint.

Returns claims about the authenticated user. Requires a valid access token
with the `openid` scope.

**Available Claims:**
- `user_id` - User identifier
- `name`, `given_name`, `family_name` - Name claims (with `profile` scope)
- `email`, `email_verified` - Email claims (with `email` scope)

**Authentication:**
Pass the access token as a Bearer token: `Authorization: Bearer {access_token}`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="oauthUserInfo" method="get" path="/oauth2/userinfo" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
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
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { openIDConnectOauthUserInfo } from "@pipeshub-ai/sdk/funcs/open-id-connect-oauth-user-info.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
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
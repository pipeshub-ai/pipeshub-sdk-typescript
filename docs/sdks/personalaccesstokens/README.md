# PersonalAccessTokens

## Overview

Self-service, long-lived, scoped, revocable credentials that act as their
creator — unlike an OAuth app's `client_credentials` flow, which acts as
the app.

**Who can create one**
- **Any authenticated org member** — unlike OAuth apps, this is
  deliberately not admin-gated.

**How it's issued**
- Minted through the same OAuth access-token machinery as `/oauth2/token`,
  against one lazily-created, per-org synthetic OAuth app
  (`clientId: pat-system:<orgId>`) that every PAT in that org shares.
  That app is hidden from `/oauth-clients/*` — it never appears in your
  own OAuth app list and can't be managed through those routes.
- The raw token is prefixed `phpat_` ahead of the underlying JWT (see the
  `bearerAuth` security scheme) so it's recognizable to secret scanners.
  It's shown exactly once, at creation.

**Expiry and scopes**
- `expiryDays`: `30` (default), `90`, `365`, or `never`.
- Scopes default to the org's full configured `MCP_SCOPES` set if none
  are requested; `GET /personal-access-tokens/scopes` lists what's
  available.

**Admin visibility**
- Regular members only ever see and revoke their own tokens.
- Org admins can list and revoke *any* member's token via
  `/personal-access-tokens/admin*` — for incident response (a departed
  employee, a compromised laptop) — without needing the OAuth app CRUD
  access described above.


### Available Operations

* [listPersonalAccessTokens](#listpersonalaccesstokens) - List your own personal access tokens
* [createPersonalAccessToken](#createpersonalaccesstoken) - Create a personal access token
* [listPersonalAccessTokenScopes](#listpersonalaccesstokenscopes) - List scopes available for a new personal access token
* [revokePersonalAccessToken](#revokepersonalaccesstoken) - Revoke one of your own personal access tokens
* [adminListPersonalAccessTokens](#adminlistpersonalaccesstokens) - Admin: list every active personal access token in the org
* [adminRevokePersonalAccessToken](#adminrevokepersonalaccesstoken) - Admin: revoke any user's personal access token by id

## listPersonalAccessTokens

Lists the caller's own active (non-revoked, unexpired) personal
access tokens, newest first, capped at 100 rows server-side. Never
returns another user's tokens — see `GET /personal-access-tokens/admin`
for the org-admin, cross-user view.

Shares the same per-user rate limiter as `/oauth-clients/*`
(default 1000 req/min, `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE`).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPersonalAccessTokens" method="get" path="/personal-access-tokens" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.personalAccessTokens.listPersonalAccessTokens();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { personalAccessTokensListPersonalAccessTokens } from "@pipeshub-ai/sdk/funcs/personal-access-tokens-list-personal-access-tokens.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await personalAccessTokensListPersonalAccessTokens(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("personalAccessTokensListPersonalAccessTokens failed:", res.error);
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

**Promise\<[models.ListPatResponse](../../models/list-pat-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401                                        | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## createPersonalAccessToken

Mints a new personal access token for the caller. Deliberately not
admin-gated — any authenticated org member may create their own,
unlike OAuth app registration.

The token is minted against a lazily-created, per-org synthetic
OAuth app (`clientId: pat-system:<orgId>`) shared by every PAT in
that org — the same signing, hashing, and revocation machinery as
`/oauth2/token`, reused rather than duplicated.

`scopes` is validated against the org's configured `MCP_SCOPES`
env var, not the full role-aware OAuth-app scope catalog — a
non-admin can request any scope in that set.

The response's `accessToken` is shown **once**; only its SHA-256
hash is stored. It's prefixed `phpat_` (see the `bearerAuth`
security scheme).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPersonalAccessToken" method="post" path="/personal-access-tokens" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.personalAccessTokens.createPersonalAccessToken({
    name: "Claude Desktop",
    scopes: [
      "kb:read",
      "semantic:write",
    ],
    expiryDays: 30,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { personalAccessTokensCreatePersonalAccessToken } from "@pipeshub-ai/sdk/funcs/personal-access-tokens-create-personal-access-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await personalAccessTokensCreatePersonalAccessToken(pipeshub, {
    name: "Claude Desktop",
    scopes: [
      "kb:read",
      "semantic:write",
    ],
    expiryDays: 30,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("personalAccessTokensCreatePersonalAccessToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreatePatRequest](../../models/create-pat-request.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreatePatResponse](../../models/create-pat-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401                                   | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## listPersonalAccessTokenScopes

Returns the org's configured `MCP_SCOPES` as a flat array of scope
definitions, for populating the create-token scope picker. Unlike
`GET /oauth-clients/scopes`, this is **not** grouped by category and
**not** role-aware — every org member sees the same set, since PAT
scope selection isn't gated by admin status.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPersonalAccessTokenScopes" method="get" path="/personal-access-tokens/scopes" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.personalAccessTokens.listPersonalAccessTokenScopes();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { personalAccessTokensListPersonalAccessTokenScopes } from "@pipeshub-ai/sdk/funcs/personal-access-tokens-list-personal-access-token-scopes.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await personalAccessTokensListPersonalAccessTokenScopes(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("personalAccessTokensListPersonalAccessTokenScopes failed:", res.error);
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

**Promise\<[models.PatScopesListResponse](../../models/pat-scopes-list-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401                                        | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## revokePersonalAccessToken

Revokes a token by id, scoped to `{tokenId, clientId, callerUserId}`
— a caller can never revoke another user's token through this route,
even though everyone in the org shares the same underlying
`pat-system:<orgId>` client. Revocation takes effect immediately: the
token's next verification attempt fails, including one already in
flight.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="revokePersonalAccessToken" method="delete" path="/personal-access-tokens/{tokenId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.personalAccessTokens.revokePersonalAccessToken({
    tokenId: "<id>",
    body: {
      reason: "rotated",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { personalAccessTokensRevokePersonalAccessToken } from "@pipeshub-ai/sdk/funcs/personal-access-tokens-revoke-personal-access-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await personalAccessTokensRevokePersonalAccessToken(pipeshub, {
    tokenId: "<id>",
    body: {
      reason: "rotated",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("personalAccessTokensRevokePersonalAccessToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokePersonalAccessTokenRequest](../../models/operations/revoke-personal-access-token-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RevokePatResponse](../../models/revoke-pat-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 404                                   | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## adminListPersonalAccessTokens

Lists every active personal access token across every member of the
org, paginated, with each token's owner attached (including owners
who've since been deleted from the org — see `ownerDeleted` on
`AdminPatListItem`). For incident response: a departed employee or a
compromised laptop, where only the token's own creator could
otherwise see or revoke it.

Requires org-admin privileges (`userAdminCheck`) — note this returns
**`400`**, not `403`, for a non-admin caller (shared middleware
behavior across the codebase, not specific to this route).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="adminListPersonalAccessTokens" method="get" path="/personal-access-tokens/admin" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.personalAccessTokens.adminListPersonalAccessTokens({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { personalAccessTokensAdminListPersonalAccessTokens } from "@pipeshub-ai/sdk/funcs/personal-access-tokens-admin-list-personal-access-tokens.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await personalAccessTokensAdminListPersonalAccessTokens(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("personalAccessTokensAdminListPersonalAccessTokens failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AdminListPersonalAccessTokensRequest](../../models/operations/admin-list-personal-access-tokens-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AdminPatListResponse](../../models/admin-pat-list-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401                                   | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## adminRevokePersonalAccessToken

Revokes a token by id, scoped to the org's PAT client but **not** to
a specific owning user — the admin counterpart to
`DELETE /personal-access-tokens/{tokenId}`. Requires org-admin
privileges (`userAdminCheck`); returns `400` (not `403`) for a
non-admin caller, same as `GET /personal-access-tokens/admin`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="adminRevokePersonalAccessToken" method="delete" path="/personal-access-tokens/admin/{tokenId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.personalAccessTokens.adminRevokePersonalAccessToken({
    tokenId: "<id>",
    body: {
      reason: "rotated",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { personalAccessTokensAdminRevokePersonalAccessToken } from "@pipeshub-ai/sdk/funcs/personal-access-tokens-admin-revoke-personal-access-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await personalAccessTokensAdminRevokePersonalAccessToken(pipeshub, {
    tokenId: "<id>",
    body: {
      reason: "rotated",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("personalAccessTokensAdminRevokePersonalAccessToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AdminRevokePersonalAccessTokenRequest](../../models/operations/admin-revoke-personal-access-token-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RevokePatResponse](../../models/revoke-pat-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401, 404                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |
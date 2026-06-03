# OAuthApps

## Overview

Manage OAuth 2.0 client applications registered with PipesHub.

OAuth apps allow third-party applications to access PipesHub APIs on behalf of users
or organizations. Each app receives a client ID and secret for authentication.

**Who can see which apps**
- **Everyone (including org admins)** sees and manages only OAuth apps **they created** (`createdBy`). Other members' apps are hidden (not listed; individual operations return not found).

**Who authorizes vs. client credentials**
- **Authorization code:** Any authenticated user in the workspace may complete consent for a valid `client_id`; issued tokens represent **that user**.
- **Client credentials:** Access tokens represent the **OAuth app creator** (who registered the client), not the caller.

**Scopes**
- `GET /oauth-clients/scopes` returns scopes grouped by category for the **signed-in user's role**.
- **Org admins** may register apps that request additional **admin-only** scopes; non-admins cannot select those scopes when creating or updating an app.

**App Types:**
- **Confidential clients**: Server-side apps that can securely store secrets
- **Public clients**: Browser/mobile apps that cannot securely store secrets (use PKCE)

**App Lifecycle:**
- Create apps with name, redirect URIs, allowed scopes, and optional URLs (homepage, privacy, terms)
- Regenerate secrets if compromised
- Suspend/activate apps to control access
- Revoke all tokens for emergency access removal


### Available Operations

* [listOAuthApps](#listoauthapps) - List OAuth apps
* [createOAuthApp](#createoauthapp) - Create OAuth app
* [listOAuthScopes](#listoauthscopes) - List available scopes
* [getOAuthApp](#getoauthapp) - Get OAuth app details
* [updateOAuthApp](#updateoauthapp) - Update OAuth app
* [deleteOAuthApp](#deleteoauthapp) - Delete OAuth app
* [regenerateOAuthAppSecret](#regenerateoauthappsecret) - Regenerate client secret
* [suspendOAuthApp](#suspendoauthapp) - Suspend OAuth app
* [activateOAuthApp](#activateoauthapp) - Activate suspended OAuth app
* [listOAuthAppTokens](#listoauthapptokens) - List app tokens
* [revokeAllOAuthAppTokens](#revokealloauthapptokens) - Revoke all app tokens

## listOAuthApps

Returns a paginated list of OAuth apps registered by the signed-in user. Access is creator-scoped — even org admins only see apps they created themselves, so this endpoint is safe to use for per-user developer dashboards without leaking org-wide app metadata.

Each entry carries the full app configuration except the client secret, which is only ever returned at creation time and immediately after a regeneration.

Use the `status` query parameter to filter by lifecycle state (`active`, `suspended`, `revoked`) and `search` for a case-insensitive substring match against `name` or `description`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listOAuthApps" method="get" path="/oauth-clients" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.listOAuthApps({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsListOAuthApps } from "@pipeshub-ai/sdk/funcs/o-auth-apps-list-o-auth-apps.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsListOAuthApps(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsListOAuthApps failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListOAuthAppsRequest](../../models/operations/list-o-auth-apps-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OAuthAppListResponse](../../models/o-auth-app-list-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 403                                   | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## createOAuthApp

Register a new OAuth app for the organization. Any authenticated org member may create apps; the creator is recorded as the app's owner and is the only user who can subsequently read, update, suspend, activate, regenerate the secret of, or delete it.

The `clientSecret` is returned in this response **only** — it is stored hashed server-side and cannot be retrieved later. Persist it before exiting the create flow; if it is ever lost, rotate via `POST /oauth-clients/{appId}/regenerate-secret`.

`allowedScopes` is validated against the caller's role-aware scope set (see `GET /oauth-clients/scopes`). Org admins may include admin-only scopes; non-admins requesting a restricted scope receive `400`.

All `/oauth-clients/*` routes share a per-user rate limiter (default 1000 req/min, configurable via the `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE` env var).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createOAuthApp" method="post" path="/oauth-clients" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.createOAuthApp({
    name: "My Integration App",
    description: "Integrates PipesHub with our internal tools",
    redirectUris: [
      "https://myapp.com/callback",
      "http://localhost:3000/callback",
    ],
    allowedGrantTypes: [
      "authorization_code",
      "refresh_token",
    ],
    allowedScopes: [
      "openid",
      "profile",
      "read:records",
    ],
    refreshTokenLifetime: 604800,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsCreateOAuthApp } from "@pipeshub-ai/sdk/funcs/o-auth-apps-create-o-auth-app.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsCreateOAuthApp(pipeshub, {
    name: "My Integration App",
    description: "Integrates PipesHub with our internal tools",
    redirectUris: [
      "https://myapp.com/callback",
      "http://localhost:3000/callback",
    ],
    allowedGrantTypes: [
      "authorization_code",
      "refresh_token",
    ],
    allowedScopes: [
      "openid",
      "profile",
      "read:records",
    ],
    refreshTokenLifetime: 604800,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsCreateOAuthApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateOAuthAppRequest](../../models/create-o-auth-app-request.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateOAuthAppResponse](../../models/create-o-auth-app-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401, 403                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## listOAuthScopes

Returns the OAuth scopes the signed-in user is permitted to register on new or updated apps, grouped by category. Use this to populate scope-picker UIs and to validate `allowedScopes` client-side before submitting to `createOAuthApp` / `updateOAuthApp`.

The result is role-aware. Org admins (members of an admin user group) receive every registered scope; everyone else is filtered to exclude admin-only scopes: `org:write`, `org:admin`, `user:invite`, `user:delete`, `usergroup:write`, `team:write`, `config:write`, `crawl:write`, `crawl:delete`.

Each key in the `scopes` map matches the `category` field on the `OAuthScopeInfo` entries it contains. A category may appear with an empty array when every scope it contains is restricted for the caller — treat empty buckets as "no permitted scopes in this group", not as a missing category.

Shares the per-user rate limiter applied to every `/oauth-clients/*` route (default 1000 req/min, `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE`).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listOAuthScopes" method="get" path="/oauth-clients/scopes" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.listOAuthScopes();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsListOAuthScopes } from "@pipeshub-ai/sdk/funcs/o-auth-apps-list-o-auth-scopes.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsListOAuthScopes(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsListOAuthScopes failed:", res.error);
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

**Promise\<[models.OAuthScopesGroupedResponse](../../models/o-auth-scopes-grouped-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401                                        | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## getOAuthApp

Returns the full configuration of an OAuth app you registered. The `clientSecret` is never echoed back here; if you need a new one, call `POST /oauth-clients/{appId}/regenerate-secret`.

Access is creator-scoped: even org admins receive `404` for apps owned by other users. This avoids leaking app metadata across org members and keeps the read surface symmetric with `listOAuthApps`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOAuthApp" method="get" path="/oauth-clients/{appId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.getOAuthApp({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsGetOAuthApp } from "@pipeshub-ai/sdk/funcs/o-auth-apps-get-o-auth-app.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsGetOAuthApp(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsGetOAuthApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOAuthAppRequest](../../models/operations/get-o-auth-app-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OAuthAppResponse](../../models/o-auth-app-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 403, 404                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## updateOAuthApp

Update an OAuth app's configuration. All body fields are optional — supply only what should change. URL fields (`homepageUrl`, `privacyPolicyUrl`, `termsOfServiceUrl`) accept `null` to clear them.

Creator-only: even org admins cannot edit apps owned by other users.

When modifying `allowedScopes`, the new set must remain a subset of the caller's role-aware scope list (same rule as `GET /oauth-clients/scopes`). When adding `authorization_code` to `allowedGrantTypes`, `redirectUris` becomes required and must contain at least one URI; otherwise the request is rejected with `400` by the Zod refine on `updateAppSchema`.

This endpoint never rotates the client secret — use `POST /oauth-clients/{appId}/regenerate-secret` for that.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateOAuthApp" method="put" path="/oauth-clients/{appId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.updateOAuthApp({
    appId: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsUpdateOAuthApp } from "@pipeshub-ai/sdk/funcs/o-auth-apps-update-o-auth-app.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsUpdateOAuthApp(pipeshub, {
    appId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsUpdateOAuthApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOAuthAppRequest](../../models/operations/update-o-auth-app-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateOAuthAppResponse](../../models/update-o-auth-app-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401, 403, 404                         | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## deleteOAuthApp

Soft-deletes an OAuth app. The app is flagged `isDeleted=true` on the `OAuthApp` document, removed from list/get responses for every caller, and all of its access and refresh tokens are revoked in the same operation. There is no restore endpoint — deletion is final.

Creator-only: even org admins cannot delete apps owned by other users.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteOAuthApp" method="delete" path="/oauth-clients/{appId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.deleteOAuthApp({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsDeleteOAuthApp } from "@pipeshub-ai/sdk/funcs/o-auth-apps-delete-o-auth-app.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsDeleteOAuthApp(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsDeleteOAuthApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOAuthAppRequest](../../models/operations/delete-o-auth-app-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteOAuthAppResponse](../../models/operations/delete-o-auth-app-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 403, 404                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## regenerateOAuthAppSecret

Generates a fresh client secret for an OAuth app. The previous secret is invalidated immediately — any client still presenting it will fail token exchange at `POST /oauth2/token` until updated.

The new secret is returned in this response **only** and cannot be retrieved later. Pair this call with credential propagation to every integration that uses the app. If the rotation was triggered by a suspected leak, also call `POST /oauth-clients/{appId}/revoke-all-tokens` to invalidate already-issued access and refresh tokens instead of waiting for their natural expiry.

Creator-only: even org admins cannot rotate secrets for other users' apps.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="regenerateOAuthAppSecret" method="post" path="/oauth-clients/{appId}/regenerate-secret" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.regenerateOAuthAppSecret({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsRegenerateOAuthAppSecret } from "@pipeshub-ai/sdk/funcs/o-auth-apps-regenerate-o-auth-app-secret.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsRegenerateOAuthAppSecret(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsRegenerateOAuthAppSecret failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RegenerateOAuthAppSecretRequest](../../models/operations/regenerate-o-auth-app-secret-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RegenerateOAuthAppSecretResponse](../../models/regenerate-o-auth-app-secret-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 403, 404                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## suspendOAuthApp

Moves an OAuth app to `status: "suspended"`, blocking new token issuance at `POST /oauth2/token` and the authorization-code consent flow. Tokens that have already been issued remain valid until their natural expiry — call `POST /oauth-clients/{appId}/revoke-all-tokens` immediately afterwards if you need an immediate lockout.

Use this for temporary suspensions where you intend to reactivate later. For permanent removal, use `DELETE /oauth-clients/{appId}`. Suspending an app that is already suspended returns `400`.

Creator-only.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="suspendOAuthApp" method="post" path="/oauth-clients/{appId}/suspend" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.suspendOAuthApp({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsSuspendOAuthApp } from "@pipeshub-ai/sdk/funcs/o-auth-apps-suspend-o-auth-app.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsSuspendOAuthApp(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsSuspendOAuthApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SuspendOAuthAppRequest](../../models/operations/suspend-o-auth-app-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SuspendOAuthAppResponse](../../models/suspend-o-auth-app-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401, 403, 404                         | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## activateOAuthApp

Moves a suspended OAuth app back to `status: "active"`, restoring its ability to authenticate and obtain new tokens via `POST /oauth2/token`.

A revoked app cannot be reactivated (returns `400`); the only path back is to register a new app. Activating an app that is already active also returns `400`.

Creator-only.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="activateOAuthApp" method="post" path="/oauth-clients/{appId}/activate" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.activateOAuthApp({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsActivateOAuthApp } from "@pipeshub-ai/sdk/funcs/o-auth-apps-activate-o-auth-app.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsActivateOAuthApp(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsActivateOAuthApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ActivateOAuthAppRequest](../../models/operations/activate-o-auth-app-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ActivateOAuthAppResponse](../../models/activate-o-auth-app-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 400, 401, 403, 404                         | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## listOAuthAppTokens

Lists active access and refresh tokens currently issued to an OAuth app, sorted newest first. Useful for auditing app usage and picking specific tokens to investigate before a targeted revocation.

Each entry includes the token type (`access` or `refresh`), the user the token was issued for (omitted for client-credentials access tokens), the granted scopes, the issuance and expiry timestamps, and the revocation flag. Each type is capped at 100 most-recent rows server-side (`listTokensForApp` in `oauth_token.service.ts`); revoked and expired tokens are excluded.

Creator-only.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listOAuthAppTokens" method="get" path="/oauth-clients/{appId}/tokens" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.listOAuthAppTokens({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsListOAuthAppTokens } from "@pipeshub-ai/sdk/funcs/o-auth-apps-list-o-auth-app-tokens.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsListOAuthAppTokens(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsListOAuthAppTokens failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListOAuthAppTokensRequest](../../models/operations/list-o-auth-app-tokens-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OAuthAppTokensListResponse](../../models/o-auth-app-tokens-list-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 403, 404                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |

## revokeAllOAuthAppTokens

Revokes every access and refresh token currently issued to an OAuth app, in a single operation. Use this for emergency credential rotation, suspected secret leaks, or as a follow-up to `POST /oauth-clients/{appId}/regenerate-secret` when you want existing sessions invalidated immediately rather than letting them expire naturally.

The response `count` is the total number of tokens revoked across both types. Clients of this app must then obtain new tokens via the standard OAuth flow.

Creator-only.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="revokeAllOAuthAppTokens" method="post" path="/oauth-clients/{appId}/revoke-all-tokens" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthApps.revokeAllOAuthAppTokens({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { oAuthAppsRevokeAllOAuthAppTokens } from "@pipeshub-ai/sdk/funcs/o-auth-apps-revoke-all-o-auth-app-tokens.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await oAuthAppsRevokeAllOAuthAppTokens(pipeshub, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthAppsRevokeAllOAuthAppTokens failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeAllOAuthAppTokensRequest](../../models/operations/revoke-all-o-auth-app-tokens-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RevokeAllOAuthAppTokensResponse](../../models/operations/revoke-all-o-auth-app-tokens-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ApplicationJsonErrorResponse        | 401, 403, 404                              | application/json                           |
| errors.OAuthClientManagementRateLimitError | 429                                        | application/json                           |
| errors.PipeshubDefaultError                | 4XX, 5XX                                   | \*/\*                                      |
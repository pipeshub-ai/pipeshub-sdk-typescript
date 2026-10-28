# UserAccount

## Overview

User authentication including multi-step MFA, password reset, OTP login, and token management

### Available Operations

* [initAuth](#initauth) - Initialize authentication session
* [authenticate](#authenticate) - Authenticate user with credentials
* [refreshToken](#refreshtoken) - Refresh access token
* [getPasswordStatus](#getpasswordstatus) - Get password status
* [sendPasswordSetupEmail](#sendpasswordsetupemail) - Email a link to set a first password
* [resetPassword](#resetpassword) - Reset password

## initAuth

Start a server-side authentication session and discover which sign-in methods are
configured for the organization. This is the first step in the multi-step login flow.

**Request body (optional)**

- You may omit the body, send an empty JSON object `{}`, or send `{ "email": "..." }`.
- `email` in the body is optional and kept for legacy reasons; omitting it does not prevent
  initialization. The web client typically calls this endpoint without a body and sends
  `email` on `/authenticate` instead.
- When provided, `email` is stored on the session for correlation with subsequent steps.

**Flow:**

1. Call this endpoint (optional JSON body as above).
2. Receive a session token in the `x-session-token` response header.
3. Send that token on subsequent `/authenticate` requests (`x-session-token` header).
4. Use `allowedMethods` and `authProviders` from the response to render the login UI.

**Session token**

- Returned as header `x-session-token`.
- Required for `/authenticate` (and related steps) until it expires.

**Multi-factor authentication**

If the organization has MFA, complete multiple authentication steps; each step may
return the next step's allowed methods.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="initAuth" method="post" path="/userAccount/initAuth" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.userAccount.initAuth({
    email: "user@example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { userAccountInitAuth } from "@pipeshub-ai/sdk/funcs/user-account-init-auth.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await userAccountInitAuth(pipeshub, {
    email: "user@example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountInitAuth failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.InitAuthRequest](../../models/init-auth-request.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InitAuthResponse](../../models/operations/init-auth-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400                           | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500                           | application/json              |
| errors.PipeshubDefaultError   | 4XX, 5XX                      | \*/\*                         |

## authenticate

Authenticate a user using the specified method and credentials.
Requires a valid session token from `/initAuth`.

**Credential Formats by Method:**

- `password`: `{ "credentials": { "password": "your-password" } }`
- `otp`: `{ "credentials": { "otp": "123456" } }` (6-digit code, valid for 10 minutes)
- `google`: `{ "credentials": "google-id-token-string" }`. The object form
  `{ "credentials": { "credential": "..." } }` passes the first token check, but by code
  reading the second check is handed the whole object, so it ends in `500`
- `microsoft`: `{ "credentials": { "idToken": "..." } }` (only `idToken` is read)

SAML (`samlSso`), generic OAuth (`oauth`) and Azure AD (`azureAd`) sign-in were removed in 1.0;
this endpoint answers `400` for them. Azure AD accounts sign in with `microsoft`.

**Multi-Step Response:**

If organization uses MFA, successful authentication returns:
- `status: "success"` with `nextStep` and `allowedMethods` for next step

**Fully Authenticated Response:**

After completing all steps:
- `message: "Fully authenticated"` with `accessToken` (1hr) and `refreshToken` (7d)

**Security:**

- Account locks for 24 hours after 10 consecutive failed attempts, and the owner is
  sent an email saying so. While it is locked, sign-in is refused with the same answer
  as a wrong password or code, even when the password or code is right
- CAPTCHA may be required if enabled (pass `cf-turnstile-response`)
- An email with no account gets the same status and message as a real account given
  a wrong password (`400`) or a wrong, missing or expired sign-in code (`401`)
- The session token is single-use for the final step: once tokens are returned the
  session is gone, and sending it again answers `401`

**Order of checks:** the session token is checked before the body, so a request
without a valid `x-session-token` answers `401` whatever its body holds.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="authenticate" method="post" path="/userAccount/authenticate" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.userAccount.authenticate({
    xSessionToken: "<value>",
    body: {
      method: "microsoft",
      credentials: {
        password: "o_5N_tt72qMx3WV",
      },
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
import { userAccountAuthenticate } from "@pipeshub-ai/sdk/funcs/user-account-authenticate.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await userAccountAuthenticate(pipeshub, {
    xSessionToken: "<value>",
    body: {
      method: "microsoft",
      credentials: {
        password: "o_5N_tt72qMx3WV",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountAuthenticate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthenticateRequest](../../models/operations/authenticate-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AuthenticateResponse](../../models/authenticate-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401                      | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500                           | application/json              |
| errors.PipeshubDefaultError   | 4XX, 5XX                      | \*/\*                         |

## refreshToken

Get a new access token using a valid refresh token.

**Usage:**

- Pass the refresh token as a Bearer token in the Authorization header
- Returns a new access token and basic user information
- The request body and query string are not read

**Token Lifetimes:**

- Access token: 24 hours (configurable via `ACCESS_TOKEN_EXPIRY` environment variable)
- Refresh token: 30 days (configurable via `REFRESH_TOKEN_EXPIRY` environment variable)

**Best Practices:**

- Call this endpoint before the access token expires
- Store the new access token and continue using it for authenticated requests
- If refresh fails with 401, redirect user to login flow


### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshToken" method="post" path="/userAccount/refresh/token" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.userAccount.refreshToken({
    scopedToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { userAccountRefreshToken } from "@pipeshub-ai/sdk/funcs/user-account-refresh-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await userAccountRefreshToken(pipeshub, {
    scopedToken: "<YOUR_BEARER_TOKEN_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountRefreshToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.RefreshTokenSecurity](../../models/operations/refresh-token-security.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RefreshTokenResponse](../../models/refresh-token-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401                    | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getPasswordStatus

Returns whether the authenticated user has a password set. Users who signed in only through SSO do not.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPasswordStatus" method="get" path="/userAccount/password/status" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.userAccount.getPasswordStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { userAccountGetPasswordStatus } from "@pipeshub-ai/sdk/funcs/user-account-get-password-status.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await userAccountGetPasswordStatus(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountGetPasswordStatus failed:", res.error);
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

**Promise\<[operations.GetPasswordStatusResponse](../../models/operations/get-password-status-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## sendPasswordSetupEmail

Sends the authenticated user a single-use link, to the email on their account, for setting a first password.
For users who have no password yet, for example those who signed in with Google. Users who already have one change it with `POST /userAccount/password/reset`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="sendPasswordSetupEmail" method="post" path="/userAccount/password/setup/email" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.userAccount.sendPasswordSetupEmail();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { userAccountSendPasswordSetupEmail } from "@pipeshub-ai/sdk/funcs/user-account-send-password-setup-email.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await userAccountSendPasswordSetupEmail(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountSendPasswordSetupEmail failed:", res.error);
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

**Promise\<[operations.SendPasswordSetupEmailResponse](../../models/operations/send-password-setup-email-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 404, 429          | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## resetPassword

Reset the password for the currently authenticated user.

**Overview:**

Allows a logged-in user to change their password by providing the current password and a new password.

**Order of checks:** the access token is read before the body, so a request without
an `Authorization` header answers `400` whatever its body holds. Body fields other
than the three below are dropped by the validator, and the query string is not read.

**Effect on sessions:** the change ends refresh tokens issued before it. The response
carries a new access token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="resetPassword" method="post" path="/userAccount/password/reset" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.userAccount.resetPassword({
    currentPassword: "fR5Alu28cPCa984",
    newPassword: "vcFGz9GLaOB88kV",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { userAccountResetPassword } from "@pipeshub-ai/sdk/funcs/user-account-reset-password.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await userAccountResetPassword(pipeshub, {
    currentPassword: "fR5Alu28cPCa984",
    newPassword: "vcFGz9GLaOB88kV",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountResetPassword failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResetPasswordRequest](../../models/operations/reset-password-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AuthenticatedPasswordResetResponse](../../models/authenticated-password-reset-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorResponse          | 400, 401, 404                 | application/json              |
| errors.RateLimitErrorResponse | 429                           | application/json              |
| errors.ErrorResponse          | 500                           | application/json              |
| errors.PipeshubDefaultError   | 4XX, 5XX                      | \*/\*                         |
# UserAccount

## Overview

User authentication including multi-step MFA, password reset, OTP login, and token management

### Available Operations

* [initAuth](#initauth) - Initialize authentication session
* [authenticate](#authenticate) - Authenticate user with credentials
* [generateLoginOtp](#generateloginotp) - Generate and send OTP for login
* [forgotPassword](#forgotpassword) - Request password reset email
* [resetPasswordWithToken](#resetpasswordwithtoken) - Reset password with email token
* [refreshToken](#refreshtoken) - Refresh access token
* [logout](#logout) - Logout current session

## initAuth

Initialize an authentication session for a user by email address.
This is the first step in the multi-step authentication flow.
<br><br>
<b>Flow:</b><br>
1. Call this endpoint with the user's email<br>
2. Receive a session token in the <code>x-session-token</code> response header<br>
3. Use the session token in subsequent <code>/authenticate</code> calls<br>
4. The response includes <code>allowedMethods</code> for the first authentication step
<br><br>
<b>Session Token:</b><br>
- Stored in response header <code>x-session-token</code><br>
- Required for all subsequent authentication requests<br>
- Expires after a configured timeout period
<br><br>
<b>Multi-Factor Authentication:</b><br>
If the organization has MFA configured, you'll need to complete multiple
authentication steps. Each step completion returns the next step's allowed methods.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="initAuth" method="post" path="/userAccount/initAuth" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

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
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountInitAuth } from "pipeshub/funcs/user-account-init-auth.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

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

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.AuthError            | 400, 403, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## authenticate

Authenticate a user using the specified method and credentials.
Requires a valid session token from <code>/initAuth</code>.
<br><br>
<b>Credential Formats by Method:</b><br>
- <code>password</code>: <code>{ "credentials": { "password": "your-password" } }</code><br>
- <code>otp</code>: <code>{ "credentials": { "otp": "123456" } }</code> (6-digit code, valid for 10 minutes)<br>
- <code>google</code>: <code>{ "credentials": "google-id-token-string" }</code><br>
- <code>microsoft</code>: <code>{ "credentials": { "accessToken": "...", "idToken": "..." } }</code><br>
- <code>azureAd</code>: <code>{ "credentials": { "accessToken": "...", "idToken": "..." } }</code><br>
- <code>oauth</code>: <code>{ "credentials": { "accessToken": "...", "idToken": "..." } }</code><br>
- <code>samlSso</code>: Handled via redirect flow (use <code>/saml/signIn</code> instead)
<br><br>
<b>Multi-Step Response:</b><br>
If organization uses MFA, successful authentication returns:<br>
- <code>status: "success"</code> with <code>nextStep</code> and <code>allowedMethods</code> for next step
<br><br>
<b>Fully Authenticated Response:</b><br>
After completing all steps:<br>
- <code>message: "Fully authenticated"</code> with <code>accessToken</code> (1hr) and <code>refreshToken</code> (7d)
<br><br>
<b>Security:</b><br>
- Account locks after 5 consecutive failed attempts<br>
- CAPTCHA may be required if enabled (pass <code>cf-turnstile-response</code>)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="authenticate" method="post" path="/userAccount/authenticate" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.authenticate({
    xSessionToken: "<value>",
    body: {
      method: "oauth",
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
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountAuthenticate } from "pipeshub/funcs/user-account-authenticate.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await userAccountAuthenticate(pipeshub, {
    xSessionToken: "<value>",
    body: {
      method: "oauth",
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

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.AuthError            | 400, 401, 403, 404, 410     | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## generateLoginOtp

Generate and send a 6-digit one-time password (OTP) to the user's email.
Use this endpoint before authenticating with the <code>otp</code> method.
<br><br>
<b>OTP Details:</b><br>
- 6 digits numeric code<br>
- Valid for <b>10 minutes</b> after generation<br>
- Sent to user's registered email address
<br><br>
<b>Rate Limiting:</b><br>
- Multiple OTP requests may be rate-limited<br>
- Wait for the current OTP to expire before requesting a new one
<br><br>
<b>CAPTCHA:</b><br>
If Cloudflare Turnstile is enabled, include <code>cf-turnstile-response</code> in the request body.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="generateLoginOtp" method="post" path="/userAccount/login/otp/generate" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.generateLoginOtp({
    email: "Garland.Sipes42@hotmail.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountGenerateLoginOtp } from "pipeshub/funcs/user-account-generate-login-otp.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await userAccountGenerateLoginOtp(pipeshub, {
    email: "Garland.Sipes42@hotmail.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountGenerateLoginOtp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OtpGenerateRequest](../../models/otp-generate-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateLoginOtpResponse](../../models/operations/generate-login-otp-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.AuthError            | 400, 403, 404               | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## forgotPassword

Send a password reset link to the user's email.
The link contains a time-limited token that can be used to reset the password.
<br><br>
<b>Note:</b> This endpoint always returns 200 even if the email doesn't exist (to prevent email enumeration).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="forgotPassword" method="post" path="/userAccount/password/forgot" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.forgotPassword({
    email: "Barton.Gutkowski68@yahoo.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountForgotPassword } from "pipeshub/funcs/user-account-forgot-password.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await userAccountForgotPassword(pipeshub, {
    email: "Barton.Gutkowski68@yahoo.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountForgotPassword failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ForgotPasswordRequest](../../models/forgot-password-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ForgotPasswordResponse](../../models/operations/forgot-password-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## resetPasswordWithToken

Reset password using a token received via email from the forgot password flow.
<br><br>
<b>Password Requirements:</b><br>
- Minimum 8 characters<br>
- At least 1 uppercase letter<br>
- At least 1 lowercase letter<br>
- At least 1 number<br>
- At least 1 special character (#?!@$%^&*-)
<br><br>
<b>Security Notes:</b><br>
- Token is single-use and expires after a set time<br>
- A new access token is returned upon successful reset


### Example Usage

<!-- UsageSnippet language="typescript" operationID="resetPasswordWithToken" method="post" path="/userAccount/password/reset/token" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.resetPasswordWithToken({
    scopedToken: process.env["PIPESHUB_SCOPED_TOKEN"] ?? "",
  }, {
    password: "H9GEHoL829GXj06",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountResetPasswordWithToken } from "pipeshub/funcs/user-account-reset-password-with-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await userAccountResetPasswordWithToken(pipeshub, {
    scopedToken: process.env["PIPESHUB_SCOPED_TOKEN"] ?? "",
  }, {
    password: "H9GEHoL829GXj06",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountResetPasswordWithToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.TokenPasswordResetRequest](../../models/token-password-reset-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ResetPasswordWithTokenSecurity](../../models/operations/reset-password-with-token-security.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PasswordResetResponse](../../models/password-reset-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.AuthError            | 400                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## refreshToken

Get a new access token using a valid refresh token.
<br><br>
<b>Usage:</b><br>
- Pass the refresh token as a Bearer token in the Authorization header<br>
- Returns a new access token (1 hour expiry) and basic user information
<br><br>
<b>Token Lifetimes:</b><br>
- Access token: 1 hour<br>
- Refresh token: 7 days
<br><br>
<b>Best Practices:</b><br>
- Call this endpoint before the access token expires<br>
- Store the new access token and continue using it for authenticated requests<br>
- If refresh fails with 401, redirect user to login flow


### Example Usage

<!-- UsageSnippet language="typescript" operationID="refreshToken" method="post" path="/userAccount/refresh/token" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.refreshToken({
    scopedToken: process.env["PIPESHUB_SCOPED_TOKEN"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountRefreshToken } from "pipeshub/funcs/user-account-refresh-token.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await userAccountRefreshToken(pipeshub, {
    scopedToken: process.env["PIPESHUB_SCOPED_TOKEN"] ?? "",
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
| errors.AuthError            | 401, 404                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## logout

Log out the current user session and invalidate tokens.
<br><br>
<b>Effects:</b><br>
- Invalidates the current access token<br>
- Clears server-side session data<br>
- Client should also clear stored tokens locally
<br><br>
<b>Note:</b> This endpoint requires the access token, not the refresh token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="logout" method="post" path="/userAccount/logout/manual" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await pipeshub.userAccount.logout();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userAccountLogout } from "pipeshub/funcs/user-account-logout.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await userAccountLogout(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userAccountLogout failed:", res.error);
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

**Promise\<[operations.LogoutResponse](../../models/operations/logout-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
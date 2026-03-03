# Saml

## Overview

SAML 2.0 Single Sign-On integration with enterprise Identity Providers

### Available Operations

* [signInViaSAML](#signinviasaml) - Initiate SAML sign-in flow
* [samlSignInCallback](#samlsignincallback) - SAML sign-in callback

## signInViaSAML

Initiate SAML Single Sign-On authentication by redirecting to the Identity Provider (IDP).
<br><br>
<b>Usage:</b><br>
1. Call <code>/userAccount/initAuth</code> to get a session token<br>
2. If <code>samlSso</code> is in the allowed methods, redirect the user to this endpoint<br>
3. User authenticates with their IDP<br>
4. IDP redirects back to <code>/saml/signIn/callback</code> with SAML response<br>
5. Callback completes authentication and returns tokens
<br><br>
<b>Note:</b> This is a browser redirect endpoint, not a typical API call.
The user's browser should be redirected to this URL.
<br><br>
<b>Prerequisites:</b><br>
- Organization must have SAML SSO configured via <code>/saml/updateAppConfig</code><br>
- User must belong to an organization with SAML enabled


### Example Usage

<!-- UsageSnippet language="typescript" operationID="signInViaSAML" method="get" path="/saml/signIn" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.saml.signInViaSAML({
    email: "Daphney.Koss@hotmail.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { samlSignInViaSAML } from "@pipeshub-ai/sdk/funcs/saml-sign-in-via-saml.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await samlSignInViaSAML(pipeshub, {
    email: "Daphney.Koss@hotmail.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("samlSignInViaSAML failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SignInViaSAMLRequest](../../models/operations/sign-in-via-saml-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SignInViaSAMLResponse](../../models/operations/sign-in-via-saml-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## samlSignInCallback

Handle the SAML Identity Provider callback after user authentication. This endpoint receives the SAML assertion from the IdP.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="samlSignInCallback" method="post" path="/saml/signIn/callback" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  await pipeshub.saml.samlSignInCallback();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { samlSAMLSignInCallback } from "@pipeshub-ai/sdk/funcs/saml-saml-sign-in-callback.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await samlSAMLSignInCallback(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("samlSAMLSignInCallback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SamlSignInCallbackRequest](../../models/operations/saml-sign-in-callback-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.SamlSignInCallbackBadRequestError | 400                                      | application/json                         |
| errors.UnauthorizedError                 | 401                                      | application/json                         |
| errors.PipeshubDefaultError              | 4XX, 5XX                                 | \*/\*                                    |
# OrganizationAuthConfig

## Overview

Admin configuration of authentication methods including MFA steps and allowed providers

### Available Operations

* [getAuthMethods](#getauthmethods) - Get organization authentication methods
* [updateAuthMethod](#updateauthmethod) - Update organization authentication methods
* [~~setUpAuthConfig~~](#setupauthconfig) - Set up auth configuration :warning: **Deprecated**

## getAuthMethods

Retrieve the configured authentication methods for the organization.
<br><br>
<b>Response Structure:</b><br>
Returns an array of authentication steps, each containing:<br>
- <code>order</code>: Step number (1-3)<br>
- <code>allowedMethods</code>: Array of methods allowed for that step
<br><br>
<b>Example Response:</b><br>
<pre>
{
  "authMethods": [
    { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] },
    { "order": 2, "allowedMethods": [{ "type": "otp" }] }
  ]
}
</pre>
<br>
<b>Admin Access Required:</b> Only organization admins can view auth configuration.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAuthMethods" method="get" path="/orgAuthConfig/authMethods" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizationAuthConfig.getAuthMethods();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationAuthConfigGetAuthMethods } from "@pipeshub-ai/sdk/funcs/organization-auth-config-get-auth-methods.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationAuthConfigGetAuthMethods(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationAuthConfigGetAuthMethods failed:", res.error);
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

**Promise\<[models.AuthConfig](../../models/auth-config.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAuthMethod

Update the authentication methods configuration for an organization.
This allows admins to configure single or multi-factor authentication.
<br><br>
<b>Validation Rules:</b><br>
- Minimum 1 step, maximum 3 steps<br>
- Each step must have a unique order (1, 2, or 3)<br>
- No duplicate methods within the same step<br>
- No method can appear in multiple steps<br>
- Each step must have at least one allowed method
<br><br>
<b>Available Methods:</b><br>
- <code>password</code>: Email/password authentication<br>
- <code>otp</code>: One-time password via email<br>
- <code>google</code>: Google OAuth 2.0<br>
- <code>microsoft</code>: Microsoft OAuth 2.0<br>
- <code>azureAd</code>: Azure Active Directory<br>
- <code>samlSso</code>: SAML 2.0 Single Sign-On<br>
- <code>oauth</code>: Generic OAuth 2.0 provider
<br><br>
<b>Example - Single Factor (Password or Google):</b><br>
<pre>
{
  "authMethods": [
    { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] }
  ]
}
</pre>
<br>
<b>Example - Two Factor (Password + OTP):</b><br>
<pre>
{
  "authMethods": [
    { "order": 1, "allowedMethods": [{ "type": "password" }] },
    { "order": 2, "allowedMethods": [{ "type": "otp" }] }
  ]
}
</pre>
<br>
<b>Admin Access Required:</b> Only organization admins can update auth configuration.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAuthMethod" method="post" path="/orgAuthConfig/updateAuthMethod" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizationAuthConfig.updateAuthMethod({
    authMethods: [
      {
        order: 195644,
        allowedMethods: [
          {
            type: "samlSso",
          },
        ],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationAuthConfigUpdateAuthMethod } from "@pipeshub-ai/sdk/funcs/organization-auth-config-update-auth-method.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationAuthConfigUpdateAuthMethod(pipeshub, {
    authMethods: [
      {
        order: 195644,
        allowedMethods: [
          {
            type: "samlSso",
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationAuthConfigUpdateAuthMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AuthConfig](../../models/auth-config.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAuthMethodResponse](../../models/operations/update-auth-method-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.AuthError            | 400                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## ~~setUpAuthConfig~~

<b>⚠️ Deprecated:</b> This endpoint is deprecated and will be removed in a future release.<br><br>
Set up or initialize the organization's authentication configuration.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="setUpAuthConfig" method="post" path="/orgAuthConfig/" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizationAuthConfig.setUpAuthConfig({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationAuthConfigSetUpAuthConfig } from "@pipeshub-ai/sdk/funcs/organization-auth-config-set-up-auth-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationAuthConfigSetUpAuthConfig(pipeshub, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationAuthConfigSetUpAuthConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetUpAuthConfigRequest](../../models/operations/set-up-auth-config-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SetUpAuthConfigResponse](../../models/operations/set-up-auth-config-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
# OrganizationAuthConfig

## Overview

### Available Operations

* [getAuthMethods](#getauthmethods) - Get organization authentication methods
* [updateAuthMethod](#updateauthmethod) - Update organization authentication methods
* [setUpAuthConfig](#setupauthconfig) - Set up auth configuration

## getAuthMethods

Retrieve the configured authentication methods for the organization.

**Response Structure:**

Returns an array of authentication steps, each containing:
- `order`: Step number (1-3)
- `allowedMethods`: Array of methods allowed for that step

**Example Response:**

```json
{
  "authMethods": [
    { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] },
    { "order": 2, "allowedMethods": [{ "type": "otp" }] }
  ]
}
```

**Admin Access Required:** Only organization admins can view auth configuration.


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
| errors.ErrorResponse        | 400, 401, 404               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAuthMethod

Update the authentication methods configuration for an organization.
This allows admins to configure single or multi-factor authentication.

**Validation Rules:**
- Minimum 1 step, maximum 3 steps
- Each step must have a unique order (1, 2, or 3)
- No duplicate methods within the same step
- No method can appear in multiple steps
- Each step must have at least one allowed method

**Available Methods:**
- `password`: Email/password authentication
- `otp`: One-time password via email
- `google`: Google OAuth 2.0
- `microsoft`: Microsoft OAuth 2.0
- `azureAd`: Azure Active Directory
- `samlSso`: SAML 2.0 Single Sign-On
- `oauth`: Generic OAuth 2.0 provider

**Example - Single Factor (Password or Google):**

```json
{
  "authMethod": [
    { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] }
  ]
}
```

**Example - Two Factor (Password + OTP):**

```json
{
  "authMethod": [
    { "order": 1, "allowedMethods": [{ "type": "password" }] },
    { "order": 2, "allowedMethods": [{ "type": "otp" }] }
  ]
}
```

**Admin Access Required:** Only organization admins can update auth configuration.


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
    authMethod: [
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
    authMethod: [
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
| `request`                                                                                                                                                                      | [operations.UpdateAuthMethodRequest](../../models/operations/update-auth-method-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateAuthMethodResponse](../../models/update-auth-method-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 404               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## setUpAuthConfig

Set up or initialize the organization's authentication configuration.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="setUpAuthConfig" method="post" path="/orgAuthConfig" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizationAuthConfig.setUpAuthConfig({
    contactEmail: "Buster_Waelchi@yahoo.com",
    registeredName: "<value>",
    adminFullName: "<value>",
  });

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
  const res = await organizationAuthConfigSetUpAuthConfig(pipeshub, {
    contactEmail: "Buster_Waelchi@yahoo.com",
    registeredName: "<value>",
    adminFullName: "<value>",
  });
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
| `request`                                                                                                                                                                      | [models.OrgAuthConfigCreateRequest](../../models/org-auth-config-create-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OrgAuthConfigSetupResponse](../../models/org-auth-config-setup-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 404               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
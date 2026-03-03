# Organizations

## Overview

Organization management operations

### Available Operations

* [checkOrgExists](#checkorgexists) - Check if organization exists
* [createOrganization](#createorganization) - Create organization
* [getCurrentOrganization](#getcurrentorganization) - Get current organization
* [updateOrganization](#updateorganization) - Update organization
* [deleteOrganization](#deleteorganization) - Delete organization
* [uploadOrganizationLogo](#uploadorganizationlogo) - Upload organization logo
* [getOrganizationLogo](#getorganizationlogo) - Get organization logo
* [deleteOrganizationLogo](#deleteorganizationlogo) - Delete organization logo
* [getOnboardingStatus](#getonboardingstatus) - Get onboarding status
* [updateOnboardingStatus](#updateonboardingstatus) - Update onboarding status

## checkOrgExists

Check if any organization has been created in the system. This is typically the first API call made during initial setup.<br><br>
<b>Overview:</b><br>
This public endpoint determines whether the system has been initialized with an organization. Used by the frontend to decide whether to show the setup wizard or the login screen.<br><br>
<b>Use Cases:</b><br>
<ul>
<li>First-time setup detection</li>
<li>Onboarding flow decisions</li>
<li>System initialization checks</li>
</ul>
<b>Response:</b><br>
<ul>
<li><code>exists: true</code> - Organization exists, show login</li>
<li><code>exists: false</code> - No organization, show setup wizard</li>
</ul>
<b>Note:</b> This endpoint requires no authentication and is publicly accessible.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="checkOrgExists" method="get" path="/org/exists" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.organizations.checkOrgExists();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsCheckOrgExists } from "@pipeshub-ai/sdk/funcs/organizations-check-org-exists.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await organizationsCheckOrgExists(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsCheckOrgExists failed:", res.error);
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

**Promise\<[operations.CheckOrgExistsResponse](../../models/operations/check-org-exists-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## createOrganization

Create a new organization and its first admin user. This is the initial setup endpoint for new PipesHub installations.<br><br>
<b>Overview:</b><br>
This endpoint performs the complete initial setup of a PipesHub instance, including creating the organization entity and its first administrator account. Should only be called once during initial setup.<br><br>
<b>Setup Flow:</b><br>
<ol>
<li>Frontend calls <code>/org/exists</code> to check if setup is needed</li>
<li>If no organization exists, show setup wizard</li>
<li>Collect organization and admin details</li>
<li>Call this endpoint to create organization</li>
<li>User is automatically logged in as admin</li>
</ol>
<b>What Gets Created:</b><br>
<ul>
<li>Organization entity with provided details</li>
<li>Admin user account with provided credentials</li>
<li>Default user groups (admin, everyone)</li>
<li>Default system settings</li>
<li>Initial authentication configuration</li>
</ul>
<b>Account Types:</b><br>
<ul>
<li><code>individual</code>: Single-user account, limited team features</li>
<li><code>business</code>: Multi-user organization with full features</li>
</ul>
<b>Security:</b><br>
<ul>
<li>This endpoint only works if no organization exists</li>
<li>Password must meet security requirements</li>
<li>Email verification may be required based on config</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createOrganization" method="post" path="/org" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.organizations.createOrganization({
    accountType: "business",
    shortName: "Acme",
    registeredName: "Acme Corporation Inc.",
    contactEmail: "admin@acme.com",
    adminFullName: "John Smith",
    password: "SecurePassword123!",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsCreateOrganization } from "@pipeshub-ai/sdk/funcs/organizations-create-organization.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await organizationsCreateOrganization(pipeshub, {
    accountType: "business",
    shortName: "Acme",
    registeredName: "Acme Corporation Inc.",
    contactEmail: "admin@acme.com",
    adminFullName: "John Smith",
    password: "SecurePassword123!",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsCreateOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateOrganizationRequest](../../models/operations/create-organization-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateOrganizationResponse](../../models/operations/create-organization-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCurrentOrganization

Retrieve details about the authenticated user's organization.<br><br>
<b>Overview:</b><br>
This endpoint returns complete information about the current user's organization, including profile data, settings, and configuration. Use this for organization profile pages and settings.<br><br>
<b>Response Includes:</b><br>
<ul>
<li>Organization profile (name, email, address)</li>
<li>Account type and billing status</li>
<li>Feature flags and limits</li>
<li>Branding settings (logo, colors)</li>
<li>Creation and modification timestamps</li>
</ul>
<b>Use Cases:</b><br>
<ul>
<li>Organization profile pages</li>
<li>Settings and configuration screens</li>
<li>Billing and subscription displays</li>
<li>White-label branding retrieval</li>
</ul>
<b>Note:</b><br>
All authenticated users can access this endpoint to view their organization's details.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCurrentOrganization" method="get" path="/org" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.getCurrentOrganization();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsGetCurrentOrganization } from "@pipeshub-ai/sdk/funcs/organizations-get-current-organization.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsGetCurrentOrganization(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetCurrentOrganization failed:", res.error);
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

**Promise\<[models.Organization](../../models/organization.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateOrganization

Update organization profile and settings information.<br><br>
<b>Overview:</b><br>
This endpoint allows administrators to update the organization's profile information, contact details, and address. Used in the organization settings section of the admin panel.<br><br>
<b>Updatable Fields:</b><br>
<ul>
<li><code>registeredName</code>: Official registered/legal name of the organization</li>
<li><code>shortName</code>: Short display name used in UI</li>
<li><code>phoneNumber</code>: Primary contact phone number</li>
<li><code>permanentAddress</code>: Full address object with street, city, state, country, postal code</li>
</ul>
<b>Restrictions:</b><br>
<ul>
<li>Only organization admins can perform updates</li>
<li>Contact email cannot be changed through this endpoint</li>
<li>Account type cannot be changed after creation</li>
</ul>
<b>Side Effects:</b><br>
<ul>
<li>Organization update event is published</li>
<li>Cached organization data is invalidated</li>
<li>Changes are reflected immediately across all services</li>
</ul>
<b>Validation:</b><br>
<ul>
<li>Phone number must be valid international format</li>
<li>Address fields have maximum length constraints</li>
<li>Names cannot be empty if provided</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateOrganization" method="put" path="/org" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.updateOrganization({
    registeredName: "Acme Corporation Inc.",
    shortName: "Acme Corp",
    phoneNumber: "+15551234567",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsUpdateOrganization } from "@pipeshub-ai/sdk/funcs/organizations-update-organization.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsUpdateOrganization(pipeshub, {
    registeredName: "Acme Corporation Inc.",
    shortName: "Acme Corp",
    phoneNumber: "+15551234567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsUpdateOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOrganizationRequest](../../models/operations/update-organization-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateOrganizationResponse](../../models/operations/update-organization-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteOrganization

Permanently delete an organization and all associated data.<br><br>
<b>WARNING:</b> This action is <b>irreversible</b>.<br><br>
<b>Data Deleted:</b><br>
<ul>
<li>All user accounts in the organization</li>
<li>All teams and user groups</li>
<li>All documents and storage data</li>
<li>All configuration and settings</li>
</ul>
<b>Requirements:</b><br>
<ul>
<li>Must be the organization owner (super admin)</li>
<li>Must provide confirmation parameter</li>
<li>All active subscriptions must be cancelled first</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteOrganization" method="delete" path="/org" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.deleteOrganization({
    confirm: "DELETE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsDeleteOrganization } from "@pipeshub-ai/sdk/funcs/organizations-delete-organization.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsDeleteOrganization(pipeshub, {
    confirm: "DELETE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsDeleteOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOrganizationRequest](../../models/operations/delete-organization-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteOrganizationResponse](../../models/operations/delete-organization-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## uploadOrganizationLogo

Upload or update the organization's logo image.<br><br>
<b>Supported Formats:</b><br>
<ul>
<li>PNG (recommended for transparency)</li>
<li>JPG/JPEG</li>
<li>SVG</li>
<li>WebP</li>
</ul>
<b>Requirements:</b><br>
<ul>
<li>Maximum file size: 5MB</li>
<li>Recommended dimensions: 256x256 pixels or higher</li>
<li>Square aspect ratio recommended</li>
</ul>
<b>Side Effects:</b><br>
<ul>
<li>Previous logo is replaced</li>
<li>Multiple sizes may be generated for different use cases</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadOrganizationLogo" method="put" path="/org/logo" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";
import { openAsBlob } from "node:fs";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.uploadOrganizationLogo({
    logo: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsUploadOrganizationLogo } from "@pipeshub-ai/sdk/funcs/organizations-upload-organization-logo.js";
import { openAsBlob } from "node:fs";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsUploadOrganizationLogo(pipeshub, {
    logo: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsUploadOrganizationLogo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadOrganizationLogoRequest](../../models/operations/upload-organization-logo-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadOrganizationLogoResponse](../../models/operations/upload-organization-logo-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOrganizationLogo

Retrieve the organization's logo image or URL.<br><br>
<b>Response Formats:</b><br>
<ul>
<li>Returns a signed URL to access the logo</li>
<li>URL is valid for a limited time (typically 1 hour)</li>
</ul>
<b>Use Cases:</b><br>
<ul>
<li>Displaying logo in navigation/header</li>
<li>Email templates</li>
<li>White-label branding</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOrganizationLogo" method="get" path="/org/logo" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.getOrganizationLogo();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsGetOrganizationLogo } from "@pipeshub-ai/sdk/funcs/organizations-get-organization-logo.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsGetOrganizationLogo(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetOrganizationLogo failed:", res.error);
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

**Promise\<[operations.GetOrganizationLogoResponse](../../models/operations/get-organization-logo-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteOrganizationLogo

Remove the organization's custom logo.<br><br>
<b>Behavior:</b><br>
<ul>
<li>Logo file is permanently deleted from storage</li>
<li>Organization reverts to default/placeholder logo</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteOrganizationLogo" method="delete" path="/org/logo" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.deleteOrganizationLogo();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsDeleteOrganizationLogo } from "@pipeshub-ai/sdk/funcs/organizations-delete-organization-logo.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsDeleteOrganizationLogo(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsDeleteOrganizationLogo failed:", res.error);
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

**Promise\<[operations.DeleteOrganizationLogoResponse](../../models/operations/delete-organization-logo-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOnboardingStatus

Retrieve the organization's onboarding progress and status.<br><br>
<b>Response Details:</b><br>
<ul>
<li>Current onboarding step</li>
<li>Completion status of each step</li>
<li>Overall completion percentage</li>
</ul>
<b>Onboarding Steps:</b><br>
<ul>
<li>Organization profile setup</li>
<li>Admin account configuration</li>
<li>Invite team members</li>
<li>Connect integrations</li>
<li>Configure settings</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOnboardingStatus" method="get" path="/org/onboarding-status" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.getOnboardingStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsGetOnboardingStatus } from "@pipeshub-ai/sdk/funcs/organizations-get-onboarding-status.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsGetOnboardingStatus(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetOnboardingStatus failed:", res.error);
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

**Promise\<[operations.GetOnboardingStatusResponse](../../models/operations/get-onboarding-status-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateOnboardingStatus

Update the organization's onboarding progress.<br><br>
<b>Use Cases:</b><br>
<ul>
<li>Mark a step as completed</li>
<li>Skip optional steps</li>
<li>Complete entire onboarding</li>
</ul>
<b>Behavior:</b><br>
<ul>
<li>Steps must be completed in order (unless skippable)</li>
<li>Completing all required steps marks onboarding as complete</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateOnboardingStatus" method="put" path="/org/onboarding-status" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.organizations.updateOnboardingStatus({
    stepId: "invite_team",
    action: "complete",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { organizationsUpdateOnboardingStatus } from "@pipeshub-ai/sdk/funcs/organizations-update-onboarding-status.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await organizationsUpdateOnboardingStatus(pipeshub, {
    stepId: "invite_team",
    action: "complete",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsUpdateOnboardingStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOnboardingStatusRequest](../../models/operations/update-onboarding-status-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateOnboardingStatusResponse](../../models/operations/update-onboarding-status-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
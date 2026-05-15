# Organizations

## Overview

### Available Operations

* [getCurrentOrganization](#getcurrentorganization) - Get current organization

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
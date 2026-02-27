# MetricsCollection

## Overview

Configure telemetry and metrics collection for application monitoring and analytics.

PipesHub collects anonymized usage metrics to help improve the product. Metrics are pushed
to a configurable remote server at regular intervals.

**Collected Metrics:**
- API request counts and response times
- User activity patterns (anonymized)
- Feature usage statistics
- Error rates and types

**Configuration Options:**
- Enable/disable metrics collection entirely
- Configure push interval (minimum 1 second, default 60 seconds)
- Set custom metrics server URL for self-hosted analytics

**Privacy:**
- All metrics are anonymized before collection
- No personally identifiable information (PII) is collected
- Organization can disable collection at any time


### Available Operations

* [getMetricsCollection](#getmetricscollection) - Get metrics collection configuration
* [toggleMetricsCollection](#togglemetricscollection) - Enable or disable metrics collection

## getMetricsCollection

Retrieve the current metrics collection configuration including:
- Whether collection is enabled
- Push interval settings
- Server URL configuration
- Instance identification

**Admin Access Required:** This endpoint requires administrator privileges.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMetricsCollection" method="get" path="/configurationManager/metricsCollection" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.metricsCollection.getMetricsCollection({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { metricsCollectionGetMetricsCollection } from "pipeshub/funcs/metrics-collection-get-metrics-collection.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsCollectionGetMetricsCollection(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsCollectionGetMetricsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetMetricsCollectionSecurity](../../models/operations/get-metrics-collection-security.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MetricsCollectionConfig](../../models/metrics-collection-config.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## toggleMetricsCollection

Toggle the master switch for metrics collection.

**When Enabled:**
- Application metrics are collected in the background
- Metrics are pushed to the configured server at regular intervals
- Activity counters track API usage patterns

**When Disabled:**
- No metrics are collected or stored
- No data is sent to the metrics server
- Existing scheduled push jobs are stopped

**Admin Access Required:** This endpoint requires administrator privileges.


### Example Usage: disable

<!-- UsageSnippet language="typescript" operationID="toggleMetricsCollection" method="put" path="/configurationManager/metricsCollection/toggle" example="disable" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.metricsCollection.toggleMetricsCollection({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    enableMetricCollection: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { metricsCollectionToggleMetricsCollection } from "pipeshub/funcs/metrics-collection-toggle-metrics-collection.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsCollectionToggleMetricsCollection(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    enableMetricCollection: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsCollectionToggleMetricsCollection failed:", res.error);
  }
}

run();
```
### Example Usage: enable

<!-- UsageSnippet language="typescript" operationID="toggleMetricsCollection" method="put" path="/configurationManager/metricsCollection/toggle" example="enable" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.metricsCollection.toggleMetricsCollection({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    enableMetricCollection: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { metricsCollectionToggleMetricsCollection } from "pipeshub/funcs/metrics-collection-toggle-metrics-collection.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await metricsCollectionToggleMetricsCollection(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    enableMetricCollection: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metricsCollectionToggleMetricsCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToggleMetricsCollectionRequest](../../models/operations/toggle-metrics-collection-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ToggleMetricsCollectionSecurity](../../models/operations/toggle-metrics-collection-security.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToggleMetricsCollectionResponse](../../models/operations/toggle-metrics-collection-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
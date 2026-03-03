# CrawlingJobs

## Overview

Endpoints for scheduling, managing, and monitoring data crawling jobs for enterprise connectors.

The Crawling Manager uses BullMQ (Redis-based queue) to schedule and execute crawling jobs that
sync data from external connectors (Google Drive, OneDrive, Slack, Jira, etc.) into PipesHub's
search index.

**Key Features:**
- Schedule recurring crawls (hourly, daily, weekly, monthly) or one-time crawls
- Pause and resume crawling jobs without losing configuration
- Priority-based job execution (1-10 scale)
- Automatic retry with exponential backoff on failures
- Per-connector job isolation and tracking

**Access Control:**
- Team-scoped connectors require admin privileges
- Personal-scoped connectors can only be managed by the creator
- All operations require valid JWT authentication

**Schedule Types:**
- `hourly`: Run every X hours at specified minute
- `daily`: Run once per day at specified time
- `weekly`: Run on specified days of the week
- `monthly`: Run on specified day of the month
- `custom`: Use cron expression for complex schedules
- `once`: Run once at a specific future time


### Available Operations

* [scheduleCrawlingJob](#schedulecrawlingjob) - Schedule a crawling job
* [getCrawlingJobStatus](#getcrawlingjobstatus) - Get crawling job status
* [removeCrawlingJob](#removecrawlingjob) - Remove a crawling job
* [getAllCrawlingJobStatus](#getallcrawlingjobstatus) - Get all crawling job statuses
* [removeAllCrawlingJob](#removeallcrawlingjob) - Remove all crawling jobs
* [pauseCrawlingJob](#pausecrawlingjob) - Pause a crawling job
* [resumeCrawlingJob](#resumecrawlingjob) - Resume a crawling job
* [getQueueStats](#getqueuestats) - Get queue statistics

## scheduleCrawlingJob

Schedule a new crawling job for a specific connector instance.<br><br>

<b>Overview:</b><br>
Creates a scheduled crawling job that will sync data from the specified connector into
PipesHub's search index. The job is added to a BullMQ queue and will execute according
to the specified schedule configuration.<br><br>

<b>Schedule Types:</b><br>
<ul>
<li><b>hourly:</b> Run every X hours at specified minute (e.g., every 2 hours at :30)</li>
<li><b>daily:</b> Run once per day at specified time (e.g., 2:00 AM daily)</li>
<li><b>weekly:</b> Run on specific days of the week (e.g., Mon/Wed/Fri at 3:00 AM)</li>
<li><b>monthly:</b> Run on specific day of month (e.g., 1st of each month at 4:00 AM)</li>
<li><b>custom:</b> Use cron expression for complex schedules</li>
<li><b>once:</b> Run once at a specific future datetime</li>
</ul>

<b>Access Control:</b><br>
<ul>
<li>Team-scoped connectors: Requires admin privileges</li>
<li>Personal-scoped connectors: Only the creator can schedule jobs</li>
</ul>

<b>Job Behavior:</b><br>
<ul>
<li>If a job already exists for this connector, it will be replaced</li>
<li>Disabled schedules (<code>isEnabled: false</code>) will throw an error</li>
<li>Jobs use exponential backoff for retries (5s, 10s, 20s, etc.)</li>
<li>Only last 10 completed/failed jobs are retained per connector</li>
</ul>

<b>Related Endpoints:</b><br>
<ul>
<li><code>GET /crawlingManager/{connector}/{connectorId}/schedule</code> - Get job status</li>
<li><code>POST /crawlingManager/{connector}/{connectorId}/pause</code> - Pause job</li>
<li><code>DELETE /crawlingManager/{connector}/{connectorId}/remove</code> - Remove job</li>
</ul>


### Example Usage: customCron

<!-- UsageSnippet language="typescript" operationID="scheduleCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/schedule" example="customCron" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.scheduleCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "custom",
        isEnabled: true,
        timezone: "UTC",
        cronExpression: "0 */6 * * *",
        description: "Every 6 hours",
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
import { crawlingJobsScheduleCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-schedule-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsScheduleCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "custom",
        isEnabled: true,
        timezone: "UTC",
        cronExpression: "0 */6 * * *",
        description: "Every 6 hours",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsScheduleCrawlingJob failed:", res.error);
  }
}

run();
```
### Example Usage: dailySync

<!-- UsageSnippet language="typescript" operationID="scheduleCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/schedule" example="dailySync" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.scheduleCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "daily",
        isEnabled: true,
        timezone: "UTC",
        hour: 2,
        minute: 0,
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
import { crawlingJobsScheduleCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-schedule-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsScheduleCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "daily",
        isEnabled: true,
        timezone: "UTC",
        hour: 2,
        minute: 0,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsScheduleCrawlingJob failed:", res.error);
  }
}

run();
```
### Example Usage: hourlySync

<!-- UsageSnippet language="typescript" operationID="scheduleCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/schedule" example="hourlySync" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.scheduleCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "hourly",
        isEnabled: true,
        timezone: "America/New_York",
        minute: 30,
        interval: 4,
      },
      priority: 3,
      maxRetries: 5,
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
import { crawlingJobsScheduleCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-schedule-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsScheduleCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "hourly",
        isEnabled: true,
        timezone: "America/New_York",
        minute: 30,
        interval: 4,
      },
      priority: 3,
      maxRetries: 5,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsScheduleCrawlingJob failed:", res.error);
  }
}

run();
```
### Example Usage: oneTimeSync

<!-- UsageSnippet language="typescript" operationID="scheduleCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/schedule" example="oneTimeSync" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.scheduleCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "once",
        isEnabled: true,
        timezone: "UTC",
        scheduledTime: new Date("2024-12-25T10:00:00Z"),
      },
      priority: 1,
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
import { crawlingJobsScheduleCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-schedule-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsScheduleCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "once",
        isEnabled: true,
        timezone: "UTC",
        scheduledTime: new Date("2024-12-25T10:00:00Z"),
      },
      priority: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsScheduleCrawlingJob failed:", res.error);
  }
}

run();
```
### Example Usage: weeklySync

<!-- UsageSnippet language="typescript" operationID="scheduleCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/schedule" example="weeklySync" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.scheduleCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "weekly",
        isEnabled: true,
        timezone: "Europe/London",
        daysOfWeek: [
          1,
          3,
          5,
        ],
        hour: 3,
        minute: 0,
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
import { crawlingJobsScheduleCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-schedule-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsScheduleCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    body: {
      scheduleConfig: {
        scheduleType: "weekly",
        isEnabled: true,
        timezone: "Europe/London",
        daysOfWeek: [
          1,
          3,
          5,
        ],
        hour: 3,
        minute: 0,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsScheduleCrawlingJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ScheduleCrawlingJobRequest](../../models/operations/schedule-crawling-job-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ScheduleCrawlingJobResponse](../../models/operations/schedule-crawling-job-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCrawlingJobStatus

Retrieve the current status of a scheduled crawling job for a specific connector.<br><br>

<b>Overview:</b><br>
Returns detailed information about the most recent crawling job for the specified connector,
including its current state, progress, timing information, and any error details.<br><br>

<b>Job States:</b><br>
<ul>
<li><b>waiting:</b> Job is queued and waiting to be processed</li>
<li><b>active:</b> Job is currently being processed by a worker</li>
<li><b>completed:</b> Job finished successfully</li>
<li><b>failed:</b> Job failed after exhausting retry attempts</li>
<li><b>delayed:</b> Job is scheduled for future execution</li>
<li><b>paused:</b> Job has been manually paused</li>
</ul>

<b>Access Control:</b><br>
Same as scheduling - team connectors require admin, personal connectors require creator.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrawlingJobStatus" method="get" path="/crawlingManager/{connector}/{connectorId}/schedule" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.getCrawlingJobStatus({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsGetCrawlingJobStatus } from "@pipeshub-ai/sdk/funcs/crawling-jobs-get-crawling-job-status.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsGetCrawlingJobStatus(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsGetCrawlingJobStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrawlingJobStatusRequest](../../models/operations/get-crawling-job-status-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCrawlingJobStatusResponse](../../models/operations/get-crawling-job-status-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## removeCrawlingJob

Permanently remove a scheduled crawling job for a specific connector.<br><br>

<b>Overview:</b><br>
Removes the crawling job and all associated data from the queue. This includes
removing repeatable job configurations and cleaning up job history.<br><br>

<b>What Gets Removed:</b><br>
<ul>
<li>Active or waiting job instances</li>
<li>Repeatable job configuration (for recurring schedules)</li>
<li>Paused job information</li>
<li>Job mappings and metadata</li>
</ul>

<b>Note:</b> Completed and failed job records may be retained for audit purposes.

<b>Related Endpoints:</b><br>
<ul>
<li><code>DELETE /crawlingManager/schedule/all</code> - Remove all jobs for organization</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrawlingJob" method="delete" path="/crawlingManager/{connector}/{connectorId}/remove" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.removeCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsRemoveCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-remove-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsRemoveCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsRemoveCrawlingJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrawlingJobRequest](../../models/operations/remove-crawling-job-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrawlingJobResponse](../../models/operations/remove-crawling-job-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAllCrawlingJobStatus

Retrieve the status of all scheduled crawling jobs across the organization.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllCrawlingJobStatus" method="get" path="/crawlingManager/schedule/all" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.getAllCrawlingJobStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsGetAllCrawlingJobStatus } from "@pipeshub-ai/sdk/funcs/crawling-jobs-get-all-crawling-job-status.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsGetAllCrawlingJobStatus(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsGetAllCrawlingJobStatus failed:", res.error);
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

**Promise\<[operations.GetAllCrawlingJobStatusResponse](../../models/operations/get-all-crawling-job-status-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## removeAllCrawlingJob

Remove all scheduled crawling jobs for the organization.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAllCrawlingJob" method="delete" path="/crawlingManager/schedule/all" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.removeAllCrawlingJob();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsRemoveAllCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-remove-all-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsRemoveAllCrawlingJob(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsRemoveAllCrawlingJob failed:", res.error);
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

**Promise\<[operations.RemoveAllCrawlingJobResponse](../../models/operations/remove-all-crawling-job-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## pauseCrawlingJob

Pause a running or scheduled crawling job for a specific connector.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="pauseCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/pause" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.pauseCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsPauseCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-pause-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsPauseCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsPauseCrawlingJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PauseCrawlingJobRequest](../../models/operations/pause-crawling-job-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PauseCrawlingJobResponse](../../models/operations/pause-crawling-job-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## resumeCrawlingJob

Resume a previously paused crawling job for a specific connector.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="resumeCrawlingJob" method="post" path="/crawlingManager/{connector}/{connectorId}/resume" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.resumeCrawlingJob({
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsResumeCrawlingJob } from "@pipeshub-ai/sdk/funcs/crawling-jobs-resume-crawling-job.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsResumeCrawlingJob(pipeshub, {
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsResumeCrawlingJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResumeCrawlingJobRequest](../../models/operations/resume-crawling-job-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResumeCrawlingJobResponse](../../models/operations/resume-crawling-job-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getQueueStats

Retrieve statistics for the crawling job queue including active, waiting, and completed job counts.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQueueStats" method="get" path="/crawlingManager/stats" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.crawlingJobs.getQueueStats();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { crawlingJobsGetQueueStats } from "@pipeshub-ai/sdk/funcs/crawling-jobs-get-queue-stats.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await crawlingJobsGetQueueStats(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crawlingJobsGetQueueStats failed:", res.error);
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

**Promise\<[operations.GetQueueStatsResponse](../../models/operations/get-queue-stats-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
# GetCrawlingJobStatusResponse

Job status retrieved successfully

## Example Usage

```typescript
import { GetCrawlingJobStatusResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetCrawlingJobStatusResponse = {
  success: true,
  message: "Job status retrieved successfully",
  data: {
    id: "crawl-drive-507f1f77bcf86cd799439011-507f1f77bcf86cd799439012",
    name: "crawl-drive-507f1f77bcf86cd799439011",
    data: {
      connector: "drive",
      connectorId: "507f1f77bcf86cd799439011",
      scheduleConfig: {
        scheduleType: "weekly",
        isEnabled: true,
        timezone: "UTC",
        daysOfWeek: [
          1,
          3,
          5,
        ],
        hour: 3,
        minute: 0,
      },
      orgId: "507f1f77bcf86cd799439012",
      userId: "507f1f77bcf86cd799439013",
      timestamp: new Date("2024-05-25T23:33:09.100Z"),
    },
    delay: 3600000,
    timestamp: 1703520000000,
    attemptsMade: 0,
    failedReason: null,
    state: "waiting",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `success`                                      | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            | true                                           |
| `message`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            | Job status retrieved successfully              |
| `data`                                         | [models.JobStatus](../../models/job-status.md) | :heavy_minus_sign:                             | Complete status information for a crawling job |                                                |
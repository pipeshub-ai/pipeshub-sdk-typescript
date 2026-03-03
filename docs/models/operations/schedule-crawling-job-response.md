# ScheduleCrawlingJobResponse

Crawling job scheduled successfully

## Example Usage

```typescript
import { ScheduleCrawlingJobResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ScheduleCrawlingJobResponse = {
  success: true,
  message: "Crawling job scheduled successfully",
  data: {
    jobId: "crawl-drive-507f1f77bcf86cd799439011-507f1f77bcf86cd799439012",
    connector: "drive",
    connectorId: "507f1f77bcf86cd799439011",
    scheduleConfig: {
      scheduleType: "monthly",
      isEnabled: true,
      timezone: "UTC",
      dayOfMonth: 1,
      hour: 4,
      minute: 0,
    },
    scheduledAt: new Date("2024-01-15T10:30:00Z"),
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `success`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         | true                                                                                        |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Crawling job scheduled successfully                                                         |
| `data`                                                                                      | [operations.ScheduleCrawlingJobData](../../models/operations/schedule-crawling-job-data.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
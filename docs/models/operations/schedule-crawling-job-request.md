# ScheduleCrawlingJobRequest

## Example Usage

```typescript
import { ScheduleCrawlingJobRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ScheduleCrawlingJobRequest = {
  connector: "drive",
  connectorId: "507f1f77bcf86cd799439011",
  body: {
    scheduleConfig: {
      scheduleType: "custom",
      isEnabled: true,
      timezone: "UTC",
      cronExpression: "0 2 * * *",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `connector`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Connector type identifier (e.g., "drive", "onedrive", "slack", "jira")                                     | drive                                                                                                      |
| `connectorId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier of the connector instance (MongoDB ObjectId)                                             | 507f1f77bcf86cd799439011                                                                                   |
| `body`                                                                                                     | [operations.ScheduleCrawlingJobRequestBody](../../models/operations/schedule-crawling-job-request-body.md) | :heavy_check_mark:                                                                                         | Request payload                                                                                            |                                                                                                            |
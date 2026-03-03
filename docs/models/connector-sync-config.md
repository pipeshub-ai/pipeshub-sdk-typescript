# ConnectorSyncConfig

Synchronization configuration for a connector instance

## Example Usage

```typescript
import { ConnectorSyncConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorSyncConfig = {
  scheduledConfig: {
    cronExpression: "0 */6 * * *",
    timezone: "America/New_York",
  },
  webhookConfig: {
    events: [
      "file.created",
      "file.modified",
      "file.deleted",
    ],
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `selectedStrategy`                                                                                              | [models.SelectedStrategy](../models/selected-strategy.md)                                                       | :heavy_minus_sign:                                                                                              | Sync strategy: MANUAL (user-triggered), SCHEDULED (interval/cron), WEBHOOK (event-driven), REALTIME (WebSocket) |
| `scheduledConfig`                                                                                               | [models.ScheduledConfig](../models/scheduled-config.md)                                                         | :heavy_minus_sign:                                                                                              | Configuration for scheduled sync strategy                                                                       |
| `webhookConfig`                                                                                                 | [models.WebhookConfig](../models/webhook-config.md)                                                             | :heavy_minus_sign:                                                                                              | Configuration for webhook-based sync                                                                            |
| `values`                                                                                                        | Record<string, *any*>                                                                                           | :heavy_minus_sign:                                                                                              | Sync setting values specific to the connector                                                                   |
| `customValues`                                                                                                  | Record<string, *any*>                                                                                           | :heavy_minus_sign:                                                                                              | Custom sync values                                                                                              |
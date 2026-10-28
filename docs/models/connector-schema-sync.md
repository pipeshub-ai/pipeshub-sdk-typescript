# ConnectorSchemaSync

Sync options

## Example Usage

```typescript
import { ConnectorSchemaSync } from "@pipeshub-ai/sdk/models";

let value: ConnectorSchemaSync = {
  scheduledConfig: {
    timezone: "UTC",
  },
  realtimeConfig: {
    connectionType: "WEBSOCKET",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `supportedStrategies`                                                                     | [models.SupportedStrategy](../models/supported-strategy.md)[]                             | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `selectedStrategy`                                                                        | [models.ConnectorSchemaSelectedStrategy](../models/connector-schema-selected-strategy.md) | :heavy_minus_sign:                                                                        | Strategy preselected in the form                                                          |
| `webhookConfig`                                                                           | [models.ConnectorSchemaWebhookConfig](../models/connector-schema-webhook-config.md)       | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `scheduledConfig`                                                                         | [models.ConnectorSchemaScheduledConfig](../models/connector-schema-scheduled-config.md)   | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `realtimeConfig`                                                                          | [models.RealtimeConfig](../models/realtime-config.md)                                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `customFields`                                                                            | [models.ConnectorSyncCustomField](../models/connector-sync-custom-field.md)[]             | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `customValues`                                                                            | Record<string, *any*>                                                                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `values`                                                                                  | Record<string, *any*>                                                                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
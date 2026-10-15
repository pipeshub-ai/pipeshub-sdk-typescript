# ConnectorSyncConfig

Sync strategy plus connector-specific sync settings, flat: send each field listed under `sync.customFields` in the registry schema by its `name`.

## Example Usage

```typescript
import { ConnectorSyncConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorSyncConfig = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `selectedStrategy`                                                                                 | [models.ConnectorSyncConfigSelectedStrategy](../models/connector-sync-config-selected-strategy.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `scheduledConfig`                                                                                  | [models.ConnectorSyncConfigScheduledConfig](../models/connector-sync-config-scheduled-config.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `webhookConfig`                                                                                    | [models.ConnectorSyncConfigWebhookConfig](../models/connector-sync-config-webhook-config.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `additionalProperties`                                                                             | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
# ConnectorSyncConfigScheduledConfig

## Example Usage

```typescript
import { ConnectorSyncConfigScheduledConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorSyncConfigScheduledConfig = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `intervalMinutes`                                  | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `timezone`                                         | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `startTime`                                        | *number*                                           | :heavy_minus_sign:                                 | Epoch milliseconds                                 |
| `startDateTime`                                    | *any*                                              | :heavy_minus_sign:                                 | When the schedule starts, as the frontend sends it |
| `additionalProperties`                             | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |
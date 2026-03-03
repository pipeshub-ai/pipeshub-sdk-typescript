# ScheduledConfig

Configuration for scheduled sync strategy

## Example Usage

```typescript
import { ScheduledConfig } from "@pipeshub-ai/sdk/models";

let value: ScheduledConfig = {
  cronExpression: "0 */6 * * *",
  timezone: "America/New_York",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `intervalMinutes`                       | *number*                                | :heavy_minus_sign:                      | Sync interval in minutes                | 60                                      |
| `cronExpression`                        | *string*                                | :heavy_minus_sign:                      | Cron expression for advanced scheduling | 0 */6 * * *                             |
| `timezone`                              | *string*                                | :heavy_minus_sign:                      | Timezone for scheduled sync             | America/New_York                        |
# HourlyScheduleConfig

Run crawling job every X hours at a specified minute

## Example Usage

```typescript
import { HourlyScheduleConfig } from "@pipeshub-ai/sdk/models";

let value: HourlyScheduleConfig = {
  scheduleType: "hourly",
  minute: 30,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `scheduleType`                                                                     | *"hourly"*                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `isEnabled`                                                                        | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the schedule is active. Disabled schedules won't create new jobs.          |                                                                                    |
| `timezone`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Asia/Tokyo") | UTC                                                                                |
| `minute`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | Minute of the hour to run (0-59)                                                   | 30                                                                                 |
| `interval`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | Run every X hours (1 = every hour, 2 = every 2 hours, etc.)                        | 1                                                                                  |
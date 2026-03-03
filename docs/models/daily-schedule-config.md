# DailyScheduleConfig

Run crawling job once per day at a specified time

## Example Usage

```typescript
import { DailyScheduleConfig } from "@pipeshub-ai/sdk/models";

let value: DailyScheduleConfig = {
  scheduleType: "daily",
  hour: 2,
  minute: 0,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `scheduleType`                                                                     | *"daily"*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `isEnabled`                                                                        | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the schedule is active. Disabled schedules won't create new jobs.          |                                                                                    |
| `timezone`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Asia/Tokyo") | UTC                                                                                |
| `hour`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | Hour of the day to run (0-23, 24-hour format)                                      | 2                                                                                  |
| `minute`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | Minute of the hour to run (0-59)                                                   | 0                                                                                  |
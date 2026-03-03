# MonthlyScheduleConfig

Run crawling job on a specified day of each month

## Example Usage

```typescript
import { MonthlyScheduleConfig } from "@pipeshub-ai/sdk/models";

let value: MonthlyScheduleConfig = {
  scheduleType: "monthly",
  dayOfMonth: 1,
  hour: 4,
  minute: 0,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scheduleType`                                                                       | *"monthly"*                                                                          | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `isEnabled`                                                                          | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether the schedule is active. Disabled schedules won't create new jobs.            |                                                                                      |
| `timezone`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Asia/Tokyo")   | UTC                                                                                  |
| `dayOfMonth`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | Day of the month to run (1-31). If day doesn't exist in month, job runs on last day. | 1                                                                                    |
| `hour`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | Hour of the day to run (0-23)                                                        | 4                                                                                    |
| `minute`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | Minute of the hour to run (0-59)                                                     | 0                                                                                    |
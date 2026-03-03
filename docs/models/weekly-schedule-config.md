# WeeklyScheduleConfig

Run crawling job on specified days of the week

## Example Usage

```typescript
import { WeeklyScheduleConfig } from "@pipeshub-ai/sdk/models";

let value: WeeklyScheduleConfig = {
  scheduleType: "weekly",
  daysOfWeek: [
    1,
    3,
    5,
  ],
  hour: 3,
  minute: 0,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `scheduleType`                                                                                                           | *"weekly"*                                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `isEnabled`                                                                                                              | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Whether the schedule is active. Disabled schedules won't create new jobs.                                                |                                                                                                                          |
| `timezone`                                                                                                               | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Asia/Tokyo")                                       | UTC                                                                                                                      |
| `daysOfWeek`                                                                                                             | *number*[]                                                                                                               | :heavy_check_mark:                                                                                                       | Days of the week to run (0=Sunday, 1=Monday, ..., 6=Saturday).<br><br/>Example: [1, 3, 5] runs on Monday, Wednesday, Friday<br/> | [<br/>1,<br/>3,<br/>5<br/>]                                                                                              |
| `hour`                                                                                                                   | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Hour of the day to run (0-23)                                                                                            | 3                                                                                                                        |
| `minute`                                                                                                                 | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Minute of the hour to run (0-59)                                                                                         | 0                                                                                                                        |
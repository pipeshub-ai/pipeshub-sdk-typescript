# OnceScheduleConfig

Run crawling job once at a specific future datetime

## Example Usage

```typescript
import { OnceScheduleConfig } from "@pipeshub-ai/sdk/models";

let value: OnceScheduleConfig = {
  scheduleType: "once",
  scheduledTime: new Date("2024-12-25T10:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scheduleType`                                                                                | *"once"*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isEnabled`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the schedule is active. Disabled schedules won't create new jobs.                     |                                                                                               |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Asia/Tokyo")            | UTC                                                                                           |
| `scheduledTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | ISO 8601 datetime when the job should run. Must be in the future.                             | 2024-12-25T10:00:00Z                                                                          |
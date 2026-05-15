# MetricsResponse

Telemetry recorded server-side alongside the feedback.
Always present.


## Example Usage

```typescript
import { MetricsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: MetricsResponse = {
  timeToFeedback: 2624.85,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `timeToFeedback`                                                                | *number*                                                                        | :heavy_check_mark:                                                              | Milliseconds between message creation and feedback<br/>submission. Always present.<br/> |
| `userInteractionTime`                                                           | *number*                                                                        | :heavy_minus_sign:                                                              | Echoed from `metrics.userInteractionTime` in the request when supplied.         |
| `feedbackSessionId`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | Echoed from `metrics.feedbackSessionId` in the request when supplied.           |
| `userAgent`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Value of the `User-Agent` request header captured server-side.                  |
# MessageFeedbackAppendMetrics

Telemetry recorded server-side alongside the feedback. Always present
on append responses.


## Example Usage

```typescript
import { MessageFeedbackAppendMetrics } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackAppendMetrics = {
  timeToFeedback: 2888.72,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `timeToFeedback`                                                                | *number*                                                                        | :heavy_check_mark:                                                              | Milliseconds between message creation and feedback submission.<br/>Always present.<br/> |
| `userAgent`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Value of the `User-Agent` request header captured server-side.                  |
# MessageFeedbackAppendEntry

The feedback entry just appended to the message. Echoes the fields
supplied in the request plus server-stamped `feedbackProvider`,
`timestamp`, and `metrics`.


## Example Usage

```typescript
import { MessageFeedbackAppendEntry } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackAppendEntry = {
  feedbackProvider: "<value>",
  timestamp: 527003,
  metrics: {
    timeToFeedback: 9535.75,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `isHelpful`                                                                                        | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Echoed from the request when supplied.                                                             |
| `categories`                                                                                       | [models.MessageFeedbackAppendEntryCategory](../models/message-feedback-append-entry-category.md)[] | :heavy_minus_sign:                                                                                 | Echoed categories from the request.                                                                |
| `comments`                                                                                         | [models.MessageFeedbackAppendEntryComments](../models/message-feedback-append-entry-comments.md)   | :heavy_minus_sign:                                                                                 | Echoed free-text comments from the request.                                                        |
| `feedbackProvider`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | User who submitted the feedback. Always present.                                                   |
| `timestamp`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | Submission time as epoch milliseconds (not an ISO 8601 datetime).<br/>Always present.<br/>         |
| `metrics`                                                                                          | [models.MessageFeedbackAppendMetrics](../models/message-feedback-append-metrics.md)                | :heavy_check_mark:                                                                                 | Telemetry recorded server-side alongside the feedback. Always present<br/>on append responses.<br/> |
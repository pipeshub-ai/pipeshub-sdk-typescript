# Feedback

The feedback entry just appended to the message. Echoes
the fields supplied in the request plus server-stamped
`feedbackProvider`, `timestamp`, and `metrics`.


## Example Usage

```typescript
import { Feedback } from "@pipeshub-ai/sdk/models/operations";

let value: Feedback = {
  feedbackProvider: "<value>",
  timestamp: 57398,
  metrics: {
    timeToFeedback: 4696.14,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `isHelpful`                                                                        | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Echoed from the request when supplied.                                             |
| `ratings`                                                                          | Record<string, *number*>                                                           | :heavy_minus_sign:                                                                 | Echoed per-aspect ratings (values 1–5).                                            |
| `categories`                                                                       | [operations.CategoryResponse](../../models/operations/category-response.md)[]      | :heavy_minus_sign:                                                                 | Echoed categories from the request.                                                |
| `comments`                                                                         | [operations.CommentsResponse](../../models/operations/comments-response.md)        | :heavy_minus_sign:                                                                 | Echoed free-text comments from the request.                                        |
| `feedbackProvider`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | User who submitted the feedback. Always present.                                   |
| `timestamp`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | Submission time as epoch milliseconds (not an ISO 8601<br/>datetime). Always present.<br/> |
| `metrics`                                                                          | [operations.MetricsResponse](../../models/operations/metrics-response.md)          | :heavy_check_mark:                                                                 | Telemetry recorded server-side alongside the feedback.<br/>Always present.<br/>    |
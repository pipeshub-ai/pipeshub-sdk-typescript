# UpdateMessageFeedbackResponse

Feedback submitted successfully.

## Example Usage

```typescript
import { UpdateMessageFeedbackResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateMessageFeedbackResponse = {
  conversationId: "<value>",
  messageId: "<value>",
  feedback: {
    feedbackProvider: "<value>",
    timestamp: 759,
    metrics: {
      timeToFeedback: 4696.14,
    },
  },
  meta: {
    requestId: "<id>",
    timestamp: new Date("2024-11-16T11:26:25.204Z"),
    duration: 147861,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Conversation the feedback was attached to.                                                                                                                      |
| `messageId`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Message the feedback was attached to.                                                                                                                           |
| `feedback`                                                                                                                                                      | [operations.Feedback](../../models/operations/feedback.md)                                                                                                      | :heavy_check_mark:                                                                                                                                              | The feedback entry just appended to the message. Echoes<br/>the fields supplied in the request plus server-stamped<br/>`feedbackProvider`, `timestamp`, and `metrics`.<br/> |
| `meta`                                                                                                                                                          | [operations.UpdateMessageFeedbackMeta](../../models/operations/update-message-feedback-meta.md)                                                                 | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
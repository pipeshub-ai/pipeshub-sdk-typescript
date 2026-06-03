# MessageFeedbackUpdateResponse

Gateway response after appending feedback to a bot-response message.


## Example Usage

```typescript
import { MessageFeedbackUpdateResponse } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackUpdateResponse = {
  conversationId: "<value>",
  messageId: "<value>",
  feedback: {
    feedbackProvider: "<value>",
    timestamp: 675041,
    metrics: {
      timeToFeedback: 9535.75,
    },
  },
  meta: {
    requestId: "<id>",
    timestamp: new Date("2025-02-23T07:35:12.940Z"),
    duration: 977586,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Conversation the feedback was attached to.                                                                                                                      |
| `messageId`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Message the feedback was attached to.                                                                                                                           |
| `feedback`                                                                                                                                                      | [models.MessageFeedbackAppendEntry](../models/message-feedback-append-entry.md)                                                                                 | :heavy_check_mark:                                                                                                                                              | The feedback entry just appended to the message. Echoes the fields<br/>supplied in the request plus server-stamped `feedbackProvider`,<br/>`timestamp`, and `metrics`.<br/> |
| `meta`                                                                                                                                                          | [models.Meta](../models/meta.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
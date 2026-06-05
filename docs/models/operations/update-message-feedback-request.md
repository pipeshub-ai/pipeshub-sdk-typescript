# UpdateMessageFeedbackRequest

## Example Usage

```typescript
import { UpdateMessageFeedbackRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateMessageFeedbackRequest = {
  conversationId: "<value>",
  messageId: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `conversationId`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | Unique conversation identifier.                                                        |
| `messageId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Identifier of the bot-response message being rated.                                    |
| `body`                                                                                 | [models.MessageFeedbackSubmitRequest](../../models/message-feedback-submit-request.md) | :heavy_check_mark:                                                                     | Request payload                                                                        |
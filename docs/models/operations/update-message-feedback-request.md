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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conversationId`                                           | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `messageId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `body`                                                     | [models.MessageFeedback](../../models/message-feedback.md) | :heavy_check_mark:                                         | Request payload                                            |
# UpdateAgentConversationMessageFeedbackRequest

## Example Usage

```typescript
import { UpdateAgentConversationMessageFeedbackRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentConversationMessageFeedbackRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  messageId: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `agentKey`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | Unique agent identifier (gateway Zod requires non-empty string).                       |
| `conversationId`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | Unique conversation identifier.                                                        |
| `messageId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Identifier of the bot-response message being rated.                                    |
| `body`                                                                                 | [models.MessageFeedbackSubmitRequest](../../models/message-feedback-submit-request.md) | :heavy_check_mark:                                                                     | Feedback payload for the agent message.                                                |
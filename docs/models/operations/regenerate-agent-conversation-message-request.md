# RegenerateAgentConversationMessageRequest

## Example Usage

```typescript
import { RegenerateAgentConversationMessageRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RegenerateAgentConversationMessageRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | Stable key identifying the agent that owns this conversation.                                          |
| `conversationId`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of the agent conversation containing the target message.                                            |
| `messageId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of the bot-response message to regenerate.                                                          |
| `body`                                                                                                 | [models.RegenerateRequest](../../models/regenerate-request.md)                                         | :heavy_minus_sign:                                                                                     | Optional regeneration payload. All fields are optional and are<br/>validated against `RegenerateRequest`.<br/> |
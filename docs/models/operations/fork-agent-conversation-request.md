# ForkAgentConversationRequest

## Example Usage

```typescript
import { ForkAgentConversationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ForkAgentConversationRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `agentKey`                                       | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `conversationId`                                 | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `messageId`                                      | *string*                                         | :heavy_check_mark:                               | Inclusive last message to copy into the new chat |
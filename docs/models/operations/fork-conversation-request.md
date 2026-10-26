# ForkConversationRequest

## Example Usage

```typescript
import { ForkConversationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ForkConversationRequest = {
  conversationId: "<value>",
  messageId: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `conversationId`                                 | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `messageId`                                      | *string*                                         | :heavy_check_mark:                               | Inclusive last message to copy into the new chat |
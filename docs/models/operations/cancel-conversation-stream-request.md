# CancelConversationStreamRequest

## Example Usage

```typescript
import { CancelConversationStreamRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CancelConversationStreamRequest = {
  conversationId: "<value>",
  body: {
    runId: "58a4f0b1-5095-44a2-a9f5-69156a8c6a3c",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `body`                                                                                                               | [operations.CancelConversationStreamRequestBody](../../models/operations/cancel-conversation-stream-request-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
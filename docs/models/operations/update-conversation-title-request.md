# UpdateConversationTitleRequest

## Example Usage

```typescript
import { UpdateConversationTitleRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConversationTitleRequest = {
  conversationId: "<value>",
  body: {
    title: "Q4 Sales Analysis Discussion",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `conversationId`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `body`                                                                                                             | [operations.UpdateConversationTitleRequestBody](../../models/operations/update-conversation-title-request-body.md) | :heavy_check_mark:                                                                                                 | Request payload                                                                                                    |
# ShareConversationRequest

## Example Usage

```typescript
import { ShareConversationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ShareConversationRequest = {
  conversationId: "<value>",
  body: {
    userIds: [
      "507f1f77bcf86cd799439011",
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `conversationId`                                     | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `body`                                               | [models.ShareRequest](../../models/share-request.md) | :heavy_check_mark:                                   | Request payload                                      |
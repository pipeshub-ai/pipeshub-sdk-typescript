# UpdateConversationTitleResponse

Title updated successfully

## Example Usage

```typescript
import { UpdateConversationTitleResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConversationTitleResponse = {
  conversation: {
    id: "<value>",
    userId: "<value>",
    orgId: "<value>",
    initiator: "<value>",
    messages: [
      {
        id: "<value>",
        messageType: "bot_response",
        content: "<value>",
        citations: [],
        followUpQuestions: [],
        feedback: [],
        referenceData: [
          {},
        ],
        createdAt: new Date("2024-08-12T16:14:38.259Z"),
        updatedAt: new Date("2024-05-25T05:14:26.248Z"),
      },
    ],
    sharedWith: [],
    conversationErrors: [
      {
        id: "<value>",
        message: "<value>",
        timestamp: new Date("2025-05-07T09:22:52.013Z"),
      },
    ],
    lastActivityAt: 879495,
    createdAt: new Date("2026-05-20T13:07:36.389Z"),
    updatedAt: new Date("2025-08-24T16:56:32.828Z"),
    v: 54157,
  },
  meta: {
    requestId: "<id>",
    timestamp: new Date("2026-12-05T05:20:19.434Z"),
    duration: 275294,
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `conversation`                                                                                                      | [operations.UpdateConversationTitleConversation](../../models/operations/update-conversation-title-conversation.md) | :heavy_check_mark:                                                                                                  | The full conversation document after the title update,<br/>returned as stored in MongoDB.<br/>                      |
| `meta`                                                                                                              | [operations.UpdateConversationTitleMeta](../../models/operations/update-conversation-title-meta.md)                 | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
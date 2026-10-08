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
    sharedWith: [
      {
        userId: "<value>",
      },
    ],
    conversationErrors: [],
    lastActivityAt: 856140,
    createdAt: new Date("2026-08-21T22:13:40.117Z"),
    updatedAt: new Date("2026-05-20T13:07:36.389Z"),
    v: 549002,
  },
  meta: {
    requestId: "<id>",
    timestamp: new Date("2024-02-29T08:33:06.823Z"),
    duration: 975568,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversation`                                                                                                                                                                                                                                                                          | [operations.UpdateConversationTitleConversation](../../models/operations/update-conversation-title-conversation.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                      | The conversation document after the title update, as<br/>stored in the `chatSessions` collection.<br/><br/>Carries no `messages`: they live in `chatSessionMessages`<br/>(see `chat.session.schema.ts`) and this route neither<br/>reads nor joins them. Fetch the conversation by id to<br/>get its messages.<br/> |
| `meta`                                                                                                                                                                                                                                                                                  | [operations.UpdateConversationTitleMeta](../../models/operations/update-conversation-title-meta.md)                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                     |
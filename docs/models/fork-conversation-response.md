# ForkConversationResponse

## Example Usage

```typescript
import { ForkConversationResponse } from "@pipeshub-ai/sdk/models";

let value: ForkConversationResponse = {
  id: "<value>",
  title: "<value>",
  forkedFrom: {
    conversationId: "<value>",
    messageId: "<value>",
  },
  messageCount: 472512,
  meta: {
    timestamp: new Date("2024-03-30T12:33:54.407Z"),
    duration: 961688,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | New conversation identifier                                                                                                                        |
| `title`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Title of the forked conversation                                                                                                                   |
| `projectId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Project the fork is linked to. Present only when the source conversation<br/>belonged to a project that the caller can still view; otherwise omitted.<br/> |
| `forkedFrom`                                                                                                                                       | [models.ForkedFrom](../models/forked-from.md)                                                                                                      | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `messageCount`                                                                                                                                     | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Number of messages copied into the new conversation                                                                                                |
| `meta`                                                                                                                                             | [models.ForkConversationResponseMeta](../models/fork-conversation-response-meta.md)                                                                | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
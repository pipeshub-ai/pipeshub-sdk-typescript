# UploadAgentConversationChatAttachmentsRequest

## Example Usage

```typescript
import { UploadAgentConversationChatAttachmentsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UploadAgentConversationChatAttachmentsRequest = {
  agentKey: "<value>",
  body: {
    files: [],
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `body`                                                                                                                                             | [operations.UploadAgentConversationChatAttachmentsRequestBody](../../models/operations/upload-agent-conversation-chat-attachments-request-body.md) | :heavy_check_mark:                                                                                                                                 | Multipart form with attachment files and optional `conversationId`.                                                                                |
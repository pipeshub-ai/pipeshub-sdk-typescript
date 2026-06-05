# ChatAttachmentUploadResponse

Success envelope returned by `POST /conversations/attachments/upload`
and `POST /agents/{agentKey}/conversations/attachments/upload`.


## Example Usage

```typescript
import { ChatAttachmentUploadResponse } from "@pipeshub-ai/sdk/models";

let value: ChatAttachmentUploadResponse = {
  conversationId: "<id>",
  attachments: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Existing conversation id echoed from the request when the upload is tied to a thread; otherwise `null`.<br/> |
| `attachments`                                                                                            | [models.ChatAttachmentUploadRef](../models/chat-attachment-upload-ref.md)[]                              | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
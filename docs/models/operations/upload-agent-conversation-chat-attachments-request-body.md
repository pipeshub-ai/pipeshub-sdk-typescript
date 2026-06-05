# UploadAgentConversationChatAttachmentsRequestBody

Multipart form with attachment files and optional `conversationId`.

## Example Usage

```typescript
import { UploadAgentConversationChatAttachmentsRequestBody } from "@pipeshub-ai/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: UploadAgentConversationChatAttachmentsRequestBody = {
  files: [
    await openAsBlob("example.file"),
  ],
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                                | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Optional existing agent conversation id. Empty string is treated as unset; any non-empty value must be a 24-character ObjectId.<br/>            |
| `files`                                                                                                                                         | [operations.FileT](../../models/operations/file-t.md)[]                                                                                         | :heavy_check_mark:                                                                                                                              | One or more files; field name must be `files`. Accepted MIME types: `application/pdf`, `image/jpeg`, `image/jpg`, `image/png`. Max 5 MiB each.<br/> |
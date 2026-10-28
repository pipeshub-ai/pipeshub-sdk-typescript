# ChatAttachmentRef

Reference to an attachment produced by `POST /conversations/attachments/upload`
(or the equivalent agent route). Include in create/stream/message bodies
so the turn is sent with uploaded files.


## Example Usage

```typescript
import { ChatAttachmentRef } from "@pipeshub-ai/sdk/models";

let value: ChatAttachmentRef = {
  recordId: "<id>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `recordId`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Attachment record id returned from the upload endpoint.                                                                                    |
| `recordName`                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Original display name of the file when known.                                                                                              |
| `mimeType`                                                                                                                                 | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | MIME type of the uploaded file.                                                                                                            |
| `extension`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | File extension (e.g. `pdf`).                                                                                                               |
| `virtualRecordId`                                                                                                                          | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Optional synthetic record id used by the graph layer.                                                                                      |
| `source`                                                                                                                                   | [models.ChatAttachmentRefSource](../models/chat-attachment-ref-source.md)                                                                  | :heavy_minus_sign:                                                                                                                         | How the attachment was produced: a file upload, or text pasted into the<br/>composer and sent as a file. Stored on the saved message as sent.<br/> |
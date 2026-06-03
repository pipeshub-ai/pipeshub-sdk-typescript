# ChatAttachmentUploadRef

Concrete attachment metadata returned by `POST /conversations/attachments/upload`
(or the equivalent agent route).


## Example Usage

```typescript
import { ChatAttachmentUploadRef } from "@pipeshub-ai/sdk/models";

let value: ChatAttachmentUploadRef = {
  recordId: "<id>",
  recordName: "<value>",
  mimeType: "<value>",
  extension: "wav",
  virtualRecordId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `recordId`                                                    | *string*                                                      | :heavy_check_mark:                                            | Server-assigned attachment record id.                         |
| `recordName`                                                  | *string*                                                      | :heavy_check_mark:                                            | Original filename stored for the attachment.                  |
| `mimeType`                                                    | *string*                                                      | :heavy_check_mark:                                            | MIME type of the uploaded file.                               |
| `extension`                                                   | *string*                                                      | :heavy_check_mark:                                            | File extension derived by the backend.                        |
| `virtualRecordId`                                             | *string*                                                      | :heavy_check_mark:                                            | Synthetic record id used by the graph layer.                  |
| `ocrMode`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Optional backend-reported processing mode for the attachment. |
# UpdateRecordResponseSchema

Response returned by PUT /knowledgeBase/record/{recordId}.

## Example Usage

```typescript
import { UpdateRecordResponseSchema } from "@pipeshub-ai/sdk/models";

let value: UpdateRecordResponseSchema = {
  message: "<value>",
  record: {
    deleteSource: "USER",
  },
  fileUploaded: true,
  meta: {
    timestamp: new Date("2024-07-17T17:05:40.436Z"),
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | `Record updated successfully` for a rename, `Record updated with new file version`<br/>when a replacement file was sent.<br/> |
| `record`                                                                                                              | [models.UpdateRecordResponseSchemaRecord](../models/update-record-response-schema-record.md)                          | :heavy_check_mark:                                                                                                    | The record's graph document as stored after the update.                                                               |
| `fileUploaded`                                                                                                        | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether the request carried a replacement file.                                                                       |
| `meta`                                                                                                                | [models.UpdateRecordResponseSchemaMeta](../models/update-record-response-schema-meta.md)                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
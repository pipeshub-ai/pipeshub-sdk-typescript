# UploadRecordsRequest

## Example Usage

```typescript
import { UploadRecordsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UploadRecordsRequest = {
  kbId: "<id>",
  body: {
    files: [],
    filesMetadata:
      "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `kbId`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Knowledge base ID                                                                             |
| `folderId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Target folder ID. Omit to upload to the KB root.                                              |
| `body`                                                                                        | [operations.UploadRecordsRequestBody](../../models/operations/upload-records-request-body.md) | :heavy_check_mark:                                                                            | Request payload                                                                               |
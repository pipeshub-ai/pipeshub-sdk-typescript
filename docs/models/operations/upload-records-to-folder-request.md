# UploadRecordsToFolderRequest

## Example Usage

```typescript
import { UploadRecordsToFolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UploadRecordsToFolderRequest = {
  kbId: "<id>",
  folderId: "<id>",
  body: {
    files: [],
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `folderId`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Target folder ID                                                                                                |
| `body`                                                                                                          | [operations.UploadRecordsToFolderRequestBody](../../models/operations/upload-records-to-folder-request-body.md) | :heavy_check_mark:                                                                                              | Request payload                                                                                                 |
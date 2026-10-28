# UploadRecordsRequest

## Example Usage

```typescript
import { UploadRecordsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UploadRecordsRequest = {
  kbId: "72985682-eb60-46f5-bf1b-018ad1c05d5d",
  body: {
    files: [],
    filesMetadata: [
      {
        filePath: "docs/report.pdf",
        lastModified: 1705314600000,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Knowledge base ID (UUID)                                                                                         |
| `folderId`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Target folder ID. Omit to upload to the KB root. A folder that is not in this<br/>knowledge base is answered `404`.<br/> |
| `body`                                                                                                           | [operations.UploadRecordsRequestBody](../../models/operations/upload-records-request-body.md)                    | :heavy_check_mark:                                                                                               | Request payload                                                                                                  |
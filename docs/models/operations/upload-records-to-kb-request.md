# UploadRecordsToKBRequest

## Example Usage

```typescript
import { UploadRecordsToKBRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UploadRecordsToKBRequest = {
  kbId: "<id>",
  body: {
    files: [],
    filesMetadata:
      "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Knowledge base ID                                                                                       |
| `body`                                                                                                  | [operations.UploadRecordsToKBRequestBody](../../models/operations/upload-records-to-kb-request-body.md) | :heavy_check_mark:                                                                                      | Request payload                                                                                         |
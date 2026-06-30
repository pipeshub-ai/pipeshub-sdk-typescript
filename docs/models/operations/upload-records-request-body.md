# UploadRecordsRequestBody

Request payload

## Example Usage

```typescript
import { UploadRecordsRequestBody } from "@pipeshub-ai/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: UploadRecordsRequestBody = {
  files: [
    await openAsBlob("example.file"),
  ],
  filesMetadata:
    "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `files`                                                                          | [operations.UploadRecordsFile](../../models/operations/upload-records-file.md)[] | :heavy_check_mark:                                                               | Files to upload (max 1000)                                                       |                                                                                  |
| `filesMetadata`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | JSON array with file_path and last_modified for each file                        | [{"file_path":"/docs/report.pdf","last_modified":"2024-01-15T10:30:00Z"}]        |
| `isVersioned`                                                                    | *boolean*                                                                        | :heavy_minus_sign:                                                               | Enable version tracking                                                          |                                                                                  |
| `recordType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Type of records to create                                                        |                                                                                  |
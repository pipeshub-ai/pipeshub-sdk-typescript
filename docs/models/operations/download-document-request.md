# DownloadDocumentRequest

## Example Usage

```typescript
import { DownloadDocumentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: DownloadDocumentRequest = {
  documentId: "507f1f77bcf86cd799439011",
  version: 2,
  expirationTimeInSeconds: 7200,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `documentId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Document ID (24-character MongoDB ObjectId)                               | 507f1f77bcf86cd799439011                                                  |
| `version`                                                                 | *number*                                                                  | :heavy_minus_sign:                                                        | Version number to download (0-indexed). Must be less than total versions. | 2                                                                         |
| `expirationTimeInSeconds`                                                 | *number*                                                                  | :heavy_minus_sign:                                                        | Signed URL validity duration in seconds                                   | 7200                                                                      |
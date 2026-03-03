# DownloadDocumentResponseBody

Download URL generated or file stream

## Example Usage

```typescript
import { DownloadDocumentResponseBody } from "@pipeshub-ai/sdk/models/operations";

let value: DownloadDocumentResponseBody = {
  success: true,
  signedUrl:
    "https://bucket.s3.amazonaws.com/docs/file.pdf?X-Amz-Signature=...",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               | true                                                              |
| `signedUrl`                                                       | *string*                                                          | :heavy_minus_sign:                                                | Presigned URL for download (S3/Azure only)                        | https://bucket.s3.amazonaws.com/docs/file.pdf?X-Amz-Signature=... |
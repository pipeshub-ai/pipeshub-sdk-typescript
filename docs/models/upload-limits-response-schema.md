# UploadLimitsResponseSchema

Upload constraints returned by GET /knowledgeBase/limits.

## Example Usage

```typescript
import { UploadLimitsResponseSchema } from "@pipeshub-ai/sdk/models";

let value: UploadLimitsResponseSchema = {
  maxFilesPerRequest: 1000,
  maxFileSizeBytes: 31457280,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `maxFilesPerRequest`                                                         | *number*                                                                     | :heavy_check_mark:                                                           | Maximum number of files per upload request                                   | 1000                                                                         |
| `maxFileSizeBytes`                                                           | *number*                                                                     | :heavy_check_mark:                                                           | Maximum file size in bytes (default 30MB when platform settings unavailable) | 31457280                                                                     |
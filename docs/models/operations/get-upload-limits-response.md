# GetUploadLimitsResponse

Upload limits retrieved

## Example Usage

```typescript
import { GetUploadLimitsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetUploadLimitsResponse = {
  maxFilesPerRequest: 1000,
  maxFileSizeBytes: 31457280,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `maxFilesPerRequest`                       | *number*                                   | :heavy_minus_sign:                         | Maximum number of files per upload request | 1000                                       |
| `maxFileSizeBytes`                         | *number*                                   | :heavy_minus_sign:                         | Maximum file size in bytes (default 30MB)  | 31457280                                   |
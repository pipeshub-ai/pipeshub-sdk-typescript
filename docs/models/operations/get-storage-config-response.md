# GetStorageConfigResponse

Storage configuration retrieved

## Example Usage

```typescript
import { GetStorageConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetStorageConfigResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `storageType`                                                     | [operations.StorageType](../../models/operations/storage-type.md) | :heavy_minus_sign:                                                | Currently configured storage type                                 |
| `mountName`                                                       | *string*                                                          | :heavy_minus_sign:                                                | Mount point name (Local)                                          |
| `baseUrl`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Base URL for files (Local)                                        |
| `accessKeyId`                                                     | *string*                                                          | :heavy_minus_sign:                                                | AWS access key ID (S3)                                            |
| `secretAccessKey`                                                 | *string*                                                          | :heavy_minus_sign:                                                | AWS secret access key (S3)                                        |
| `region`                                                          | *string*                                                          | :heavy_minus_sign:                                                | AWS region (S3)                                                   |
| `bucketName`                                                      | *string*                                                          | :heavy_minus_sign:                                                | S3 bucket name (S3)                                               |
| `containerName`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Container name (Azure Blob)                                       |
| `accountName`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Storage account name (Azure Blob)                                 |
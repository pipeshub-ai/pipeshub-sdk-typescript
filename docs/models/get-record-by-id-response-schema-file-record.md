# GetRecordByIdResponseSchemaFileRecord

## Example Usage

```typescript
import { GetRecordByIdResponseSchemaFileRecord } from "@pipeshub-ai/sdk/models";

let value: GetRecordByIdResponseSchemaFileRecord = {
  id: "<id>",
  orgId: "<id>",
  name: "<value>",
  extension: "gif",
  isFile: false,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `orgId`               | *string*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `extension`           | *string*              | :heavy_check_mark:    | N/A                   |
| `etag`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `ctag`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `md5Checksum`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `quickXorHash`        | *string*              | :heavy_minus_sign:    | N/A                   |
| `crc32Hash`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `sha1Hash`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `sha256Hash`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `mimeType`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `sizeInBytes`         | *number*              | :heavy_minus_sign:    | N/A                   |
| `isFile`              | *boolean*             | :heavy_check_mark:    | N/A                   |
| `webUrl`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `path`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `localFsRelativePath` | *string*              | :heavy_minus_sign:    | N/A                   |
# FileRecord

File-specific metadata (present when recordType is FILE)

## Example Usage

```typescript
import { FileRecord } from "pipeshub/models";

let value: FileRecord = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `extension`        | *string*           | :heavy_minus_sign: | N/A                |
| `mimeType`         | *string*           | :heavy_minus_sign: | N/A                |
| `sizeInBytes`      | *number*           | :heavy_minus_sign: | N/A                |
| `webUrl`           | *string*           | :heavy_minus_sign: | N/A                |
| `path`             | *string*           | :heavy_minus_sign: | N/A                |
| `isFile`           | *boolean*          | :heavy_minus_sign: | N/A                |
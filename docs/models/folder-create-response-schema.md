# FolderCreateResponseSchema

Response returned when a folder is created (root or nested subfolder)

## Example Usage

```typescript
import { FolderCreateResponseSchema } from "@pipeshub-ai/sdk/models";

let value: FolderCreateResponseSchema = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | Unique folder identifier |
| `name`                   | *string*                 | :heavy_check_mark:       | Name of the folder       |
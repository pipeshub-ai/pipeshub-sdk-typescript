# GetKnowledgeBaseByIdFolder

## Example Usage

```typescript
import { GetKnowledgeBaseByIdFolder } from "@pipeshub-ai/sdk/models";

let value: GetKnowledgeBaseByIdFolder = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | Folder ID                          |
| `name`                             | *string*                           | :heavy_check_mark:                 | Folder name                        |
| `createdAtTimestamp`               | *number*                           | :heavy_minus_sign:                 | Creation timestamp in milliseconds |
# KnowledgeBase

## Example Usage

```typescript
import { KnowledgeBase } from "pipeshub/models";

let value: KnowledgeBase = {
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_minus_sign:                                 | Unique knowledge base identifier                   |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the knowledge base                         |
| `connectorId`                                      | *string*                                           | :heavy_minus_sign:                                 | Associated connector ID (null for manual KBs)      |
| `createdAtTimestamp`                               | *number*                                           | :heavy_minus_sign:                                 | Creation timestamp in milliseconds                 |
| `updatedAtTimestamp`                               | *number*                                           | :heavy_minus_sign:                                 | Last update timestamp in milliseconds              |
| `createdBy`                                        | *string*                                           | :heavy_minus_sign:                                 | User ID of the creator                             |
| `userRole`                                         | [models.UserRoleEnum](../models/user-role-enum.md) | :heavy_minus_sign:                                 | User's role in this knowledge base                 |
| `folders`                                          | [models.Folder](../models/folder.md)[]             | :heavy_minus_sign:                                 | Folders in this knowledge base                     |
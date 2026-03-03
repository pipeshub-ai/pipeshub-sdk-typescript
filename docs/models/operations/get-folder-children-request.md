# GetFolderChildrenRequest

## Example Usage

```typescript
import { GetFolderChildrenRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetFolderChildrenRequest = {
  kbId: "<id>",
  folderId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Knowledge base ID                                                                                  |
| `folderId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Folder ID                                                                                          |
| `page`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `search`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sortBy`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sortOrder`                                                                                        | [operations.GetFolderChildrenSortOrder](../../models/operations/get-folder-children-sort-order.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
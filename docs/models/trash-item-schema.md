# TrashItemSchema

What one delete removed (a folder with its contents, or every item of a multi-select); restoring it brings back all of it.

## Example Usage

```typescript
import { TrashItemSchema } from "@pipeshub-ai/sdk/models";

let value: TrashItemSchema = {
  id: "<id>",
  isFolder: false,
  parentInTrash: false,
  itemCount: 301978,
  deletedAtTimestamp: 189730,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Record ID to restore                                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `recordType`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isFolder`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | A folder, deleted with everything in it                                                       |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sizeInBytes`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The folder it was in; null at the collection's top level                                      |
| `parentName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `parentInTrash`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | That folder is in the trash too; restore it first                                             |
| `itemCount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Records this delete removed, all of which a restore brings back                               |
| `rootCount`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Items selected in the delete; more than one for a multi-select delete, which is one item here |
| `otherRootNames`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Names of up to three of the other items selected with this one                                |
| `deletedAtTimestamp`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedBy`                                                                                   | [models.DeletedBy](../models/deleted-by.md)                                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `removableAfterTimestamp`                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | From when the scheduled cleanup may remove it for good; null when unknown                     |
# Folder

## Example Usage

```typescript
import { Folder } from "@pipeshub-ai/sdk/models";

let value: Folder = {
  name: "<value>",
  kbId: "<id>",
  orgId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *string*                      | :heavy_minus_sign:            | Unique folder identifier      |
| `name`                        | *string*                      | :heavy_check_mark:            | Name of the folder            |
| `parentId`                    | *string*                      | :heavy_minus_sign:            | Parent folder or KB ID        |
| `kbId`                        | *string*                      | :heavy_check_mark:            | Knowledge base ID             |
| `orgId`                       | *string*                      | :heavy_check_mark:            | Organization ID               |
| `createdAtTimestamp`          | *number*                      | :heavy_minus_sign:            | Creation timestamp            |
| `updatedAtTimestamp`          | *number*                      | :heavy_minus_sign:            | Last update timestamp         |
| `isDeleted`                   | *boolean*                     | :heavy_minus_sign:            | Whether the folder is deleted |
# ListTrashResponseSchema

Response returned by GET /knowledgeBase/{kbId}/trash.

## Example Usage

```typescript
import { ListTrashResponseSchema } from "@pipeshub-ai/sdk/models";

let value: ListTrashResponseSchema = {
  success: true,
  items: [
    {
      id: "<id>",
      isFolder: true,
      parentInTrash: false,
      itemCount: 512980,
      deletedAtTimestamp: 922676,
    },
  ],
  pagination: {
    page: 894451,
    limit: 143895,
    totalCount: 263523,
    totalPages: 759137,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `success`                                                                                      | *true*                                                                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `items`                                                                                        | [models.TrashItemSchema](../models/trash-item-schema.md)[]                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [models.ListTrashResponseSchemaPagination](../models/list-trash-response-schema-pagination.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `retention`                                                                                    | [models.Retention](../models/retention.md)                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
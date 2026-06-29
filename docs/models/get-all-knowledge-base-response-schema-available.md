# GetAllKnowledgeBaseResponseSchemaAvailable

## Example Usage

```typescript
import { GetAllKnowledgeBaseResponseSchemaAvailable } from "@pipeshub-ai/sdk/models";

let value: GetAllKnowledgeBaseResponseSchemaAvailable = {
  permissions: [],
  sortFields: [],
  sortOrders: [],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `permissions`                                                     | [models.AvailablePermission](../models/available-permission.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `sortFields`                                                      | [models.SortField](../models/sort-field.md)[]                     | :heavy_check_mark:                                                | N/A                                                               |
| `sortOrders`                                                      | [models.AvailableSortOrder](../models/available-sort-order.md)[]  | :heavy_check_mark:                                                | N/A                                                               |
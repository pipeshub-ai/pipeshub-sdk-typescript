# GetAllKnowledgeBaseResponseSchemaApplied

Active filters. Empty `{}` when defaults. Keys use snake_case for sort
fields (backend convention in kb_service.py).


## Example Usage

```typescript
import { GetAllKnowledgeBaseResponseSchemaApplied } from "@pipeshub-ai/sdk/models";

let value: GetAllKnowledgeBaseResponseSchemaApplied = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `search`                                                      | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `permissions`                                                 | [models.AppliedPermission](../models/applied-permission.md)[] | :heavy_minus_sign:                                            | N/A                                                           |
| `sortBy`                                                      | [models.SortBy](../models/sort-by.md)                         | :heavy_minus_sign:                                            | N/A                                                           |
| `sortOrder`                                                   | [models.AppliedSortOrder](../models/applied-sort-order.md)    | :heavy_minus_sign:                                            | N/A                                                           |
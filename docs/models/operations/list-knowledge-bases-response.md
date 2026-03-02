# ListKnowledgeBasesResponse

Successful operation

## Example Usage

```typescript
import { ListKnowledgeBasesResponse } from "pipeshub/models/operations";

let value: ListKnowledgeBasesResponse = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `knowledgeBases`                                                                                      | [models.KnowledgeBase](../../models/knowledge-base.md)[]                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `pagination`                                                                                          | [operations.ListKnowledgeBasesPagination](../../models/operations/list-knowledge-bases-pagination.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `filters`                                                                                             | [operations.ListKnowledgeBasesFilters](../../models/operations/list-knowledge-bases-filters.md)       | :heavy_minus_sign:                                                                                    | Applied and available filters                                                                         |
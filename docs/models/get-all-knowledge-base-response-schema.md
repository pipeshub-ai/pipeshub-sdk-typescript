# GetAllKnowledgeBaseResponseSchema

Response returned by GET /knowledgeBase (listKnowledgeBases).

## Example Usage

```typescript
import { GetAllKnowledgeBaseResponseSchema } from "@pipeshub-ai/sdk/models";

let value: GetAllKnowledgeBaseResponseSchema = {
  knowledgeBases: [],
  pagination: {
    page: 679453,
    limit: 333802,
    totalCount: 203623,
    totalPages: 424401,
    hasNext: false,
    hasPrev: true,
  },
  filters: {
    applied: {},
    available: {
      permissions: [
        "WRITER",
      ],
      sortFields: [
        "userRole",
      ],
      sortOrders: [
        "desc",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `knowledgeBases`                                                                                                              | [models.GetAllKnowledgeBaseResponseSchemaKnowledgeBase](../models/get-all-knowledge-base-response-schema-knowledge-base.md)[] | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `pagination`                                                                                                                  | [models.GetAllKnowledgeBaseResponseSchemaPagination](../models/get-all-knowledge-base-response-schema-pagination.md)          | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `filters`                                                                                                                     | [models.GetAllKnowledgeBaseResponseSchemaFilters](../models/get-all-knowledge-base-response-schema-filters.md)                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
# GetAllKnowledgeBaseResponseSchemaFilters

## Example Usage

```typescript
import { GetAllKnowledgeBaseResponseSchemaFilters } from "@pipeshub-ai/sdk/models";

let value: GetAllKnowledgeBaseResponseSchemaFilters = {
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
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `applied`                                                                                                             | [models.GetAllKnowledgeBaseResponseSchemaApplied](../models/get-all-knowledge-base-response-schema-applied.md)        | :heavy_check_mark:                                                                                                    | Active filters. Empty `{}` when defaults. Keys use snake_case for sort<br/>fields (backend convention in kb_service.py).<br/> |
| `available`                                                                                                           | [models.GetAllKnowledgeBaseResponseSchemaAvailable](../models/get-all-knowledge-base-response-schema-available.md)    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
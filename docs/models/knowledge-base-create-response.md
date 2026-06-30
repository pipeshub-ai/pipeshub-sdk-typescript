# KnowledgeBaseCreateResponse

Response returned when a knowledge base is created

## Example Usage

```typescript
import { KnowledgeBaseCreateResponse } from "@pipeshub-ai/sdk/models";

let value: KnowledgeBaseCreateResponse = {
  id: "<id>",
  name: "<value>",
  createdAtTimestamp: 803996,
  updatedAtTimestamp: 268029,
  userRole: "WRITER",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Knowledge base ID                                                                                   |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | Knowledge base name                                                                                 |
| `createdAtTimestamp`                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | Creation timestamp in milliseconds                                                                  |
| `updatedAtTimestamp`                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | Last update timestamp in milliseconds                                                               |
| `userRole`                                                                                          | [models.KnowledgeBaseCreateResponseUserRole](../models/knowledge-base-create-response-user-role.md) | :heavy_check_mark:                                                                                  | User's role in this knowledge base                                                                  |
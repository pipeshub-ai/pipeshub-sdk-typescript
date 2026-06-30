# GetAllKnowledgeBaseResponseSchemaKnowledgeBase

## Example Usage

```typescript
import { GetAllKnowledgeBaseResponseSchemaKnowledgeBase } from "@pipeshub-ai/sdk/models";

let value: GetAllKnowledgeBaseResponseSchemaKnowledgeBase = {
  id: "<id>",
  name: "<value>",
  connectorId: "<id>",
  createdAtTimestamp: 955539,
  updatedAtTimestamp: 278463,
  createdBy: "<value>",
  userRole: "WRITER",
  folders: [],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `connectorId`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `createdAtTimestamp`                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `updatedAtTimestamp`                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `createdBy`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `userRole`                                                                                                        | [models.GetAllKnowledgeBaseResponseSchemaUserRole](../models/get-all-knowledge-base-response-schema-user-role.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `folders`                                                                                                         | [models.GetAllKnowledgeBaseResponseSchemaFolder](../models/get-all-knowledge-base-response-schema-folder.md)[]    | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
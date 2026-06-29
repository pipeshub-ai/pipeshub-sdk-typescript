# GetKnowledgeBaseById

Response returned by GET /knowledgeBase/{kbId} (getKnowledgeBase).

## Example Usage

```typescript
import { GetKnowledgeBaseById } from "@pipeshub-ai/sdk/models";

let value: GetKnowledgeBaseById = {
  id: "<id>",
  name: "<value>",
  connectorId: "<id>",
  createdAtTimestamp: 678234,
  updatedAtTimestamp: 759871,
  createdBy: "<value>",
  userRole: "OWNER",
  folders: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Knowledge base ID                                                                      |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Knowledge base name                                                                    |
| `connectorId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Associated connector ID (null for manual KBs)                                          |
| `createdAtTimestamp`                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | Creation timestamp in milliseconds                                                     |
| `updatedAtTimestamp`                                                                   | *number*                                                                               | :heavy_check_mark:                                                                     | Last update timestamp in milliseconds                                                  |
| `createdBy`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | User ID of the creator                                                                 |
| `userRole`                                                                             | [models.GetKnowledgeBaseByIdUserRole](../models/get-knowledge-base-by-id-user-role.md) | :heavy_check_mark:                                                                     | User's role in this knowledge base                                                     |
| `folders`                                                                              | [models.GetKnowledgeBaseByIdFolder](../models/get-knowledge-base-by-id-folder.md)[]    | :heavy_check_mark:                                                                     | Root-level folders in this knowledge base                                              |
# UpdateKnowledgeBaseRequest

## Example Usage

```typescript
import { UpdateKnowledgeBaseRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateKnowledgeBaseRequest = {
  kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
  body: {
    kbName: "Updated Documentation Hub",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Knowledge base ID (UUID)                                                                                   | 8a095180-2989-4018-b448-70eb75fba1c7                                                                       |
| `body`                                                                                                     | [operations.UpdateKnowledgeBaseRequestBody](../../models/operations/update-knowledge-base-request-body.md) | :heavy_check_mark:                                                                                         | Fields to update. `kbName` is optional; an empty object is valid.                                          |                                                                                                            |
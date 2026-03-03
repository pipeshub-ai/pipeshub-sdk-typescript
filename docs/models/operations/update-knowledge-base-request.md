# UpdateKnowledgeBaseRequest

## Example Usage

```typescript
import { UpdateKnowledgeBaseRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateKnowledgeBaseRequest = {
  kbId: "<id>",
  body: {
    kbName: "Updated Documentation Hub",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Knowledge base ID                                                                                          |
| `body`                                                                                                     | [operations.UpdateKnowledgeBaseRequestBody](../../models/operations/update-knowledge-base-request-body.md) | :heavy_check_mark:                                                                                         | Request payload                                                                                            |
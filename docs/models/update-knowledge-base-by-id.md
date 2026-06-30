# UpdateKnowledgeBaseById

Response returned by PUT /knowledgeBase/{kbId} (updateKnowledgeBase).

## Example Usage

```typescript
import { UpdateKnowledgeBaseById } from "@pipeshub-ai/sdk/models";

let value: UpdateKnowledgeBaseById = {
  success: true,
  message: "Knowledge base updated successfully",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `success`                           | *boolean*                           | :heavy_check_mark:                  | N/A                                 | true                                |
| `message`                           | *string*                            | :heavy_check_mark:                  | N/A                                 | Knowledge base updated successfully |
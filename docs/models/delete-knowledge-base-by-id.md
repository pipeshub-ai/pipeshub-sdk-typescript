# DeleteKnowledgeBaseById

Response returned by DELETE /knowledgeBase/{kbId} (deleteKnowledgeBase).

## Example Usage

```typescript
import { DeleteKnowledgeBaseById } from "@pipeshub-ai/sdk/models";

let value: DeleteKnowledgeBaseById = {
  success: true,
  message: "Knowledge base deleted successfully",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `success`                           | *boolean*                           | :heavy_check_mark:                  | N/A                                 | true                                |
| `message`                           | *string*                            | :heavy_check_mark:                  | N/A                                 | Knowledge base deleted successfully |
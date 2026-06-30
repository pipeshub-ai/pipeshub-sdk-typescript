# KnowledgeBaseMoveRecordResponse

Response returned by PUT /knowledgeBase/{kbId}/record/{recordId}/move (moveRecord).

## Example Usage

```typescript
import { KnowledgeBaseMoveRecordResponse } from "@pipeshub-ai/sdk/models";

let value: KnowledgeBaseMoveRecordResponse = {
  success: true,
  message: "Record moved successfully",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `success`                 | *boolean*                 | :heavy_check_mark:        | N/A                       | true                      |
| `message`                 | *string*                  | :heavy_check_mark:        | N/A                       | Record moved successfully |
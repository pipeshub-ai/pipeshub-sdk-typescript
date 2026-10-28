# KnowledgeBaseMoveRecordRequestBody

Request body for PUT /knowledgeBase/{kbId}/record/{recordId}/move (moveRecord). Fields other than `newParentId` are dropped by the validator, not refused.

## Example Usage

```typescript
import { KnowledgeBaseMoveRecordRequestBody } from "@pipeshub-ai/sdk/models";

let value: KnowledgeBaseMoveRecordRequestBody = {
  newParentId: null,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `newParentId`                                                           | *string*                                                                | :heavy_check_mark:                                                      | Target folder ID, or null to move the record to the knowledge base root |
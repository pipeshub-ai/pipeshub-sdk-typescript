# MoveRecordRequest

## Example Usage

```typescript
import { MoveRecordRequest } from "@pipeshub-ai/sdk/models/operations";

let value: MoveRecordRequest = {
  kbId: "87495e6e-18c0-47db-89aa-7aa1dd2e1d1c",
  recordId: "<id>",
  body: {
    newParentId: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Knowledge base UUID                                                                                  |
| `recordId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Record identifier (file or folder)                                                                   |
| `body`                                                                                               | [models.KnowledgeBaseMoveRecordRequestBody](../../models/knowledge-base-move-record-request-body.md) | :heavy_check_mark:                                                                                   | Target location for the record                                                                       |
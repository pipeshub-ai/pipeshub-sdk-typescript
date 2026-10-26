# RestoreRecordResponseSchema

Response returned by POST /knowledgeBase/record/{recordId}/restore.

## Example Usage

```typescript
import { RestoreRecordResponseSchema } from "@pipeshub-ai/sdk/models";

let value: RestoreRecordResponseSchema = {
  success: true,
  message: "<value>",
  restoredRecords: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *true*                                                                 | :heavy_check_mark:                                                     | N/A                                                                    |
| `message`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `batchId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | The delete batch that was restored                                     |
| `restoredRecords`                                                      | [models.RestoredRecordSchema](../models/restored-record-schema.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `reindexPending`                                                       | *boolean*                                                              | :heavy_minus_sign:                                                     | Some restored files could not be queued for indexing                   |
| `reindexPendingRecordIds`                                              | *string*[]                                                             | :heavy_minus_sign:                                                     | Files to reindex by hand to make them searchable again                 |
| `reindexPendingReason`                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `renamePendingRecordIds`                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | Items restored under a name another item next to them has; rename them |
| `renamePendingReason`                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
# RestoreRecordsResultItemSchema

The outcome for one id of POST /knowledgeBase/records/restore. A restored item
carries the fields of RestoreRecordResponseSchema; a refused one carries `reason`,
and, when the refusal names other records, `blockedRecordId` plus the snake_case
fields below (`external_id`, `conflicting_record_id`, `conflicting_record_name`).


## Example Usage

```typescript
import { RestoreRecordsResultItemSchema } from "@pipeshub-ai/sdk/models";

let value: RestoreRecordsResultItemSchema = {
  recordId: "<id>",
  success: false,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `recordId`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `success`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `code`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | The status the single restore would have answered (200, 403, 404, 409)          |
| `reason`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Why it was not restored, and what to do next                                    |
| `message`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Present on success                                                              |
| `batchId`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | The delete batch that was restored; `null` when the record was not in the trash |
| `restoredRecords`                                                               | [models.RestoredRecordSchema](../models/restored-record-schema.md)[]            | :heavy_minus_sign:                                                              | Present on success; empty when the record was not in the trash                  |
| `reindexPending`                                                                | *boolean*                                                                       | :heavy_minus_sign:                                                              | Some restored files could not be queued for indexing                            |
| `reindexPendingRecordIds`                                                       | *string*[]                                                                      | :heavy_minus_sign:                                                              | Files to reindex by hand to make them searchable again                          |
| `reindexPendingReason`                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `renamePendingRecordIds`                                                        | *string*[]                                                                      | :heavy_minus_sign:                                                              | Items restored under a name another item next to them has; rename them          |
| `renamePendingReason`                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `blockedRecordId`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | The item a refusal is about                                                     |
| `externalId`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | The source item two of the restored items came from                             |
| `conflictingRecordId`                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | The live item that holds this item's place                                      |
| `conflictingRecordName`                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `missing`                                                                       | *string*[]                                                                      | :heavy_minus_sign:                                                              | Items of the batch that were no longer in the trash                             |
| `parentId`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | The folder still in the trash that must be restored first                       |
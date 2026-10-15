# RestoreRecordsResponseSchema

Response returned by POST /knowledgeBase/records/restore.

## Example Usage

```typescript
import { RestoreRecordsResponseSchema } from "@pipeshub-ai/sdk/models";

let value: RestoreRecordsResponseSchema = {
  success: false,
  restoredCount: 948384,
  failedCount: 18215,
  results: [],
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                                                   | *boolean*                                                                                                                                   | :heavy_check_mark:                                                                                                                          | True when every requested record was restored                                                                                               |
| `restoredCount`                                                                                                                             | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Records restored, counting those restored along with them                                                                                   |
| `failedCount`                                                                                                                               | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `results`                                                                                                                                   | [models.RestoreRecordsResultItemSchema](../models/restore-records-result-item-schema.md)[]                                                  | :heavy_check_mark:                                                                                                                          | One entry per requested id: `recordId`, `success`, `code`, and either the<br/>restore response fields or a `reason` that says what to do next.<br/> |
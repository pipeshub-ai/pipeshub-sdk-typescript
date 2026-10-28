# RestoreRecordsRequestBody

Request body for POST /knowledgeBase/records/restore. Fields other than `recordIds` are dropped by the validator, not refused.

## Example Usage

```typescript
import { RestoreRecordsRequestBody } from "@pipeshub-ai/sdk/models";

let value: RestoreRecordsRequestBody = {
  recordIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `recordIds`                                                                         | *string*[]                                                                          | :heavy_check_mark:                                                                  | Record ids to restore. An id listed more than once is restored, and answered, once. |
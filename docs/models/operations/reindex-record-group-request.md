# ReindexRecordGroupRequest

## Example Usage

```typescript
import { ReindexRecordGroupRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ReindexRecordGroupRequest = {
  recordGroupId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `recordGroupId`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | Record group ID (from a connector sync; not a knowledge base or folder id)                |
| `body`                                                                                    | [models.ReindexRecordGroupRequestBody](../../models/reindex-record-group-request-body.md) | :heavy_minus_sign:                                                                        | Request payload                                                                           |
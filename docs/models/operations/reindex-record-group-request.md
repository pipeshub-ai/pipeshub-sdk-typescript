# ReindexRecordGroupRequest

## Example Usage

```typescript
import { ReindexRecordGroupRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ReindexRecordGroupRequest = {
  recordGroupId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `recordGroupId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Folder ID or KB ID                                                                                       |
| `body`                                                                                                   | [operations.ReindexRecordGroupRequestBody](../../models/operations/reindex-record-group-request-body.md) | :heavy_minus_sign:                                                                                       | Request payload                                                                                          |
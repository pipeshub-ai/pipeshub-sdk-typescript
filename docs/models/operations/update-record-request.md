# UpdateRecordRequest

## Example Usage

```typescript
import { UpdateRecordRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateRecordRequest = {
  recordId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `recordId`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | Record ID                                                                                   |
| `body`                                                                                      | [operations.UpdateRecordRequestBody](../../models/operations/update-record-request-body.md) | :heavy_minus_sign:                                                                          | Request payload. Optional: without one nothing changes.                                     |
# UpdateRecordFormRequest

## Example Usage

```typescript
import { UpdateRecordFormRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateRecordFormRequest = {
  recordId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `recordId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Record ID                                                                                            |
| `body`                                                                                               | [operations.UpdateRecordFormRequestBody](../../models/operations/update-record-form-request-body.md) | :heavy_minus_sign:                                                                                   | Request payload. Optional: without one nothing changes.                                              |
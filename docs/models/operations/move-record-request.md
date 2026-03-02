# MoveRecordRequest

## Example Usage

```typescript
import { MoveRecordRequest } from "pipeshub/models/operations";

let value: MoveRecordRequest = {
  kbId: "87495e6e-18c0-47db-89aa-7aa1dd2e1d1c",
  recordId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `kbId`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `recordId`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `body`                                                                                  | [operations.MoveRecordRequestBody](../../models/operations/move-record-request-body.md) | :heavy_check_mark:                                                                      | Request payload                                                                         |
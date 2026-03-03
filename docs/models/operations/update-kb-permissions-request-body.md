# UpdateKBPermissionsRequestBody

Request body for Update permissions

## Example Usage

```typescript
import { UpdateKBPermissionsRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateKBPermissionsRequestBody = {
  role: "FILEORGANIZER",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `userIds`                                                                                   | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `teamIds`                                                                                   | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `role`                                                                                      | [operations.UpdateKBPermissionsRole](../../models/operations/update-kb-permissions-role.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
# CreateKBPermissionRequestBody

Request payload

## Example Usage

```typescript
import { CreateKBPermissionRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: CreateKBPermissionRequestBody = {
  role: "WRITER",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `userIds`                                                                                 | *string*[]                                                                                | :heavy_minus_sign:                                                                        | User IDs to grant permission                                                              |
| `teamIds`                                                                                 | *string*[]                                                                                | :heavy_minus_sign:                                                                        | Team IDs to grant permission                                                              |
| `role`                                                                                    | [operations.CreateKBPermissionRole](../../models/operations/create-kb-permission-role.md) | :heavy_check_mark:                                                                        | Permission role to grant                                                                  |
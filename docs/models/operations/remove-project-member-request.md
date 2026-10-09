# RemoveProjectMemberRequest

## Example Usage

```typescript
import { RemoveProjectMemberRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RemoveProjectMemberRequest = {
  projectId: "<value>",
  memberUserId: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `projectId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `memberUserId`                                                                        | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `principalType`                                                                       | [operations.PrincipalType](../../models/operations/principal-type.md)                 | :heavy_minus_sign:                                                                    | Whether `memberUserId` identifies a user or a team.<br/>Defaults to `user` when omitted.<br/> |
# Member

## Example Usage

```typescript
import { Member } from "@pipeshub-ai/sdk/models";

let value: Member = {
  principalId: "<value>",
  role: "editor",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `principalId`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | User id to add or update. Must exist in this org's IAM<br/>service (validated the same way as<br/>`POST /conversations/{conversationId}/share`).<br/> |
| `role`                                                                                                                                    | [models.ProjectMembersUpsertRequestRole](../models/project-members-upsert-request-role.md)                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
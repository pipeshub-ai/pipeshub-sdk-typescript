# CreateUserGroupRequest

Request payload

## Example Usage

```typescript
import { CreateUserGroupRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateUserGroupRequest = {
  name: "Engineering Team",
  type: "standard",
  description: "All engineering department members",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Display name for the group                         | Engineering Team                                   |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_check_mark:                                 | Group type determining behavior and privileges     | standard                                           |
| `description`                                      | *string*                                           | :heavy_minus_sign:                                 | Optional description of the group's purpose        | All engineering department members                 |
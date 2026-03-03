# UpdateUserGroupRequestBody

Request payload

## Example Usage

```typescript
import { UpdateUserGroupRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateUserGroupRequestBody = {
  name: "Engineering Team - Updated",
  description: "All engineering and DevOps members",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `name`                             | *string*                           | :heavy_minus_sign:                 | New display name for the group     | Engineering Team - Updated         |
| `description`                      | *string*                           | :heavy_minus_sign:                 | Updated description                | All engineering and DevOps members |
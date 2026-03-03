# CreateTeamRequest

Request payload

## Example Usage

```typescript
import { CreateTeamRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateTeamRequest = {
  name: "Engineering Team",
  description: "Core engineering team for product development",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Team display name (must be unique in org)      | Engineering Team                               |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | Team description and purpose                   | Core engineering team for product development  |
| `userRoles`                                    | [models.UserRole](../../models/user-role.md)[] | :heavy_minus_sign:                             | Optional initial members with roles            |                                                |
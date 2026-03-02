# Team

## Example Usage

```typescript
import { Team } from "pipeshub/models";

let value: Team = {
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique team identifier                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Team name                                                                                     |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Team description                                                                              |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Organization ID                                                                               |
| `userRoles`                                                                                   | [models.UserRole](../models/user-role.md)[]                                                   | :heavy_minus_sign:                                                                            | Users and their roles in the team                                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Creation timestamp (ISO 8601)                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last update timestamp (ISO 8601)                                                              |
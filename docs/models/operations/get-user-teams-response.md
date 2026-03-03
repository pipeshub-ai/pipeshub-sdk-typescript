# GetUserTeamsResponse

User's teams retrieved successfully

## Example Usage

```typescript
import { GetUserTeamsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetUserTeamsResponse = {
  success: true,
  pagination: {
    page: 1,
    limit: 20,
    total: 5,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `success`                                                                                 | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | N/A                                                                                       | true                                                                                      |
| `data`                                                                                    | [operations.GetUserTeamsData](../../models/operations/get-user-teams-data.md)[]           | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `pagination`                                                                              | [operations.GetUserTeamsPagination](../../models/operations/get-user-teams-pagination.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
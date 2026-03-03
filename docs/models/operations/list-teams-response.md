# ListTeamsResponse

Teams retrieved successfully

## Example Usage

```typescript
import { ListTeamsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListTeamsResponse = {
  success: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                | true                                                                               |
| `data`                                                                             | [models.Team](../../models/team.md)[]                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `pagination`                                                                       | [operations.ListTeamsPagination](../../models/operations/list-teams-pagination.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
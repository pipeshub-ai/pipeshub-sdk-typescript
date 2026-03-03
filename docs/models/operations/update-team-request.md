# UpdateTeamRequest

## Example Usage

```typescript
import { UpdateTeamRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateTeamRequest = {
  teamId: "507f1f77bcf86cd799439011",
  body: {
    name: "Core Engineering Team",
    description: "Primary engineering team for product development",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `teamId`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | Team ID (24-character MongoDB ObjectId)                                                 | 507f1f77bcf86cd799439011                                                                |
| `body`                                                                                  | [operations.UpdateTeamRequestBody](../../models/operations/update-team-request-body.md) | :heavy_check_mark:                                                                      | Request payload                                                                         |                                                                                         |
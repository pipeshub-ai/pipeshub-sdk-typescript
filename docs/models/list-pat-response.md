# ListPatResponse

Response body for `GET /personal-access-tokens` (`listTokens`) — the
caller's own active tokens, capped at 100 most-recent server-side.
Unlike the admin list, this is a flat array with no pagination
envelope and no owner fields (it's implicitly scoped to the caller).


## Example Usage

```typescript
import { ListPatResponse } from "@pipeshub-ai/sdk/models";

let value: ListPatResponse = {
  tokens: [
    {
      id: "<id>",
      name: "<value>",
      scopes: [
        "<value 1>",
      ],
      createdAt: new Date("2025-07-12T04:23:44.663Z"),
      expiresAt: new Date("2024-04-24T09:15:53.614Z"),
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `tokens`                                           | [models.PatListItem](../models/pat-list-item.md)[] | :heavy_check_mark:                                 | N/A                                                |
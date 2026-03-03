# ListTeamsRequest

## Example Usage

```typescript
import { ListTeamsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ListTeamsRequest = {
  search: "engineering",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `search`                            | *string*                            | :heavy_minus_sign:                  | Search teams by name or description | engineering                         |
| `limit`                             | *number*                            | :heavy_minus_sign:                  | Number of results per page          |                                     |
| `page`                              | *number*                            | :heavy_minus_sign:                  | Page number (1-based)               |                                     |
# GetFilterFieldOptionsRequest

## Example Usage

```typescript
import { GetFilterFieldOptionsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetFilterFieldOptionsRequest = {
  connectorId: "<id>",
  filterKey: "folders",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `connectorId`                      | *string*                           | :heavy_check_mark:                 | N/A                                |                                    |
| `filterKey`                        | *string*                           | :heavy_check_mark:                 | Filter field key                   | folders                            |
| `page`                             | *number*                           | :heavy_minus_sign:                 | N/A                                |                                    |
| `limit`                            | *number*                           | :heavy_minus_sign:                 | N/A                                |                                    |
| `search`                           | *string*                           | :heavy_minus_sign:                 | Search term for filtering options  |                                    |
| `cursor`                           | *string*                           | :heavy_minus_sign:                 | Cursor for cursor-based pagination |                                    |
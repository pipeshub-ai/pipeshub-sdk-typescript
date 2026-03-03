# GetConnectorRegistryRequest

## Example Usage

```typescript
import { GetConnectorRegistryRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorRegistryRequest = {
  scope: "team",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `scope`                                                  | [models.ConnectorScope](../../models/connector-scope.md) | :heavy_minus_sign:                                       | Filter by scope type                                     | team                                                     |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Page number                                              |                                                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Items per page                                           |                                                          |
| `search`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Search term for connector names                          |                                                          |
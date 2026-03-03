# ListConnectorInstancesRequest

## Example Usage

```typescript
import { ListConnectorInstancesRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ListConnectorInstancesRequest = {
  scope: "team",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `scope`                                                  | [models.ConnectorScope](../../models/connector-scope.md) | :heavy_minus_sign:                                       | Filter by scope (team or personal)                       | team                                                     |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `search`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Search by instance name                                  |                                                          |
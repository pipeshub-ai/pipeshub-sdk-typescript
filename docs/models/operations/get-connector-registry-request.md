# GetConnectorRegistryRequest

## Example Usage

```typescript
import { GetConnectorRegistryRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorRegistryRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `scope`                                                                                  | [operations.ConnectorRegistryScope](../../models/operations/connector-registry-scope.md) | :heavy_minus_sign:                                                                       | Which connector types to list. Defaults to `team`.                                       | team                                                                                     |
| `page`                                                                                   | *number*                                                                                 | :heavy_minus_sign:                                                                       | Page number                                                                              |                                                                                          |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | Items per page                                                                           |                                                                                          |
| `search`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | Search term for connector names                                                          |                                                                                          |
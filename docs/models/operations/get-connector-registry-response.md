# GetConnectorRegistryResponse

Connector registry retrieved

## Example Usage

```typescript
import { GetConnectorRegistryResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorRegistryResponse = {
  success: true,
  connectors: [],
  pagination: {
    page: 262836,
    limit: 637093,
    totalCount: 498161,
    totalPages: 987333,
    hasPrev: false,
    hasNext: true,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `success`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `connectors`                                                                            | [models.ConnectorRegistryEntry](../../models/connector-registry-entry.md)[]             | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `pagination`                                                                            | [models.ConnectorPagination](../../models/connector-pagination.md)                      | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `registryCountsByScope`                                                                 | [operations.RegistryCountsByScope](../../models/operations/registry-counts-by-scope.md) | :heavy_minus_sign:                                                                      | How many connector types each scope offers                                              |
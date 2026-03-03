# GetConnectorRegistryResponse

Connector registry retrieved

## Example Usage

```typescript
import { GetConnectorRegistryResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorRegistryResponse = {
  connectors: [
    {
      connectorType: "google-drive",
      displayName: "Google Drive",
      supportedScopes: [
        "team",
      ],
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `connectors`                                                       | [models.ConnectorType](../../models/connector-type.md)[]           | :heavy_minus_sign:                                                 | N/A                                                                |
| `pagination`                                                       | [models.ConnectorPagination](../../models/connector-pagination.md) | :heavy_minus_sign:                                                 | Pagination information for connector lists                         |
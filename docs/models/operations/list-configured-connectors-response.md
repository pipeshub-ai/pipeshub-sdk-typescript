# ListConfiguredConnectorsResponse

Configured connectors retrieved

## Example Usage

```typescript
import { ListConfiguredConnectorsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListConfiguredConnectorsResponse = {
  connectors: [
    {
      connectorId: "conn_abc123",
      connectorType: "google-drive",
      instanceName: "Company Google Drive",
      scope: "team",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `connectors`                                                       | [models.ConnectorInstance](../../models/connector-instance.md)[]   | :heavy_minus_sign:                                                 | N/A                                                                |
| `pagination`                                                       | [models.ConnectorPagination](../../models/connector-pagination.md) | :heavy_minus_sign:                                                 | Pagination information for connector lists                         |
# ListActiveConnectorsResponse

Active connectors retrieved

## Example Usage

```typescript
import { ListActiveConnectorsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListActiveConnectorsResponse = {
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `success`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `connectors`                                                     | [models.ConnectorInstance](../../models/connector-instance.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
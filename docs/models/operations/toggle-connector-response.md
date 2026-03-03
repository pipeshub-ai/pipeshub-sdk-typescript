# ToggleConnectorResponse

Connector toggled

## Example Usage

```typescript
import { ToggleConnectorResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ToggleConnectorResponse = {
  message: "Sync enabled successfully",
  connector: {
    connectorId: "conn_abc123",
    connectorType: "google-drive",
    instanceName: "Company Google Drive",
    scope: "team",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `success`                                                                                               | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `message`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | Sync enabled successfully                                                                               |
| `connector`                                                                                             | [models.ConnectorInstance](../../models/connector-instance.md)                                          | :heavy_minus_sign:                                                                                      | A configured connector instance. Represents an active or configured<br/>connection to an external service.<br/> |                                                                                                         |
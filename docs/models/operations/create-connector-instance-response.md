# CreateConnectorInstanceResponse

Instance created

## Example Usage

```typescript
import { CreateConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateConnectorInstanceResponse = {
  connector: {
    connectorId: "conn_abc123",
    connectorType: "google-drive",
    instanceName: "Company Google Drive",
    scope: "team",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `success`                                                                                               | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `connector`                                                                                             | [models.ConnectorInstance](../../models/connector-instance.md)                                          | :heavy_minus_sign:                                                                                      | A configured connector instance. Represents an active or configured<br/>connection to an external service.<br/> |
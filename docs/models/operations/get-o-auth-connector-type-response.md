# GetOAuthConnectorTypeResponse

Connector type retrieved

## Example Usage

```typescript
import { GetOAuthConnectorTypeResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthConnectorTypeResponse = {
  connector: {
    connectorType: "google-drive",
    displayName: "Google Drive",
    supportedScopes: [
      "team",
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `connector`                                                                                                              | [models.ConnectorType](../../models/connector-type.md)                                                                   | :heavy_minus_sign:                                                                                                       | A connector type from the registry. Represents an available integration<br/>that can be configured as a connector instance.<br/> |
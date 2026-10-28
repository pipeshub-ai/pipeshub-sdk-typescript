# GetConnectorConfigResponse

Saved configuration

## Example Usage

```typescript
import { GetConnectorConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorConfigResponse = {
  success: true,
  config: {
    authType: "OAUTH",
    scope: "team",
    config: {
      auth: {
        connectorScope: "team",
      },
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `config`                                                   | [models.ConnectorConfig](../../models/connector-config.md) | :heavy_check_mark:                                         | N/A                                                        |
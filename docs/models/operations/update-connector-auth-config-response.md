# UpdateConnectorAuthConfigResponse

Auth settings saved. The connector is signed out and turned off.

## Example Usage

```typescript
import { UpdateConnectorAuthConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorAuthConfigResponse = {
  success: false,
  config: {
    auth: {
      connectorScope: "team",
    },
  },
  message: "Authentication configuration saved successfully.",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        | Example                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                                                          | *boolean*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |                                                                                                                                                                    |
| `config`                                                                                                                                                           | [models.ConnectorStoredConfig](../../models/connector-stored-config.md)                                                                                            | :heavy_check_mark:                                                                                                                                                 | A connector instance's saved settings. Secret auth fields come back masked; saving the mask back keeps the stored value. Provider OAuth tokens are never returned. |                                                                                                                                                                    |
| `message`                                                                                                                                                          | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                | Authentication configuration saved successfully.                                                                                                                   |
# UpdateConnectorFiltersSyncConfigResponse

Sync and filter settings saved; the connector is configured

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorFiltersSyncConfigResponse = {
  success: false,
  config: {
    auth: {
      connectorScope: "team",
    },
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                                                          | *boolean*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `config`                                                                                                                                                           | [models.ConnectorStoredConfig](../../models/connector-stored-config.md)                                                                                            | :heavy_check_mark:                                                                                                                                                 | A connector instance's saved settings. Secret auth fields come back masked; saving the mask back keeps the stored value. Provider OAuth tokens are never returned. |
| `message`                                                                                                                                                          | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `syncFiltersChanged`                                                                                                                                               | *boolean*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                 | The next sync is a full sync                                                                                                                                       |
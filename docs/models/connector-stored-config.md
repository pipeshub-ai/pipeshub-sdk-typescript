# ConnectorStoredConfig

A connector instance's saved settings. Secret auth fields come back masked; saving the mask back keeps the stored value. Provider OAuth tokens are never returned.

## Example Usage

```typescript
import { ConnectorStoredConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorStoredConfig = {
  auth: {
    connectorScope: "team",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `auth`                                                                        | [models.ConnectorStoredConfigAuth](../models/connector-stored-config-auth.md) | :heavy_minus_sign:                                                            | Auth fields for the instance's auth type, keyed by field name                 |
| `sync`                                                                        | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | Sync strategy plus connector-specific sync settings                           |
| `filters`                                                                     | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | N/A                                                                           |
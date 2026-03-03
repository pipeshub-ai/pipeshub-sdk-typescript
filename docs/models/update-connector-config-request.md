# UpdateConnectorConfigRequest

Request to update connector configuration (partial updates supported)

## Example Usage

```typescript
import { UpdateConnectorConfigRequest } from "@pipeshub-ai/sdk/models";

let value: UpdateConnectorConfigRequest = {
  auth: {
    values: {
      "apiKey": "sk-xxxxx",
      "baseUrl": "https://api.example.com",
    },
    oauthConfigId: "oauth_config_123",
  },
  sync: {
    scheduledConfig: {
      cronExpression: "0 */6 * * *",
      timezone: "America/New_York",
    },
    webhookConfig: {
      events: [
        "file.created",
        "file.modified",
        "file.deleted",
      ],
    },
  },
  filters: {
    sync: {
      values: {
        "folders": [
          "folder_id_1",
          "folder_id_2",
        ],
        "fileTypes": [
          "pdf",
          "docx",
          "xlsx",
        ],
        "includeShared": true,
      },
    },
  },
  baseUrl: "https://confluence.mycompany.com",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `auth`                                                                                  | [models.ConnectorAuthConfig](../models/connector-auth-config.md)                        | :heavy_minus_sign:                                                                      | Authentication configuration for a connector instance                                   |                                                                                         |
| `sync`                                                                                  | [models.ConnectorSyncConfig](../models/connector-sync-config.md)                        | :heavy_minus_sign:                                                                      | Synchronization configuration for a connector instance                                  |                                                                                         |
| `filters`                                                                               | [models.ConnectorFiltersConfig](../models/connector-filters-config.md)                  | :heavy_minus_sign:                                                                      | Filter configuration to control what data is synced (sync filters and indexing filters) |                                                                                         |
| `baseUrl`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | Base URL for self-hosted instances                                                      | https://confluence.mycompany.com                                                        |
# UpdateConnectorFiltersSyncRequest

Request to update filters and sync config (connector must be authenticated and inactive)

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncRequest } from "@pipeshub-ai/sdk/models";

let value: UpdateConnectorFiltersSyncRequest = {
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
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `sync`                                                                                  | [models.ConnectorSyncConfig](../models/connector-sync-config.md)                        | :heavy_minus_sign:                                                                      | Synchronization configuration for a connector instance                                  |
| `filters`                                                                               | [models.ConnectorFiltersConfig](../models/connector-filters-config.md)                  | :heavy_minus_sign:                                                                      | Filter configuration to control what data is synced (sync filters and indexing filters) |
| `baseUrl`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
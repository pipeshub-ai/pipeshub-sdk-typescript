# UpdateConnectorFiltersSyncConfigRequest

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorFiltersSyncConfigRequest = {
  connectorId: "<id>",
  body: {
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
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.UpdateConnectorFiltersSyncRequest](../../models/update-connector-filters-sync-request.md) | :heavy_check_mark:                                                                                | Request payload                                                                                   |
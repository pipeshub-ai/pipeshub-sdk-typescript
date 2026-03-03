# UpdateConnectorConfigRequest

## Example Usage

```typescript
import { UpdateConnectorConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorConfigRequest = {
  connectorId: "<id>",
  body: {
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
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `connectorId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `body`                                                                                 | [models.UpdateConnectorConfigRequest](../../models/update-connector-config-request.md) | :heavy_check_mark:                                                                     | Request payload                                                                        |
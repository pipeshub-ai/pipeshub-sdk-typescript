# CreateConnectorRequest

Request to create a new connector instance

## Example Usage

```typescript
import { CreateConnectorRequest } from "@pipeshub-ai/sdk/models";

let value: CreateConnectorRequest = {
  connectorType: "google-drive",
  instanceName: "Marketing Team Drive",
  scope: "team",
  authType: "OAUTH",
  config: {
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
  },
  baseUrl: "https://confluence.mycompany.com",
};
```

## Fields

| Field                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorType`                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | Connector type from registry (e.g., google-drive, confluence, slack)                                                                                                                                                                            | google-drive                                                                                                                                                                                                                                    |
| `instanceName`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | Display name for this connector instance                                                                                                                                                                                                        | Marketing Team Drive                                                                                                                                                                                                                            |
| `scope`                                                                                                                                                                                                                                         | [models.ConnectorScope](../models/connector-scope.md)                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                              | Scope determines visibility and access control for connectors:<br><br/><ul><br/><li><code>team</code> - Available to all users in the organization (admin-only creation)</li><br/><li><code>personal</code> - Private to the creating user only</li><br/></ul><br/> | team                                                                                                                                                                                                                                            |
| `authType`                                                                                                                                                                                                                                      | [models.AuthType](../models/auth-type.md)                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                              | Authentication type (required if connector supports multiple auth methods)                                                                                                                                                                      | OAUTH                                                                                                                                                                                                                                           |
| `config`                                                                                                                                                                                                                                        | [models.CreateConnectorRequestConfig](../models/create-connector-request-config.md)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                              | Initial configuration (can also be set after creation)                                                                                                                                                                                          |                                                                                                                                                                                                                                                 |
| `baseUrl`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                              | Base URL for self-hosted instances (e.g., Confluence Server, GitLab Self-Managed)                                                                                                                                                               | https://confluence.mycompany.com                                                                                                                                                                                                                |
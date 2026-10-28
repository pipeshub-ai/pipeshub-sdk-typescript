# GetConnectorInstanceResponse

Connector instance

## Example Usage

```typescript
import { GetConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorInstanceResponse = {
  success: true,
  connector: {
    key: "7b387394-1248-4fb6-810d-e8ac9ac226eb",
    name: "Company Google Drive",
    type: "Drive Workspace",
    documentationLinks: [
      {
        title: "Azure AD App Registration Setup",
        type: "setup",
      },
    ],
    authType: "OAUTH",
    scope: "team",
    status: "IDLE",
    config: {
      documentationLinks: [
        {
          title: "Azure AD App Registration Setup",
          type: "setup",
        },
      ],
      sync: {
        scheduledConfig: {
          timezone: "UTC",
        },
        realtimeConfig: {
          connectionType: "WEBSOCKET",
        },
      },
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `connector`                                                                    | [models.ConnectorInstance](../../models/connector-instance.md)                 | :heavy_check_mark:                                                             | A connector instance: its type's registry entry plus the instance's own state. |
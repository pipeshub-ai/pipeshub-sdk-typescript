# ListConnectorInstancesResponse

Instances retrieved

## Example Usage

```typescript
import { ListConnectorInstancesResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ListConnectorInstancesResponse = {
  success: false,
  connectors: [
    {
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
  ],
  pagination: {
    page: 262836,
    limit: 637093,
    totalCount: 498161,
    totalPages: 987333,
    hasPrev: false,
    hasNext: true,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `connectors`                                                       | [models.ConnectorInstance](../../models/connector-instance.md)[]   | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [models.ConnectorPagination](../../models/connector-pagination.md) | :heavy_check_mark:                                                 | N/A                                                                |
# UpdateConnectorConfigRequest

## Example Usage

```typescript
import { UpdateConnectorConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorConfigRequest = {
  connectorId: "<id>",
  body: {
    auth: {
      "baseUrl": "https://mycompany.atlassian.net",
      "email": "admin@mycompany.com",
      "apiToken": "ATATT3x...",
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
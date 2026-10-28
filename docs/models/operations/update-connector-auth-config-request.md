# UpdateConnectorAuthConfigRequest

## Example Usage

```typescript
import { UpdateConnectorAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorAuthConfigRequest = {
  connectorId: "<id>",
  body: {
    auth: {
      "baseUrl": "https://mycompany.atlassian.net",
      "email": "admin@mycompany.com",
      "apiToken": "ATATT3x...",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `connectorId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Connector instance ID                                                              |
| `body`                                                                             | [models.UpdateConnectorAuthRequest](../../models/update-connector-auth-request.md) | :heavy_check_mark:                                                                 | Request payload                                                                    |
# UpdateConnectorAuthConfigRequest

## Example Usage

```typescript
import { UpdateConnectorAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorAuthConfigRequest = {
  connectorId: "<id>",
  body: {
    auth: {
      values: {
        "apiKey": "sk-xxxxx",
        "baseUrl": "https://api.example.com",
      },
      oauthConfigId: "oauth_config_123",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `connectorId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.UpdateConnectorAuthRequest](../../models/update-connector-auth-request.md) | :heavy_check_mark:                                                                 | Request payload                                                                    |
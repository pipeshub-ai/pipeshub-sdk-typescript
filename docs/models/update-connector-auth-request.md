# UpdateConnectorAuthRequest

Request to update authentication config (clears OAuth tokens, requires re-auth)

## Example Usage

```typescript
import { UpdateConnectorAuthRequest } from "@pipeshub-ai/sdk/models";

let value: UpdateConnectorAuthRequest = {
  auth: {
    values: {
      "apiKey": "sk-xxxxx",
      "baseUrl": "https://api.example.com",
    },
    oauthConfigId: "oauth_config_123",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `auth`                                                           | [models.ConnectorAuthConfig](../models/connector-auth-config.md) | :heavy_check_mark:                                               | Authentication configuration for a connector instance            |
| `baseUrl`                                                        | *string*                                                         | :heavy_minus_sign:                                               | Base URL (if changed with auth update)                           |
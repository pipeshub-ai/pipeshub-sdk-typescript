# ConnectorAuthConfig

Authentication configuration for a connector instance

## Example Usage

```typescript
import { ConnectorAuthConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorAuthConfig = {
  values: {
    "apiKey": "sk-xxxxx",
    "baseUrl": "https://api.example.com",
  },
  oauthConfigId: "oauth_config_123",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `values`                                                       | Record<string, *any*>                                          | :heavy_minus_sign:                                             | Authentication values (keys depend on connector's auth schema) | {<br/>"apiKey": "sk-xxxxx",<br/>"baseUrl": "https://api.example.com"<br/>} |
| `oauthConfigId`                                                | *string*                                                       | :heavy_minus_sign:                                             | ID of admin-created OAuth configuration to use                 | oauth_config_123                                               |
| `customValues`                                                 | Record<string, *any*>                                          | :heavy_minus_sign:                                             | Custom authentication values specific to the connector         |                                                                |
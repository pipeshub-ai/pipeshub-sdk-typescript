# CreateOAuthConfigResponse

OAuth configuration created

## Example Usage

```typescript
import { CreateOAuthConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateOAuthConfigResponse = {
  oauthConfig: {
    oauthInstanceName: "Production Google OAuth",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                   | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `oauthConfig`                                                                                               | [models.OAuthConfig](../../models/o-auth-config.md)                                                         | :heavy_minus_sign:                                                                                          | OAuth configuration for a connector type. Created by admins to enable<br/>OAuth authentication for connectors.<br/> |
| `message`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
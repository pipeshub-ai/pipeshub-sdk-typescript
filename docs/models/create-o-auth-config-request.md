# CreateOAuthConfigRequest

Request to create OAuth configuration (admin only). Stores credentials that users select when setting up connectors.

## Example Usage

```typescript
import { CreateOAuthConfigRequest } from "@pipeshub-ai/sdk/models";

let value: CreateOAuthConfigRequest = {
  oauthInstanceName: "Production Google OAuth Credentials",
  config: {
    clientId: "123456789-abc.apps.googleusercontent.com",
    clientSecret: "GOCSPX-xxxxxxxxxxxxx",
    tenantId: "12345678-1234-1234-1234-123456789abc",
  },
  baseUrl: "https://gitlab.mycompany.com",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `oauthInstanceName`                                                                       | *string*                                                                                  | :heavy_check_mark:                                                                        | Display name for this OAuth configuration (e.g., 'Production Google OAuth')               | Production Google OAuth Credentials                                                       |
| `config`                                                                                  | [models.CreateOAuthConfigRequestConfig](../models/create-o-auth-config-request-config.md) | :heavy_check_mark:                                                                        | OAuth application credentials                                                             |                                                                                           |
| `baseUrl`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | Base URL for self-hosted instances (e.g., GitLab Self-Managed)                            | https://gitlab.mycompany.com                                                              |
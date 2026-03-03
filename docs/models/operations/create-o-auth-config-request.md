# CreateOAuthConfigRequest

## Example Usage

```typescript
import { CreateOAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateOAuthConfigRequest = {
  connectorType: "<value>",
  body: {
    oauthInstanceName: "Production Google OAuth Credentials",
    config: {
      clientId: "123456789-abc.apps.googleusercontent.com",
      clientSecret: "GOCSPX-xxxxxxxxxxxxx",
      tenantId: "12345678-1234-1234-1234-123456789abc",
    },
    baseUrl: "https://gitlab.mycompany.com",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `connectorType`                                                                 | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `body`                                                                          | [models.CreateOAuthConfigRequest](../../models/create-o-auth-config-request.md) | :heavy_check_mark:                                                              | Request payload                                                                 |
# CreateOAuthConfigRequest

## Example Usage

```typescript
import { CreateOAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateOAuthConfigRequest = {
  connectorType: "Confluence",
  body: {
    oauthInstanceName: "Production Google OAuth Credentials",
    config: {
      clientId: "123456789-abc.apps.googleusercontent.com",
      clientSecret: "GOCSPX-xxxxxxxxxxxxx",
      tenantId: "12345678-1234-1234-1234-123456789abc",
    },
    baseUrl: "https://pipeshub.mycompany.com",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `connectorType`                                                                 | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | Confluence                                                                      |
| `body`                                                                          | [models.CreateOAuthConfigRequest](../../models/create-o-auth-config-request.md) | :heavy_check_mark:                                                              | Request payload                                                                 |                                                                                 |
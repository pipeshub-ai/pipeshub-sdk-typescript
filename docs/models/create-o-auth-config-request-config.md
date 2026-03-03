# CreateOAuthConfigRequestConfig

OAuth application credentials

## Example Usage

```typescript
import { CreateOAuthConfigRequestConfig } from "@pipeshub-ai/sdk/models";

let value: CreateOAuthConfigRequestConfig = {
  clientId: "123456789-abc.apps.googleusercontent.com",
  clientSecret: "GOCSPX-xxxxxxxxxxxxx",
  tenantId: "12345678-1234-1234-1234-123456789abc",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `clientId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | OAuth client ID from your OAuth application                         | 123456789-abc.apps.googleusercontent.com                            |
| `clientSecret`                                                      | *string*                                                            | :heavy_check_mark:                                                  | OAuth client secret (stored encrypted, never returned in responses) | GOCSPX-xxxxxxxxxxxxx                                                |
| `tenantId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | Azure tenant ID (required only for Microsoft connectors)            | 12345678-1234-1234-1234-123456789abc                                |
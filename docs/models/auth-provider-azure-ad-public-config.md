# AuthProviderAzureAdPublicConfig

Public Azure AD OAuth settings returned to clients

## Example Usage

```typescript
import { AuthProviderAzureAdPublicConfig } from "@pipeshub-ai/sdk/models";

let value: AuthProviderAzureAdPublicConfig = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `tenantId`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Azure AD tenant ID                                             |
| `clientId`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Azure AD client ID                                             |
| `enableJit`                                                    | *boolean*                                                      | :heavy_minus_sign:                                             | Whether just-in-time user provisioning is enabled for Azure AD |
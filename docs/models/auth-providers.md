# AuthProviders

Configuration for external authentication providers (returned when those methods are allowed)

## Example Usage

```typescript
import { AuthProviders } from "@pipeshub-ai/sdk/models";

let value: AuthProviders = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `google`                                                                                       | [models.AuthProviderGooglePublicConfig](../models/auth-provider-google-public-config.md)       | :heavy_minus_sign:                                                                             | Public Google OAuth settings returned to clients                                               |
| `microsoft`                                                                                    | [models.AuthProviderMicrosoftPublicConfig](../models/auth-provider-microsoft-public-config.md) | :heavy_minus_sign:                                                                             | Public Microsoft OAuth settings returned to clients                                            |
| `azuread`                                                                                      | [models.AuthProviderAzureAdPublicConfig](../models/auth-provider-azure-ad-public-config.md)    | :heavy_minus_sign:                                                                             | Public Azure AD OAuth settings returned to clients                                             |
| `oauth`                                                                                        | [models.AuthProviderOAuthPublicConfig](../models/auth-provider-o-auth-public-config.md)        | :heavy_minus_sign:                                                                             | Public generic OAuth provider settings returned to clients                                     |
| `saml`                                                                                         | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | Present when SAML SSO is an allowed method; may be an empty object                             |
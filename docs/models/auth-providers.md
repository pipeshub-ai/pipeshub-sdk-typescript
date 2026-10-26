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
# AuthProviders

Settings of the external sign-in providers among the allowed methods, keyed by provider.
A provider is listed whenever its settings can be read, which is also the case when
nothing has been saved for it yet: its entry is then an empty object. Only `google`
and `microsoft` have a sign-in flow.


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
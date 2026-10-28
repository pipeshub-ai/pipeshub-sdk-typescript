# AuthProviderMicrosoftPublicConfig

Public Microsoft OAuth settings returned to clients

## Example Usage

```typescript
import { AuthProviderMicrosoftPublicConfig } from "@pipeshub-ai/sdk/models";

let value: AuthProviderMicrosoftPublicConfig = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `tenantId`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Microsoft tenant ID                                                                    |
| `clientId`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Microsoft OAuth client ID                                                              |
| `authority`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | Sign-in authority URL, built on save as `https://login.microsoftonline.com/{tenantId}` |
| `enableJit`                                                                            | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether just-in-time user provisioning is enabled for Microsoft                        |
# AuthProviderGooglePublicConfig

Public Google OAuth settings returned to clients

## Example Usage

```typescript
import { AuthProviderGooglePublicConfig } from "@pipeshub-ai/sdk/models";

let value: AuthProviderGooglePublicConfig = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Google OAuth client ID                                       |
| `enableJit`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | Whether just-in-time user provisioning is enabled for Google |
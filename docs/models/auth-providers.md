# AuthProviders

Configuration for external authentication providers (returned when those methods are allowed)

## Example Usage

```typescript
import { AuthProviders } from "@pipeshub-ai/sdk/models";

let value: AuthProviders = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `google`                                   | [models.Google](../models/google.md)       | :heavy_minus_sign:                         | N/A                                        |
| `microsoft`                                | [models.Microsoft](../models/microsoft.md) | :heavy_minus_sign:                         | N/A                                        |
| `azuread`                                  | [models.Azuread](../models/azuread.md)     | :heavy_minus_sign:                         | N/A                                        |
| `oauth`                                    | [models.Oauth](../models/oauth.md)         | :heavy_minus_sign:                         | N/A                                        |
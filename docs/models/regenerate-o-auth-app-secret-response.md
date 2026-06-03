# RegenerateOAuthAppSecretResponse

Response body for `POST /oauth-clients/{appId}/regenerate-secret` (`regenerateSecret`).


## Example Usage

```typescript
import { RegenerateOAuthAppSecretResponse } from "@pipeshub-ai/sdk/models";

let value: RegenerateOAuthAppSecretResponse = {
  message: "Client secret regenerated successfully",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | Client secret regenerated successfully                             |
| `clientId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | OAuth client ID (unchanged)                                        |                                                                    |
| `clientSecret`                                                     | *string*                                                           | :heavy_check_mark:                                                 | New client secret (store securely; previous secret is invalidated) |                                                                    |
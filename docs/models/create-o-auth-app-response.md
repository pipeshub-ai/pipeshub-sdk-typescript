# CreateOAuthAppResponse

Response body for `POST /oauth-clients` (`oauth.app.controller.ts` `createApp`).
The new app (including one-time `clientSecret`) is nested under `app`.


## Example Usage

```typescript
import { CreateOAuthAppResponse } from "@pipeshub-ai/sdk/models";

let value: CreateOAuthAppResponse = {
  message: "OAuth app created successfully",
  app: {
    id: "<id>",
    slug: "<value>",
    clientId: "<id>",
    name: "<value>",
    redirectUris: [
      "https://cool-heroine.info",
      "https://trusty-glider.info",
    ],
    allowedGrantTypes: [],
    allowedScopes: [
      "<value 1>",
    ],
    status: "revoked",
    isConfidential: true,
    accessTokenLifetime: 349478,
    refreshTokenLifetime: 551940,
    createdAt: new Date("2026-02-22T13:44:52.377Z"),
    updatedAt: new Date("2025-08-30T13:50:36.375Z"),
    clientSecret: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `message`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | OAuth app created successfully                                   |
| `app`                                                            | [models.OAuthAppWithSecret](../models/o-auth-app-with-secret.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
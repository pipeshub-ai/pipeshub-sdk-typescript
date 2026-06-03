# UpdateOAuthAppResponse

Response body for `PUT /oauth-clients/{appId}` (`oauth.app.controller.ts` `updateApp`).
Updated app (never includes `clientSecret`) is nested under `app`.


## Example Usage

```typescript
import { UpdateOAuthAppResponse } from "@pipeshub-ai/sdk/models";

let value: UpdateOAuthAppResponse = {
  message: "OAuth app updated successfully",
  app: {
    id: "<id>",
    slug: "<value>",
    clientId: "<id>",
    name: "<value>",
    redirectUris: [
      "https://strong-teammate.info",
      "https://faraway-habit.com/",
      "https://actual-outlaw.name",
    ],
    allowedGrantTypes: [
      "<value 1>",
      "<value 2>",
    ],
    allowedScopes: [],
    status: "active",
    isConfidential: true,
    accessTokenLifetime: 859232,
    refreshTokenLifetime: 853157,
    createdAt: new Date("2024-03-04T07:16:01.195Z"),
    updatedAt: new Date("2024-05-13T03:54:57.780Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       | Example                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                                                                                         | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | N/A                                                                                                                                                                                               | OAuth app updated successfully                                                                                                                                                                    |
| `app`                                                                                                                                                                                             | [models.OAuthAppResponse](../models/o-auth-app-response.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                | OAuth app details (without secret). Fields under `required:` always appear<br/>in `toAppResponse` (`oauth.app.service.ts`); optional URL/description fields<br/>are only present when set by the caller.<br/> |                                                                                                                                                                                                   |
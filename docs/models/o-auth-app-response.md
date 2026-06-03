# OAuthAppResponse

OAuth app details (without secret). Fields under `required:` always appear
in `toAppResponse` (`oauth.app.service.ts`); optional URL/description fields
are only present when set by the caller.


## Example Usage

```typescript
import { OAuthAppResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthAppResponse = {
  id: "<id>",
  slug: "<value>",
  clientId: "<id>",
  name: "<value>",
  redirectUris: [],
  allowedGrantTypes: [],
  allowedScopes: [
    "<value 1>",
  ],
  status: "revoked",
  isConfidential: false,
  accessTokenLifetime: 306951,
  refreshTokenLifetime: 460102,
  createdAt: new Date("2026-02-16T09:30:05.310Z"),
  updatedAt: new Date("2025-12-20T10:44:34.181Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | App ID                                                                                        |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | URL-friendly app slug                                                                         |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | OAuth client ID                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | App name                                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | App description                                                                               |
| `redirectUris`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Allowed redirect URIs (always returned; may be empty)                                         |
| `allowedGrantTypes`                                                                           | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Allowed grant types                                                                           |
| `allowedScopes`                                                                               | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Allowed scopes                                                                                |
| `status`                                                                                      | [models.OAuthAppResponseStatus](../models/o-auth-app-response-status.md)                      | :heavy_check_mark:                                                                            | App status                                                                                    |
| `homepageUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | App homepage                                                                                  |
| `privacyPolicyUrl`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Privacy policy URL                                                                            |
| `termsOfServiceUrl`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Terms of service URL                                                                          |
| `isConfidential`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether app is a confidential client                                                          |
| `accessTokenLifetime`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | Access token lifetime in seconds                                                              |
| `refreshTokenLifetime`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Refresh token lifetime in seconds                                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp                                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last update timestamp                                                                         |
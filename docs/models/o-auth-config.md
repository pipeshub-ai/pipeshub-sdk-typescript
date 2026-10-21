# OAuthConfig

A saved OAuth app for a connector type. Admins also get `config` (secrets masked when HIDE_SECRET_CONFIG is on) and, in lists, the provider endpoints.

## Example Usage

```typescript
import { OAuthConfig } from "@pipeshub-ai/sdk/models";

let value: OAuthConfig = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | OAuth app ID: the `oauthConfigId` to link a connector to             |
| `oauthInstanceName`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `connectorType`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `iconPath`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `appGroup`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `appDescription`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `appCategories`                                                      | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [models.OAuthConfigConfig](../models/o-auth-config-config.md)        | :heavy_minus_sign:                                                   | OAuth app credentials; keys follow the connector type's OAuth fields |
| `userId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `orgId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdBy`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `updatedBy`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdAtTimestamp`                                                 | *number*                                                             | :heavy_minus_sign:                                                   | Epoch milliseconds                                                   |
| `updatedAtTimestamp`                                                 | *number*                                                             | :heavy_minus_sign:                                                   | Epoch milliseconds                                                   |
| `authorizeUrl`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `tokenUrl`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `redirectUri`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `scopes`                                                             | Record<string, *string*[]>                                           | :heavy_minus_sign:                                                   | Provider scopes requested per use                                    |
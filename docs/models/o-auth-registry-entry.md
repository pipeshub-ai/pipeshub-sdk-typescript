# OAuthRegistryEntry

A connector type that signs in with an OAuth app, with what an admin needs to register that app

## Example Usage

```typescript
import { OAuthRegistryEntry } from "@pipeshub-ai/sdk/models";

let value: OAuthRegistryEntry = {
  name: "Jira",
  type: "Jira",
  appGroup: "Atlassian",
  authType: "OAUTH",
  appDescription: "<value>",
  appCategories: [
    "<value 1>",
  ],
  iconPath: "/icons/connectors/jira.svg",
  oauthScopes: {
    personalSync: [
      "<value 1>",
    ],
    teamSync: [
      "<value 1>",
      "<value 2>",
    ],
    agent: [
      "<value 1>",
    ],
  },
  redirectUri: "connectors/oauth/callback/Jira",
  authorizeUrl: "https://sure-footed-cruelty.biz",
  tokenUrl: "https://avaricious-daughter.net/",
  tokenAccessType: "offline",
  authFields: [],
  documentationLinks: [],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | Jira                                                                            |
| `type`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The `connectorType` to use in the OAuth app and connector routes                | Jira                                                                            |
| `appGroup`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | Atlassian                                                                       |
| `authType`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | Always OAUTH                                                                    | OAUTH                                                                           |
| `appDescription`                                                                | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `appCategories`                                                                 | *string*[]                                                                      | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `iconPath`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | /icons/connectors/jira.svg                                                      |
| `oauthScopes`                                                                   | [models.OauthScopes](../models/oauth-scopes.md)                                 | :heavy_check_mark:                                                              | Provider scopes requested for each way the connector is used                    |                                                                                 |
| `redirectUri`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Path the provider redirects back to; PipesHub's public origin is prefixed to it | connectors/oauth/callback/Jira                                                  |
| `authorizeUrl`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `tokenUrl`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `additionalParams`                                                              | Record<string, *string*>                                                        | :heavy_minus_sign:                                                              | Extra query parameters sent on the authorize URL; present for some types only   |                                                                                 |
| `tokenAccessType`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | Dropbox and Salesforce only                                                     | offline                                                                         |
| `authFields`                                                                    | [models.AuthField](../models/auth-field.md)[]                                   | :heavy_check_mark:                                                              | The fields an admin fills in when registering the OAuth app                     |                                                                                 |
| `documentationLinks`                                                            | [models.DocumentationLink](../models/documentation-link.md)[]                   | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
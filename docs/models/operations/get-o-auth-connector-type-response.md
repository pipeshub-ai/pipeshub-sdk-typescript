# GetOAuthConnectorTypeResponse

Connector type retrieved

## Example Usage

```typescript
import { GetOAuthConnectorTypeResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthConnectorTypeResponse = {
  success: true,
  connector: {
    name: "Jira",
    type: "Jira",
    appGroup: "Atlassian",
    authType: "OAUTH",
    appDescription: "<value>",
    appCategories: [
      "<value 1>",
      "<value 2>",
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
    authorizeUrl: "https://huge-tackle.info",
    tokenUrl: "https://tidy-clavicle.biz/",
    tokenAccessType: "offline",
    authFields: [
      {
        name: "clientId",
        displayName: "Kian.Koss17",
        placeholder: "<value>",
        description:
          "until depend gosh goose pop nervous after gift unimportant pave",
        fieldType: "TEXT",
        required: false,
        usage: "CONFIGURE",
        defaultValue: "<value>",
        validation: {},
        isSecret: false,
      },
    ],
    documentationLinks: [
      {
        title: "<value>",
        url: "https://ample-seal.info/",
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `success`                                                                                       | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `connector`                                                                                     | [models.OAuthRegistryEntry](../../models/o-auth-registry-entry.md)                              | :heavy_check_mark:                                                                              | A connector type that signs in with an OAuth app, with what an admin needs to register that app |
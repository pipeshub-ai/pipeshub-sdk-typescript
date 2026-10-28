# GetOAuthConfigResponse

Saved OAuth app

## Example Usage

```typescript
import { GetOAuthConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthConfigResponse = {
  success: false,
  oauthConfig: {
    connectorType: "Confluence",
    iconPath: "/icons/connectors/confluence.svg",
    appGroup: "Atlassian",
  },
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `oauthConfig`                                                                                                                                                                              | [models.OAuthConfigWithCredentials](../../models/o-auth-config-with-credentials.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                         | An OAuth configuration as `GET /oauth/{connectorType}/{configId}` returns it. An admin<br/>gets `config` with the stored credentials; any other caller gets the same object without `config`.<br/> |
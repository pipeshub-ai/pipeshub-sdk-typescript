# PatScopesListResponse

Response body for `GET /personal-access-tokens/scopes` (`listScopes`).
Unlike `GET /oauth-clients/scopes`, this is a **flat array**, not
grouped by category, and reflects the org's configured `MCP_SCOPES`
rather than the full role-aware OAuth-app scope catalog.


## Example Usage

```typescript
import { PatScopesListResponse } from "@pipeshub-ai/sdk/models";

let value: PatScopesListResponse = {
  scopes: [
    {
      name: "openid",
      description: "OpenID Connect authentication",
      category: "Identity",
      requiresUserConsent: false,
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `scopes`                                                  | [models.OAuthScopeInfo](../models/o-auth-scope-info.md)[] | :heavy_check_mark:                                        | N/A                                                       |
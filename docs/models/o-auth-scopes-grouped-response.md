# OAuthScopesGroupedResponse

OAuth scopes available to the signed-in user for app registration, grouped by category label.
Category keys are UI labels (e.g. `Identity`, `Knowledge Base`); each maps to a list of scopes in that group.
Categories defined in server config may appear with an **empty array** when every scope in that category is restricted for the caller's role (e.g. non–org-admin users never receive admin-only scopes).


## Example Usage

```typescript
import { OAuthScopesGroupedResponse } from "@pipeshub-ai/sdk/models";

let value: OAuthScopesGroupedResponse = {
  scopes: {
    "key": [
      {
        name: "openid",
        description: "OpenID Connect authentication",
        category: "Identity",
        requiresUserConsent: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `scopes`                                                                  | Record<string, [models.OAuthScopeInfo](../models/o-auth-scope-info.md)[]> | :heavy_check_mark:                                                        | Map of category display name to scopes in that category                   |
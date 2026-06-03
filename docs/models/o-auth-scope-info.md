# OAuthScopeInfo

Information about an OAuth scope

## Example Usage

```typescript
import { OAuthScopeInfo } from "@pipeshub-ai/sdk/models";

let value: OAuthScopeInfo = {
  name: "openid",
  description: "OpenID Connect authentication",
  category: "Identity",
  requiresUserConsent: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Scope identifier                                                               | openid                                                                         |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Human-readable scope description                                               | OpenID Connect authentication                                                  |
| `category`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Scope category for grouping (matches the key under `scopes` on list responses) | Identity                                                                       |
| `requiresUserConsent`                                                          | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether end-user consent is required when this scope is requested              | false                                                                          |
# OAuthConfigScopes

OAuth scopes copied from the registry when the configuration was created, by use case

## Example Usage

```typescript
import { OAuthConfigScopes } from "@pipeshub-ai/sdk/models";

let value: OAuthConfigScopes = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `personalSync`                            | *string*[]                                | :heavy_minus_sign:                        | Scopes requested for a personal connector |
| `teamSync`                                | *string*[]                                | :heavy_minus_sign:                        | Scopes requested for a team connector     |
| `agent`                                   | *string*[]                                | :heavy_minus_sign:                        | Scopes requested for agent tools          |
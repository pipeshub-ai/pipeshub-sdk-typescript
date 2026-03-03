# SchemeOauth2

OAuth 2.0 authentication with fine-grained scopes.
Supports authorization_code (with PKCE) and client_credentials flows.
OAuth tokens are Bearer JWTs — use the same Authorization header as regular tokens.


## Example Usage

```typescript
import { SchemeOauth2 } from "@pipeshub-ai/sdk/models";

let value: SchemeOauth2 = {
  clientID: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientID`         | *string*           | :heavy_check_mark: | N/A                |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `tokenURL`         | *string*           | :heavy_check_mark: | N/A                |
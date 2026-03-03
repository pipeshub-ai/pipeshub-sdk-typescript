# OAuthCredentials

Credentials for OAuth authentication (Microsoft, Azure AD, generic OAuth)

## Example Usage

```typescript
import { OAuthCredentials } from "@pipeshub-ai/sdk/models";

let value: OAuthCredentials = {
  accessToken: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `accessToken`        | *string*             | :heavy_check_mark:   | OAuth access token   |
| `idToken`            | *string*             | :heavy_minus_sign:   | OAuth ID token (JWT) |
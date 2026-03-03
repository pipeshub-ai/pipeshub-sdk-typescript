# OauthAuthorizeConsentResponse

Consent processed, returns redirect URL with authorization code

## Example Usage

```typescript
import { OauthAuthorizeConsentResponse } from "@pipeshub-ai/sdk/models/operations";

let value: OauthAuthorizeConsentResponse = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `redirectUri`                                  | *string*                                       | :heavy_minus_sign:                             | URL to redirect user (includes code and state) |
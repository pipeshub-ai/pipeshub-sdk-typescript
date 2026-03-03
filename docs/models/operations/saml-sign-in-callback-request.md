# SamlSignInCallbackRequest

SAML response from Identity Provider

## Example Usage

```typescript
import { SamlSignInCallbackRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SamlSignInCallbackRequest = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `samlResponse`                        | *string*                              | :heavy_minus_sign:                    | Base64-encoded SAML response          |
| `relayState`                          | *string*                              | :heavy_minus_sign:                    | Relay state from the original request |
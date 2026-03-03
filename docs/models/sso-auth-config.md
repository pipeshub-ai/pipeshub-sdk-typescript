# SSOAuthConfig

SAML SSO authentication configuration

## Example Usage

```typescript
import { SSOAuthConfig } from "@pipeshub-ai/sdk/models";

let value: SSOAuthConfig = {
  entryPoint: "https://idp.example.com/sso/saml",
  emailKey: "email",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `entryPoint`                                            | *string*                                                | :heavy_minus_sign:                                      | Identity provider SSO URL                               | https://idp.example.com/sso/saml                        |
| `certificate`                                           | *string*                                                | :heavy_minus_sign:                                      | X.509 certificate for signature validation (PEM format) |                                                         |
| `emailKey`                                              | *string*                                                | :heavy_minus_sign:                                      | SAML attribute name for user email                      | email                                                   |
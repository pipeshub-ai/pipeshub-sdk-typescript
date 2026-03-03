# Jwks

JSON Web Key Set (RFC 7517).
Contains public keys for verifying token signatures.


## Example Usage

```typescript
import { Jwks } from "@pipeshub-ai/sdk/models";

let value: Jwks = {
  keys: [
    {
      kty: "RSA",
      use: "sig",
      alg: "RS256",
      e: "AQAB",
    },
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `keys`                           | [models.Jwk](../models/jwk.md)[] | :heavy_minus_sign:               | Array of JSON Web Keys           |
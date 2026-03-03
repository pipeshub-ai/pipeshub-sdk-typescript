# Jwk

JSON Web Key (RFC 7517).
Public key for verifying JWT signatures.


## Example Usage

```typescript
import { Jwk } from "@pipeshub-ai/sdk/models";

let value: Jwk = {
  kty: "RSA",
  use: "sig",
  alg: "RS256",
  e: "AQAB",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `kty`                            | *string*                         | :heavy_minus_sign:               | Key type                         | RSA                              |
| `use`                            | *string*                         | :heavy_minus_sign:               | Key use (sig = signature)        | sig                              |
| `alg`                            | *string*                         | :heavy_minus_sign:               | Algorithm                        | RS256                            |
| `kid`                            | *string*                         | :heavy_minus_sign:               | Key ID                           |                                  |
| `n`                              | *string*                         | :heavy_minus_sign:               | RSA modulus (base64url encoded)  |                                  |
| `e`                              | *string*                         | :heavy_minus_sign:               | RSA exponent (base64url encoded) | AQAB                             |
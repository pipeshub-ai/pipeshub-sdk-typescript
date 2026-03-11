# OAuthProtectedResourceMetadata

OAuth Protected Resource Metadata (RFC 9728).
Describes the protected resource, its authorization servers, supported scopes, and bearer token methods.


## Example Usage

```typescript
import { OAuthProtectedResourceMetadata } from "@pipeshub-ai/sdk/models";

let value: OAuthProtectedResourceMetadata = {
  resource: "https://jaunty-worth.name/",
  authorizationServers: [
    "https://digital-strategy.name",
  ],
  scopesSupported: [
    "read:records",
    "write:records",
    "admin:connectors",
  ],
  bearerMethodsSupported: [
    "header",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `resource`                                                    | *string*                                                      | :heavy_check_mark:                                            | Protected resource identifier                                 |                                                               |
| `authorizationServers`                                        | *string*[]                                                    | :heavy_check_mark:                                            | Authorization servers that can issue tokens for this resource |                                                               |
| `scopesSupported`                                             | *string*[]                                                    | :heavy_minus_sign:                                            | OAuth scopes supported by this resource                       | [<br/>"read:records",<br/>"write:records",<br/>"admin:connectors"<br/>] |
| `bearerMethodsSupported`                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Methods supported for sending bearer tokens                   | [<br/>"header"<br/>]                                          |
| `resourceDocumentation`                                       | *string*                                                      | :heavy_minus_sign:                                            | URL to human-readable documentation for the resource          |                                                               |
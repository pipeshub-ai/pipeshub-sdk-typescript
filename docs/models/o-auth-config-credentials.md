# OAuthConfigCredentials

The credentials stored for an OAuth configuration, exactly as the admin submitted them and
not masked. The keys are the `name` of each entry in the connector type's `authFields`
(see `GET /oauth/registry/{connectorType}`), so they differ from one connector type to the next.
Create and update do not check the values, so any JSON value that was sent (a number,
`null`, a nested object, an array of any items) is stored and returned here as it was sent,
even for `clientId` and `clientSecret`.


## Example Usage

```typescript
import { OAuthConfigCredentials } from "@pipeshub-ai/sdk/models";

let value: OAuthConfigCredentials = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *models.OAuthConfigCredentialValue*                                                           | :heavy_minus_sign:                                                                            | OAuth client ID; a string unless something else was sent                                      |
| `clientSecret`                                                                                | *models.OAuthConfigCredentialValue*                                                           | :heavy_minus_sign:                                                                            | OAuth client secret, in clear text; a string unless something else was sent                   |
| `tenantId`                                                                                    | *models.OAuthConfigCredentialValue*                                                           | :heavy_minus_sign:                                                                            | Directory (tenant) ID, for Microsoft connector types; a string unless something else was sent |
| `additionalProperties`                                                                        | Record<string, *models.OAuthConfigCredentialValue*>                                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
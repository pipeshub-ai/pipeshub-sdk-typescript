# CreateOAuthConfigRequestConfig

OAuth application credentials, keyed by the `name` of each entry in the connector type's
`authFields` (see `GET /oauth/registry/{connectorType}`), so the keys differ from one
connector type to the next. Must not be empty; neither the keys nor their values are
validated when the configuration is created, so a value of another type (a number,
`null`, a nested object, an array of other items) is stored as sent, also for
`clientId` and `clientSecret`.


## Example Usage

```typescript
import { CreateOAuthConfigRequestConfig } from "@pipeshub-ai/sdk/models";

let value: CreateOAuthConfigRequestConfig = {
  clientId: "123456789-abc.apps.googleusercontent.com",
  clientSecret: "GOCSPX-xxxxxxxxxxxxx",
  tenantId: "12345678-1234-1234-1234-123456789abc",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                                   | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | OAuth client ID from your OAuth application                                                                                  | 123456789-abc.apps.googleusercontent.com                                                                                     |
| `clientSecret`                                                                                                               | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | OAuth client secret; never in the create response, and returned by GET only to admins (masked when HIDE_SECRET_CONFIG is on) | GOCSPX-xxxxxxxxxxxxx                                                                                                         |
| `tenantId`                                                                                                                   | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Azure tenant ID (required only for Microsoft connectors)                                                                     | 12345678-1234-1234-1234-123456789abc                                                                                         |
| `additionalProperties`                                                                                                       | Record<string, *models.Config*>                                                                                              | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
# ConnectorAuthSchemaForType

## Example Usage

```typescript
import { ConnectorAuthSchemaForType } from "@pipeshub-ai/sdk/models";

let value: ConnectorAuthSchemaForType = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                     | [models.ConnectorAuthField](../models/connector-auth-field.md)[]                                                                             | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `redirectUri`                                                                                                                                | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | OAuth only. Path appended to the `baseUrl` the connector is created with; the result must be registered as a redirect URI with the provider. |
| `displayRedirectUri`                                                                                                                         | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
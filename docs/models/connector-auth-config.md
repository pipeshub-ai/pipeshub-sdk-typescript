# ConnectorAuthConfig

Auth settings, flat: send each field listed under `auth.schemas.<authType>.fields` in GET /connectors/registry/{connectorType}/schema by its `name`. For OAuth, an admin may send the OAuth app's credentials here (the app is saved and linked), or anyone may send `oauthConfigId` to use a saved app.

## Example Usage

```typescript
import { ConnectorAuthConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorAuthConfig = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `oauthConfigId`                                      | *string*                                             | :heavy_minus_sign:                                   | A saved OAuth app (GET /oauth/{connectorType})       |
| `oauthInstanceName`                                  | *string*                                             | :heavy_minus_sign:                                   | Name for the OAuth app saved from inline credentials |
| `additionalProperties`                               | Record<string, *any*>                                | :heavy_minus_sign:                                   | N/A                                                  |
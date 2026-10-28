# TestConnectorConnectionRequest

## Example Usage

```typescript
import { TestConnectorConnectionRequest } from "@pipeshub-ai/sdk/models/operations";

let value: TestConnectorConnectionRequest = {
  connectorType: "PostgreSQL",
  body: {
    auth: {
      "host": "db.example.com",
      "port": "5432",
      "database": "analytics",
      "username": "reader",
      "password": "your-password",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `connectorType`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Connector type as listed by `GET /connectors/registry` (its `type`),<br/>URL-encoded. The lookup is case-sensitive.<br/> | PostgreSQL                                                                                                         |
| `body`                                                                                                             | [operations.TestConnectorConnectionRequestBody](../../models/operations/test-connector-connection-request-body.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
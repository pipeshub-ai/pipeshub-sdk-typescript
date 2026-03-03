# ConnectorSchema

Schema definition for configuring a connector type

## Example Usage

```typescript
import { ConnectorSchema } from "@pipeshub-ai/sdk/models";

let value: ConnectorSchema = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `connectorType`                                   | *string*                                          | :heavy_minus_sign:                                | N/A                                               |
| `authSchema`                                      | [models.AuthSchema](../models/auth-schema.md)     | :heavy_minus_sign:                                | JSON Schema for authentication fields             |
| `syncSchema`                                      | [models.SyncSchema](../models/sync-schema.md)     | :heavy_minus_sign:                                | JSON Schema for sync configuration                |
| `filterSchema`                                    | [models.FilterSchema](../models/filter-schema.md) | :heavy_minus_sign:                                | JSON Schema for filter options                    |
| `requiredFields`                                  | *string*[]                                        | :heavy_minus_sign:                                | Required field names                              |
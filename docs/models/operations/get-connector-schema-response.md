# GetConnectorSchemaResponse

Schema retrieved

## Example Usage

```typescript
import { GetConnectorSchemaResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorSchemaResponse = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `schema`                                                   | [models.ConnectorSchema](../../models/connector-schema.md) | :heavy_minus_sign:                                         | Schema definition for configuring a connector type         |
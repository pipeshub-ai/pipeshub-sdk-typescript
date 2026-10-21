# GetConnectorSchemaResponse

Connector schema retrieved

## Example Usage

```typescript
import { GetConnectorSchemaResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorSchemaResponse = {
  success: false,
  schema: {},
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                                                    | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `schema`                                                                                                                                     | [models.ConnectorSchema](../../models/connector-schema.md)                                                                                   | :heavy_check_mark:                                                                                                                           | Configuration form for a connector type: the auth fields per auth type, the sync strategies and settings, and the sync and indexing filters. |
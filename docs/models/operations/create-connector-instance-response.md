# CreateConnectorInstanceResponse

Connector instance created. It is not syncing yet.

## Example Usage

```typescript
import { CreateConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateConnectorInstanceResponse = {
  success: true,
  connector: {
    connectorId: "<id>",
    connectorType: "<value>",
    instanceName: "<value>",
    scope: "team",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `connector`                                                  | [models.ConnectorCreated](../../models/connector-created.md) | :heavy_check_mark:                                           | N/A                                                          |
| `message`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
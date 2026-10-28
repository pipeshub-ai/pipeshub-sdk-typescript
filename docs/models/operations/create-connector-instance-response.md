# CreateConnectorInstanceResponse

Connector instance created. It is not syncing yet.

## Example Usage

```typescript
import { CreateConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: CreateConnectorInstanceResponse = {
  success: true,
  connector: {
    connectorId: "7b387394-1248-4fb6-810d-e8ac9ac226eb",
    connectorType: "<value>",
    instanceName: "<value>",
    scope: "team",
  },
  message: "Connector instance created successfully.",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `connector`                                                  | [models.ConnectorCreated](../../models/connector-created.md) | :heavy_check_mark:                                           | Summary of a connector instance that was just created        |                                                              |
| `message`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | Connector instance created successfully.                     |
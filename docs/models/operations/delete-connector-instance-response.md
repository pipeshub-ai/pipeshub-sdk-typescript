# DeleteConnectorInstanceResponse

Deletion accepted. The connector is marked `DELETING` and removed in
the background, so a `GET` shortly afterwards answers `404`.


## Example Usage

```typescript
import { DeleteConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteConnectorInstanceResponse = {
  success: false,
  message: "Connector deletion initiated",
  connectorId: "<id>",
  status: "DELETING",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `success`                                                                                               | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | Connector deletion initiated                                                                            |
| `connectorId`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | ID of the connector being deleted                                                                       |                                                                                                         |
| `status`                                                                                                | [operations.DeleteConnectorInstanceStatus](../../models/operations/delete-connector-instance-status.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
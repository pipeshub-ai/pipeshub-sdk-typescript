# DeleteConnectorInstanceResponse

Deletion started

## Example Usage

```typescript
import { DeleteConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteConnectorInstanceResponse = {
  success: false,
  message: "<value>",
  connectorId: "<id>",
  status: "DELETING",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `success`                                                                                               | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `connectorId`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `status`                                                                                                | [operations.DeleteConnectorInstanceStatus](../../models/operations/delete-connector-instance-status.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
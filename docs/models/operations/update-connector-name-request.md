# UpdateConnectorNameRequest

## Example Usage

```typescript
import { UpdateConnectorNameRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorNameRequest = {
  connectorId: "<id>",
  body: {
    instanceName: "Sales Team Drive (Updated)",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `connectorId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Unique connector instance ID                                                       |
| `body`                                                                             | [models.UpdateConnectorNameRequest](../../models/update-connector-name-request.md) | :heavy_check_mark:                                                                 | Request body for Update connector instance name                                    |
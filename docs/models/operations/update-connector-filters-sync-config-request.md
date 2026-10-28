# UpdateConnectorFiltersSyncConfigRequest

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorFiltersSyncConfigRequest = {
  connectorId: "<id>",
  body: {
    filters: {},
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `connectorId`                                   | *string*                                        | :heavy_check_mark:                              | Connector instance ID                           |
| `body`                                          | *models.UpdateConnectorFiltersSyncRequestUnion* | :heavy_check_mark:                              | Request payload                                 |
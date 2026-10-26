# UpdateConnectorFiltersSyncConfigRequest

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConnectorFiltersSyncConfigRequest = {
  connectorId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | Connector instance ID                                                                             |
| `body`                                                                                            | [models.UpdateConnectorFiltersSyncRequest](../../models/update-connector-filters-sync-request.md) | :heavy_check_mark:                                                                                | Request payload                                                                                   |
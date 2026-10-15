# ResyncConnectorRequest

## Example Usage

```typescript
import { ResyncConnectorRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ResyncConnectorRequest = {
  connectorId: "<id>",
  body: {
    connectorName: "RSS",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `connectorId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Connector instance ID                                                              |
| `body`                                                                             | [models.ResyncConnectorRequestBody](../../models/resync-connector-request-body.md) | :heavy_check_mark:                                                                 | Request body for resync connector                                                  |
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

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Connector instance ID. An ID that decodes to a path separator or<br/>another unsafe segment is refused with `400` before the token is checked.<br/> |
| `body`                                                                                                                                      | [models.ResyncConnectorRequestBody](../../models/resync-connector-request-body.md)                                                          | :heavy_check_mark:                                                                                                                          | Request body for resync connector                                                                                                           |
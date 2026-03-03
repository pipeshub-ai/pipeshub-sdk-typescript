# ToggleConnectorRequest

## Example Usage

```typescript
import { ToggleConnectorRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ToggleConnectorRequest = {
  connectorId: "<id>",
  body: {
    type: "sync",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connectorId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.ConnectorToggleRequest](../../models/connector-toggle-request.md) | :heavy_check_mark:                                                        | Request payload                                                           |
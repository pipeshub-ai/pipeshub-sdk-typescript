# GetConnectorInstanceResponse

Connector instance

## Example Usage

```typescript
import { GetConnectorInstanceResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorInstanceResponse = {
  success: true,
  connector: {
    scope: "team",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `connector`                                                                    | [models.ConnectorInstance](../../models/connector-instance.md)                 | :heavy_check_mark:                                                             | A connector instance: its type's registry entry plus the instance's own state. |
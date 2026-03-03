# GetConnectorConfigResponse

Configuration retrieved

## Example Usage

```typescript
import { GetConnectorConfigResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetConnectorConfigResponse = {
  config: {
    scope: "team",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [models.ConnectorConfig](../../models/connector-config.md)                       | :heavy_minus_sign:                                                               | Configuration for a connector instance including auth, sync, and filter settings |
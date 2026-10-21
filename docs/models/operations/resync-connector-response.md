# ResyncConnectorResponse

Resync queued

## Example Usage

```typescript
import { ResyncConnectorResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ResyncConnectorResponse = {
  resyncConnectorResponse: {
    success: true,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `resyncConnectorResponse`                                                                                                  | [operations.ResyncConnectorResyncConnectorResponse](../../models/operations/resync-connector-resync-connector-response.md) | :heavy_check_mark:                                                                                                         | Acknowledgement that the sync was queued.                                                                                  |
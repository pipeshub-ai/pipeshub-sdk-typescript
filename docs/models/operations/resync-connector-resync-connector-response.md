# ResyncConnectorResyncConnectorResponse

Acknowledgement that the sync was queued.

## Example Usage

```typescript
import { ResyncConnectorResyncConnectorResponse } from "@pipeshub-ai/sdk/models/operations";

let value: ResyncConnectorResyncConnectorResponse = {
  success: false,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `success`                              | *boolean*                              | :heavy_check_mark:                     | Whether the resync event was published |
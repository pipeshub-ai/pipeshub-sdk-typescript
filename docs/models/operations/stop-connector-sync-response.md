# StopConnectorSyncResponse

Stop recorded, or nothing was running

## Example Usage

```typescript
import { StopConnectorSyncResponse } from "@pipeshub-ai/sdk/models/operations";

let value: StopConnectorSyncResponse = {
  success: true,
  stopped: false,
  status: "IDLE",
  message: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `success`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `stopped`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether a sync was running and has been asked to stop. False is a normal answer, not an error. |
| `status`                                                                                       | [operations.StopConnectorSyncStatus](../../models/operations/stop-connector-sync-status.md)    | :heavy_check_mark:                                                                             | The status the connector is actually left in.                                                  |
| `message`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
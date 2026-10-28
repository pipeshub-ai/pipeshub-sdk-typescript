# TestConnectorConnectionResponse

Check ran; see <code>success</code>

## Example Usage

```typescript
import { TestConnectorConnectionResponse } from "@pipeshub-ai/sdk/models/operations";

let value: TestConnectorConnectionResponse = {
  success: true,
  message: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | Whether the connector reached the source with these settings |
| `message`                                                    | *string*                                                     | :heavy_check_mark:                                           | What happened, written for the user                          |
# StreamRecordErrorResponse

Error payload returned by the legacy record-stream proxy when the downstream
streaming request fails after route middleware has passed.


## Example Usage

```typescript
import { StreamRecordErrorResponse } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `error`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Human-readable error message from the gateway or downstream stream service |
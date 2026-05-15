# MetricsRequest

Optional client-supplied telemetry.

## Example Usage

```typescript
import { MetricsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: MetricsRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `userInteractionTime`                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | Total time the user spent reviewing the response, in milliseconds.             |
| `feedbackSessionId`                                                            | *string*                                                                       | :heavy_minus_sign:                                                             | Opaque session identifier used by the client to group related feedback events. |
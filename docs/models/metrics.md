# Metrics

Optional telemetry captured alongside the feedback

## Example Usage

```typescript
import { Metrics } from "@pipeshub-ai/sdk/models";

let value: Metrics = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `timeToFeedback`                                   | *number*                                           | :heavy_minus_sign:                                 | Time from response delivery to feedback submission |
| `userInteractionTime`                              | *number*                                           | :heavy_minus_sign:                                 | Total time the user spent reviewing the response   |
| `feedbackSessionId`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `userAgent`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `platform`                                         | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
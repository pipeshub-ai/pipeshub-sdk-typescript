# ToggleMetricsCollectionRequest

Request payload

## Example Usage

```typescript
import { ToggleMetricsCollectionRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ToggleMetricsCollectionRequest = {
  enableMetricCollection: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `enableMetricCollection`                                   | *boolean*                                                  | :heavy_check_mark:                                         | Set to true to enable metrics collection, false to disable | true                                                       |
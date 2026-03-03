# GetAvailableFeatureFlagsResponse

Feature flags retrieved

## Example Usage

```typescript
import { GetAvailableFeatureFlagsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetAvailableFeatureFlagsResponse = {
  flags: [
    {
      key: "ENABLE_BETA_CONNECTORS",
      label: "Enable Beta Connectors",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `flags`                                              | [models.FeatureFlag](../../models/feature-flag.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
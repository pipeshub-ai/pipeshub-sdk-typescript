# FeatureFlag

Platform feature flag definition

## Example Usage

```typescript
import { FeatureFlag } from "@pipeshub-ai/sdk/models";

let value: FeatureFlag = {
  key: "ENABLE_BETA_CONNECTORS",
  label: "Enable Beta Connectors",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `key`                    | *string*                 | :heavy_minus_sign:       | Unique feature flag key  | ENABLE_BETA_CONNECTORS   |
| `label`                  | *string*                 | :heavy_minus_sign:       | Display label            | Enable Beta Connectors   |
| `description`            | *string*                 | :heavy_minus_sign:       | Feature flag description |                          |
| `defaultEnabled`         | *boolean*                | :heavy_minus_sign:       | Default enabled state    |                          |
# Retention

## Example Usage

```typescript
import { Retention } from "@pipeshub-ai/sdk/models";

let value: Retention = {
  minAgeMs: 308273,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `minAgeMs`                                                       | *number*                                                         | :heavy_check_mark:                                               | Items stay at least this long before the cleanup may remove them |
# Amount

`min` must not be after `max`.

## Example Usage

```typescript
import { Amount } from "@pipeshub-ai/sdk/models";

let value: Amount = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `min`                            | *number*                         | :heavy_minus_sign:               | N/A                              |
| `max`                            | *number*                         | :heavy_minus_sign:               | N/A                              |
| `currency`                       | *string*                         | :heavy_minus_sign:               | ISO 4217 code, case-insensitive. |
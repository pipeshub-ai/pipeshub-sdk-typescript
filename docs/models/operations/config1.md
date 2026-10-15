# Config1

OAuth app fields to change, merged over the saved ones. Keys follow
the connector type's OAuth fields; a masked secret sent back as
returned is ignored, so the saved value is kept.


## Example Usage

```typescript
import { Config1 } from "@pipeshub-ai/sdk/models/operations";

let value: Config1 = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `clientId`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `clientSecret`         | *string*               | :heavy_minus_sign:     | N/A                    |
| `tenantId`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
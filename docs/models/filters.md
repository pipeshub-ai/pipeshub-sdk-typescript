# Filters

## Example Usage

```typescript
import { Filters } from "@pipeshub-ai/sdk/models";

let value: Filters = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `apps`                                    | [models.AppType](../models/app-type.md)[] | :heavy_minus_sign:                        | Filter by application types               |
| `kb`                                      | *string*[]                                | :heavy_minus_sign:                        | Filter by knowledge base IDs              |
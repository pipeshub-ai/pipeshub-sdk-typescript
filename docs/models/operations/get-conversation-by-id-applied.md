# GetConversationByIdApplied

## Example Usage

```typescript
import { GetConversationByIdApplied } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdApplied = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `filters`                                                  | *string*[]                                                 | :heavy_minus_sign:                                         | Names of the filters/parameters that were actually applied |
| `values`                                                   | Record<string, *any*>                                      | :heavy_minus_sign:                                         | Map of applied filter name to the value that was applied   |
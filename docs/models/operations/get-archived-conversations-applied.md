# GetArchivedConversationsApplied

## Example Usage

```typescript
import { GetArchivedConversationsApplied } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsApplied = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `filters`                                       | *string*[]                                      | :heavy_minus_sign:                              | Names of filters that were applied              |
| `values`                                        | Record<string, *any*>                           | :heavy_minus_sign:                              | Map of applied filter name to its current value |
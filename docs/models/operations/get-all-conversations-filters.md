# GetAllConversationsFilters

Filter introspection block. `applied` summarises the
filters active on this request; `available` catalogues
every supported filter with its current value and whether
it is applied.


## Example Usage

```typescript
import { GetAllConversationsFilters } from "@pipeshub-ai/sdk/models/operations";

let value: GetAllConversationsFilters = {
  applied: {
    filters: [],
    values: {},
  },
  available: {
    shared: {},
    tags: {},
    minMessages: {},
    search: {},
    pagination: {},
    sorting: {},
    dateFilters: {},
    messageFilters: {},
    sortingMessages: {},
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `applied`                                                                                             | [operations.GetAllConversationsApplied](../../models/operations/get-all-conversations-applied.md)     | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `available`                                                                                           | [operations.GetAllConversationsAvailable](../../models/operations/get-all-conversations-available.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
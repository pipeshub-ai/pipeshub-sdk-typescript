# AppliedFilters

Rich filter state selected by the user, used for display and persistence only.
This mirrors the active selection shown in the UI and is distinct from the
machine-readable `filters` field used for retrieval scoping.


## Example Usage

```typescript
import { AppliedFilters } from "@pipeshub-ai/sdk/models";

let value: AppliedFilters = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `apps`                                                         | [models.AppliedFilterNode](../models/applied-filter-node.md)[] | :heavy_minus_sign:                                             | Applied app/connector filter nodes                             |
| `kb`                                                           | [models.AppliedFilterNode](../models/applied-filter-node.md)[] | :heavy_minus_sign:                                             | Applied knowledge-base filter nodes                            |
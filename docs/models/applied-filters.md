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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `apps`                                                                 | *models.App*[]                                                         | :heavy_minus_sign:                                                     | Applied app/connector filter nodes                                     |
| `kb`                                                                   | *models.Kb*[]                                                          | :heavy_minus_sign:                                                     | Applied knowledge-base filter nodes                                    |
| `recordGroups`                                                         | *models.RecordGroup*[]                                                 | :heavy_minus_sign:                                                     | Applied record-group filter nodes                                      |
| `records`                                                              | *models.RecordT*[]                                                     | :heavy_minus_sign:                                                     | Applied folder and record filter nodes (each with everything under it) |
| `recordsExact`                                                         | *models.RecordsExact*[]                                                | :heavy_minus_sign:                                                     | Applied record filter nodes selected alone                             |
# SemanticSearchTimelinePeriod

## Example Usage

```typescript
import { SemanticSearchTimelinePeriod } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchTimelinePeriod = {
  label: "March 2026 (2026-03-01 to 2026-03-31)",
  start: new Date("2025-03-15"),
  end: new Date("2024-02-17"),
  records: 117797,
  matches: 60578,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `label`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | March 2026 (2026-03-01 to 2026-03-31)                                                                |
| `start`                                                                                              | [Date](../types/rfcdate.md)                                                                          | :heavy_check_mark:                                                                                   | First day of the period. `null` for the last bucket, of matches whose record has no source date.     |                                                                                                      |
| `end`                                                                                                | [Date](../types/rfcdate.md)                                                                          | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `records`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | Records with matches in this period. `0` may only mean nothing matched this query then.              |                                                                                                      |
| `matches`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `searchFailed`                                                                                       | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | This period's own search failed; any matches shown come from the search of the whole span.           |                                                                                                      |
| `searchIncomplete`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The search reached only part of the index for this period, so a record missing here may still exist. |                                                                                                      |
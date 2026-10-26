# SemanticSearchTimeline

Present only on a search run as a timeline: one with `timeline` set, or one over a span
of more than 31 days with it left out. `searchResults` then come period by period,
oldest first, and by record date within a period; each hit's `timelinePeriod` is its
period's index in `periods`.


## Example Usage

```typescript
import { SemanticSearchTimeline } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchTimeline = {
  dateField: "created",
  start: new Date("2025-06-18"),
  end: new Date("2024-03-01"),
  periods: [],
  notes: [],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `dateField`                                                                                                                          | [models.DateField](../models/date-field.md)                                                                                          | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `automatic`                                                                                                                          | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | `true` when the caller left `timeline` out and the span was long enough to run as a<br/>timeline; `false` when the caller asked for it.<br/> |
| `start`                                                                                                                              | [Date](../types/rfcdate.md)                                                                                                          | :heavy_check_mark:                                                                                                                   | First day of the span searched.                                                                                                      |
| `end`                                                                                                                                | [Date](../types/rfcdate.md)                                                                                                          | :heavy_check_mark:                                                                                                                   | Last day of the span searched, inclusive.                                                                                            |
| `periods`                                                                                                                            | [models.SemanticSearchTimelinePeriod](../models/semantic-search-timeline-period.md)[]                                                | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `notes`                                                                                                                              | *string*[]                                                                                                                           | :heavy_check_mark:                                                                                                                   | Plain-language notes on the span, such as the start chosen when none was given.                                                      |
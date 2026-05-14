# SemanticSearchHistoryAppliedDateRange

Echoed back only when the caller passed `startDate` and/or `endDate`.
Each bound is an ISO 8601 string when set; the field is absent when
the corresponding query param was omitted (utils.ts:480-486 reads
`appliedFilters.createdAt.$gte?.toISOString()` directly, so missing
bounds become `undefined` and drop out of the JSON).


## Example Usage

```typescript
import { SemanticSearchHistoryAppliedDateRange } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryAppliedDateRange = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
# SemanticSearchAppliedFilters

Present when KB filters were applied to the search request.

## Example Usage

```typescript
import { SemanticSearchAppliedFilters } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchAppliedFilters = {
  kb: [],
  kbCount: 864389,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `kb`               | *string*[]         | :heavy_check_mark: | N/A                |
| `kbCount`          | *number*           | :heavy_check_mark: | N/A                |
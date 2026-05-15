# SemanticSearchHistoryFilterToggle

Generic "filter X is available, current value is Y" block used for
`shared`, `tags`, `minMessages`, `search`, and `messageType`. Either
`type` (free-form value) or `values` (enum of allowed strings) is
present, not both. `current` is the caller-supplied value passed
through from `req.query`, hence string-or-null even when `type` is
`'number'`.


## Example Usage

```typescript
import { SemanticSearchHistoryFilterToggle } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryFilterToggle = {
  description: "once ferociously short-term abnormally muddy that",
  current: "<value>",
  applied: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *string*           | :heavy_minus_sign: | N/A                |
| `values`           | *string*[]         | :heavy_minus_sign: | N/A                |
| `description`      | *string*           | :heavy_check_mark: | N/A                |
| `current`          | *string*           | :heavy_check_mark: | N/A                |
| `applied`          | *boolean*          | :heavy_check_mark: | N/A                |
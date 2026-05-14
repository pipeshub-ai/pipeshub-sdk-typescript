# PersistedSemanticSearchBoundingBox

Bounding box subdocument embedded in persisted citation metadata.
`boundingBoxSchema` does not set `_id: false`, so Mongoose auto-injects an `_id`.


## Example Usage

```typescript
import { PersistedSemanticSearchBoundingBox } from "@pipeshub-ai/sdk/models";

let value: PersistedSemanticSearchBoundingBox = {
  id: "<value>",
  x: 9472.03,
  y: 1979.69,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `x`                | *number*           | :heavy_check_mark: | N/A                |
| `y`                | *number*           | :heavy_check_mark: | N/A                |
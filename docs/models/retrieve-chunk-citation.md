# RetrieveChunkCitation

## Example Usage

```typescript
import { RetrieveChunkCitation } from "@pipeshub-ai/sdk/models";

let value: RetrieveChunkCitation = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `url`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | Deep link to the passage (a `#:~:text=` fragment where the source supports one). |
| `recordUrl`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Link to the record itself.                                                       |
| `pageNum`                                                                        | *number*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `blockIndex`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
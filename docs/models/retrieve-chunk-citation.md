# RetrieveChunkCitation

## Example Usage

```typescript
import { RetrieveChunkCitation } from "@pipeshub-ai/sdk/models";

let value: RetrieveChunkCitation = {
  url: "https://flickering-switchboard.info",
  recordUrl: "https://gorgeous-doorpost.info/",
  pageNum: [
    63019,
  ],
  blockIndex: 704603,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | Deep link to the passage (a `#:~:text=` fragment where the source supports one). |
| `recordUrl`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Link to the record itself.                                                       |
| `pageNum`                                                                        | *number*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `blockIndex`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
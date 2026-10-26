# RetrieveResponse

## Example Usage

```typescript
import { RetrieveResponse } from "@pipeshub-ai/sdk/models";

let value: RetrieveResponse = {
  chunks: [
    {
      id: "<id>",
      text: "<value>",
      record: {},
      citation: {},
    },
  ],
  incomplete: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `chunks`                                                                     | [models.RetrieveChunk](../models/retrieve-chunk.md)[]                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `incomplete`                                                                 | *boolean*                                                                    | :heavy_check_mark:                                                           | True when part of the search could not run (for example a source timed out). |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Why `chunks` is empty, when it is.                                           |
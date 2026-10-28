# RetrieveResponse

## Example Usage

```typescript
import { RetrieveResponse } from "@pipeshub-ai/sdk/models";

let value: RetrieveResponse = {
  chunks: [
    {
      id: "<id>",
      text: "<value>",
      record: {
        recordId: "<id>",
        name: "<value>",
        connector: "<value>",
        mimeType: "<value>",
        updatedAt: "1735625194107",
      },
      citation: {
        url: "https://impish-sediment.org",
        recordUrl: null,
        pageNum: [
          17493,
        ],
        blockIndex: 821668,
      },
    },
  ],
  incomplete: true,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The request's id, as in the `x-request-id` response header.                                                  |
| `chunks`                                                                                                     | [models.RetrieveChunk](../models/retrieve-chunk.md)[]                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `incomplete`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | True when part of the search could not run (for example a source timed out).                                 |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Why `chunks` is empty, when it is; `null` when the search gave no reason. Absent when `chunks` is not empty. |
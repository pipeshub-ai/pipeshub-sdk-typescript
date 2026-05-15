# ArchiveSearchMeta

## Example Usage

```typescript
import { ArchiveSearchMeta } from "@pipeshub-ai/sdk/models/operations";

let value: ArchiveSearchMeta = {
  requestId: "req_8f3a1b2c",
  timestamp: new Date("2026-05-10T12:34:56.789Z"),
  duration: 42,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Server-assigned request identifier for tracing. Omitted when not available.                   | req_8f3a1b2c                                                                                  |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Server timestamp when the response was produced.                                              | 2026-05-10 12:34:56.789 +0000 UTC                                                             |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Time taken to process the request, in milliseconds.                                           | 42                                                                                            |
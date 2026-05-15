# SemanticSearchHistoryMeta

`requestId` comes from `req.context?.requestId` and is omitted from
the JSON when upstream middleware did not set it.


## Example Usage

```typescript
import { SemanticSearchHistoryMeta } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchHistoryMeta = {
  timestamp: new Date("2026-08-28T02:34:45.909Z"),
  duration: 105306,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
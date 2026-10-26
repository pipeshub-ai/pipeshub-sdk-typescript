# ForkConversationResponseMeta

## Example Usage

```typescript
import { ForkConversationResponseMeta } from "@pipeshub-ai/sdk/models";

let value: ForkConversationResponseMeta = {
  timestamp: new Date("2025-01-11T08:28:43.848Z"),
  duration: 865706,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Server-side processing time in milliseconds                                                   |
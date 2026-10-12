# CreateConversationResponseMeta

## Example Usage

```typescript
import { CreateConversationResponseMeta } from "@pipeshub-ai/sdk/models";

let value: CreateConversationResponseMeta = {
  timestamp: new Date("2024-12-19T22:13:05.380Z"),
  duration: 775118,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Request correlation id. Omitted when upstream middleware did<br/>not set a request id on the context.<br/> |
| `timestamp`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Server timestamp when the response was sent.                                                       |
| `duration`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | Total handler duration in milliseconds.                                                            |
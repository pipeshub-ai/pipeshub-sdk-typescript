# AgentConversationDetailMeta

Request-scoped metadata returned by the by-id GET route. `requestId`
is omitted when upstream middleware did not attach one.


## Example Usage

```typescript
import { AgentConversationDetailMeta } from "@pipeshub-ai/sdk/models";

let value: AgentConversationDetailMeta = {
  timestamp: new Date("2026-02-12T03:37:42.646Z"),
  duration: 887919,
  conversationId: "<value>",
  messageCount: 209794,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `messageCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
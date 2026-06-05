# AgentConversationUnarchiveMeta

Request-scoped metadata returned by the unarchive route. `requestId` is
omitted when upstream middleware did not attach one.


## Example Usage

```typescript
import { AgentConversationUnarchiveMeta } from "@pipeshub-ai/sdk/models";

let value: AgentConversationUnarchiveMeta = {
  timestamp: new Date("2025-11-23T21:11:28.568Z"),
  duration: 224103,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
# AgentConversationArchiveMeta

Request-scoped metadata returned by the archive route. `requestId` is
omitted when upstream middleware did not attach one.


## Example Usage

```typescript
import { AgentConversationArchiveMeta } from "@pipeshub-ai/sdk/models";

let value: AgentConversationArchiveMeta = {
  timestamp: new Date("2024-12-05T03:24:08.254Z"),
  duration: 563847,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
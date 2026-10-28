# AgentAddMessageResponseMeta

## Example Usage

```typescript
import { AgentAddMessageResponseMeta } from "@pipeshub-ai/sdk/models";

let value: AgentAddMessageResponseMeta = {
  timestamp: new Date("2024-06-24T06:36:12.135Z"),
  duration: 97237,
  recordsUsed: 540748,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Request correlation id. Omitted when no request id was set on the context.                    |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Server timestamp when the response was sent.                                                  |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Total handler duration in milliseconds.                                                       |
| `recordsUsed`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Same value as the top-level `recordsUsed`.                                                    |
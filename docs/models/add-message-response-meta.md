# AddMessageResponseMeta

## Example Usage

```typescript
import { AddMessageResponseMeta } from "@pipeshub-ai/sdk/models";

let value: AddMessageResponseMeta = {
  timestamp: new Date("2026-07-03T13:32:59.037Z"),
  duration: 985102,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | Request correlation id. Omitted when upstream middleware did<br/>not set `req.context.requestId`.<br/> |
| `timestamp`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Server timestamp when the response was sent.                                                   |
| `duration`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | Total handler duration in milliseconds.                                                        |
| `recordsUsed`                                                                                  | *number*                                                                                       | :heavy_minus_sign:                                                                             | Same value as the top-level `recordsUsed`. Duplicated inside<br/>`meta` for client convenience.<br/> |
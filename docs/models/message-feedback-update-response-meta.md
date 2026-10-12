# MessageFeedbackUpdateResponseMeta

## Example Usage

```typescript
import { MessageFeedbackUpdateResponseMeta } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackUpdateResponseMeta = {
  requestId: "<id>",
  timestamp: new Date("2026-12-18T17:04:02.558Z"),
  duration: 294833,
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Server-side request identifier. Read from the `X-Request-ID`<br/>header when supplied, otherwise auto-generated, so this field<br/>is always present.<br/> |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `duration`                                                                                                                                     | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Server-side processing time in milliseconds.                                                                                                   |
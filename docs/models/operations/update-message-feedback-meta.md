# UpdateMessageFeedbackMeta

## Example Usage

```typescript
import { UpdateMessageFeedbackMeta } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateMessageFeedbackMeta = {
  requestId: "<id>",
  timestamp: new Date("2025-09-25T01:59:13.233Z"),
  duration: 113029,
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Server-side request identifier. Read from the<br/>`X-Request-ID` header when supplied, otherwise<br/>auto-generated, so this field is always present.<br/> |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `duration`                                                                                                                                     | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Server-side processing time in milliseconds.                                                                                                   |
# ConversationPinResponseMeta

## Example Usage

```typescript
import { ConversationPinResponseMeta } from "@pipeshub-ai/sdk/models";

let value: ConversationPinResponseMeta = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Request correlation identifier                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Response generation timestamp                                                                 |
| `duration`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Server processing time in milliseconds                                                        |
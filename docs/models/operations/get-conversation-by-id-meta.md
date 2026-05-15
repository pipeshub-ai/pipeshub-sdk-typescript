# GetConversationByIdMeta

## Example Usage

```typescript
import { GetConversationByIdMeta } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdMeta = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Server processing time in milliseconds                                                        |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `messageCount`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of messages in the conversation                                                  |
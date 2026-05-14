# UpdateConversationTitleConversationError

## Example Usage

```typescript
import { UpdateConversationTitleConversationError } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConversationTitleConversationError = {
  id: "<value>",
  message: "<value>",
  timestamp: new Date("2025-06-06T19:05:10.647Z"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Sub-document identifier auto-assigned by MongoDB.                                                         |
| `message`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `errorType`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `timestamp`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | Time the error was recorded. Server-defaulted<br/>to `Date.now` when the entry is pushed, so<br/>always present.<br/> |
| `messageId`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `stack`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `metadata`                                                                                                | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | Free-form metadata attached to this error<br/>entry (Map of Mixed in the schema).<br/>                    |
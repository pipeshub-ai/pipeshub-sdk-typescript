# ConversationPagination

Pagination over the conversation's messages. Messages are paginated backwards
(newest first), so `messageRange.start`/`messageRange.end` refer to 1-based
positions within the full message list.


## Example Usage

```typescript
import { ConversationPagination } from "@pipeshub-ai/sdk/models/operations";

let value: ConversationPagination = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `page`                                                              | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `totalCount`                                                        | *number*                                                            | :heavy_minus_sign:                                                  | Total number of messages in the conversation                        |
| `totalPages`                                                        | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `hasNextPage`                                                       | *boolean*                                                           | :heavy_minus_sign:                                                  | True if there are older messages available                          |
| `hasPrevPage`                                                       | *boolean*                                                           | :heavy_minus_sign:                                                  | True if there are newer messages available                          |
| `messageRange`                                                      | [operations.MessageRange](../../models/operations/message-range.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
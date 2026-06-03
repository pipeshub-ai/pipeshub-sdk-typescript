# AgentConversationDetailPagination

Message pagination returned inside the `conversation` object. The
handler paginates backwards from the end of the stored message array,
then sorts the selected page in memory before serialization.


## Example Usage

```typescript
import { AgentConversationDetailPagination } from "@pipeshub-ai/sdk/models";

let value: AgentConversationDetailPagination = {
  page: 655797,
  limit: 246558,
  totalCount: 284491,
  totalPages: 944351,
  hasNextPage: false,
  hasPrevPage: false,
  messageRange: {
    start: 647137,
    end: 943674,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalPages`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `hasNextPage`                                            | *boolean*                                                | :heavy_check_mark:                                       | True when older messages exist outside the returned page |
| `hasPrevPage`                                            | *boolean*                                                | :heavy_check_mark:                                       | True when newer messages exist outside the returned page |
| `messageRange`                                           | [models.MessageRange](../models/message-range.md)        | :heavy_check_mark:                                       | N/A                                                      |
# SearchArchivedConversationsRequest

## Example Usage

```typescript
import { SearchArchivedConversationsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SearchArchivedConversationsRequest = {
  search: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `search`                                                                              | *string*                                                                              | :heavy_check_mark:                                                                    | Search term to match against conversation titles and message content (max 1000 chars) |
| `page`                                                                                | *number*                                                                              | :heavy_minus_sign:                                                                    | Page number (1-indexed)                                                               |
| `limit`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | Items per page                                                                        |
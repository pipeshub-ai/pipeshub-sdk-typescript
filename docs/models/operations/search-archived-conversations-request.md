# SearchArchivedConversationsRequest

## Example Usage

```typescript
import { SearchArchivedConversationsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SearchArchivedConversationsRequest = {
  search: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `search`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Search term to match against conversation titles and message content (max 1000 chars)                                                            |
| `page`                                                                                                                                           | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Page number (1-indexed). The validator accepts any number, so a fraction such<br/>as `1.5` is not refused; it is truncated (`1.5` reads as page 1).<br/> |
| `limit`                                                                                                                                          | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Items per page. A fraction is not refused; it is truncated (`5.5` reads as 5).<br/>                                                              |
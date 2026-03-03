# GetConversationByIdRequest

## Example Usage

```typescript
import { GetConversationByIdRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdRequest = {
  conversationId: "507f1f77bcf86cd799439011",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                        | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique conversation identifier                                                                          | 507f1f77bcf86cd799439011                                                                                |
| `page`                                                                                                  | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Page number for message pagination                                                                      |                                                                                                         |
| `limit`                                                                                                 | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Number of messages per page                                                                             |                                                                                                         |
| `sortBy`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Field to sort messages by                                                                               |                                                                                                         |
| `sortOrder`                                                                                             | [operations.GetConversationByIdSortOrder](../../models/operations/get-conversation-by-id-sort-order.md) | :heavy_minus_sign:                                                                                      | Sort direction                                                                                          |                                                                                                         |
# GetProjectConversationsResponse

Paginated conversations linked to the project

## Example Usage

```typescript
import { GetProjectConversationsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetProjectConversationsResponse = {
  conversations: [],
  pagination: {},
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `conversations`                                                                                                 | [models.ConversationListItem](../../models/conversation-list-item.md)[]                                         | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `pagination`                                                                                                    | [operations.GetProjectConversationsPagination](../../models/operations/get-project-conversations-pagination.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
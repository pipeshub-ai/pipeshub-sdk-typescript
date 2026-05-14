# GetConversationByIdSorting

Sort applied to the conversation list. Field set echoes back the original list-endpoint sort options even though this endpoint returns a single conversation.

## Example Usage

```typescript
import { GetConversationByIdSorting } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdSorting = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `sortBy`                                                                                                               | [operations.GetConversationByIdSortingSortBy](../../models/operations/get-conversation-by-id-sorting-sort-by.md)       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `sortOrder`                                                                                                            | [operations.GetConversationByIdSortingSortOrder](../../models/operations/get-conversation-by-id-sorting-sort-order.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
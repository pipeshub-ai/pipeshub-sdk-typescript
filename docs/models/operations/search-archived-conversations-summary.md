# SearchArchivedConversationsSummary

## Example Usage

```typescript
import { SearchArchivedConversationsSummary } from "@pipeshub-ai/sdk/models/operations";

let value: SearchArchivedConversationsSummary = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `totalMatches`                                            | *number*                                                  | :heavy_minus_sign:                                        | Combined match count across both collections              |
| `assistantMatches`                                        | *number*                                                  | :heavy_minus_sign:                                        | Match count in the assistant (`Conversation`) collection  |
| `agentMatches`                                            | *number*                                                  | :heavy_minus_sign:                                        | Match count in the agent (`AgentConversation`) collection |
| `searchQuery`                                             | *string*                                                  | :heavy_minus_sign:                                        | Trimmed search term that was applied                      |
# ListAgentArchivedConversationsGroupedRequest

## Example Usage

```typescript
import { ListAgentArchivedConversationsGroupedRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ListAgentArchivedConversationsGroupedRequest = {};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentPage`                                                                                                                                                          | *number*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | 1-based page over agent groups. Values below 1 are read as 1 and a<br/>non-numeric value as the default; neither is refused.<br/>                                    |
| `agentLimit`                                                                                                                                                         | *number*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | Agent groups per page. Values are clamped to 1..100 and a non-numeric<br/>value is read as the default; neither is refused. Each group carries at<br/>most 5 conversations.<br/> |
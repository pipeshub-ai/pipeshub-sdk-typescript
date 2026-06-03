# AgentArchivedConversationSummary

Archive counts and bounds for the current result page returned by
`GET /agents/{agentKey}/conversations/show/archives`.


## Example Usage

```typescript
import { AgentArchivedConversationSummary } from "@pipeshub-ai/sdk/models";

let value: AgentArchivedConversationSummary = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `totalArchived`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total archived conversations matching the filter                                              |
| `oldestArchive`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Archive timestamp of the first item in the current page. Omitted when the page is empty.      |
| `newestArchive`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Archive timestamp of the last item in the current page. Omitted when the page is empty.       |
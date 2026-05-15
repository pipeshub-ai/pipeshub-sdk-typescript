# GetArchivedConversationsSummary

## Example Usage

```typescript
import { GetArchivedConversationsSummary } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsSummary = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `totalArchived`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total archived conversations matching the filter                                              |
| `oldestArchive`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Archive timestamp of the first item in the current page                                       |
| `newestArchive`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Archive timestamp of the last item in the current page                                        |
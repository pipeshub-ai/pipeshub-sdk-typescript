# AgentConversationDetailMessageCitation

Citation entry returned inside a conversation message after the
handler populates `messages.citations.citationId` and rewrites each
item to `{ citationId, citationData }`.


## Example Usage

```typescript
import { AgentConversationDetailMessageCitation } from "@pipeshub-ai/sdk/models";

let value: AgentConversationDetailMessageCitation = {};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `citationId`                                                                                                                                                                                | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `citationData`                                                                                                                                                                              | [models.Citation](../models/citation.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | A populated citation document. Represents a single chunk of source<br/>content (e.g. a passage from a document or record) referenced by an<br/>AI response, together with its provenance metadata.<br/> |
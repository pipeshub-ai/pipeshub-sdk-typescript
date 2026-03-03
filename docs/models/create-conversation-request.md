# CreateConversationRequest

Request body for creating a new AI conversation.<br><br>
<b>Query Processing:</b><br>
The query is processed through PipesHub's AI pipeline which:
<ul>
<li>Performs semantic search across indexed knowledge bases</li>
<li>Retrieves relevant context from matching documents</li>
<li>Generates a response with citations to source materials</li>
<li>Suggests follow-up questions based on the conversation</li>
</ul>


## Example Usage

```typescript
import { CreateConversationRequest } from "@pipeshub-ai/sdk/models";

let value: CreateConversationRequest = {
  query: "What are the key findings from our Q4 financial report?",
  recordIds: [
    "507f1f77bcf86cd799439011",
    "507f1f77bcf86cd799439012",
  ],
  modelKey: "gpt-4-turbo",
  modelName: "GPT-4 Turbo",
  chatMode: "balanced",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The user's question or prompt to start the conversation.<br/>Supports natural language queries of any complexity.<br/>         | What are the key findings from our Q4 financial report?                                                                        |
| `recordIds`                                                                                                                    | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | Limit the AI's knowledge scope to specific records/documents.<br/>When provided, only these records will be searched for context.<br/> | [<br/>"507f1f77bcf86cd799439011",<br/>"507f1f77bcf86cd799439012"<br/>]                                                         |
| `departments`                                                                                                                  | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | Filter by department IDs to scope the search                                                                                   |                                                                                                                                |
| `filters`                                                                                                                      | [models.Filters](../models/filters.md)                                                                                         | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `modelKey`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Identifier for the AI model configuration to use.<br/>Available models depend on organization settings.<br/>                   | gpt-4-turbo                                                                                                                    |
| `modelName`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Display name of the AI model                                                                                                   | GPT-4 Turbo                                                                                                                    |
| `chatMode`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Chat mode affecting response behavior.<br/>Different modes optimize for different use cases.<br/>                              | balanced                                                                                                                       |
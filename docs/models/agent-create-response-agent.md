# AgentCreateResponseAgent

## Example Usage

```typescript
import { AgentCreateResponseAgent } from "@pipeshub-ai/sdk/models";

let value: AgentCreateResponseAgent = {
  key: "<key>",
  name: "<value>",
  description: "astride degrease excluding huzzah upright gah too",
  startMessage: "<value>",
  systemPrompt: "<value>",
  instructions: "<value>",
  models: [
    "<value 1>",
    "<value 2>",
  ],
  tags: [
    "<value 1>",
  ],
  webSearch: {},
  isActive: true,
  isServiceAccount: true,
  createdBy: "<value>",
  updatedBy: "<value>",
  createdAtTimestamp: 843004,
  updatedAtTimestamp: 988498,
  isDeleted: true,
  toolsets: [
    {
      name: "teams",
      displayName: "Lincoln1",
      key: "<key>",
      tools: [],
    },
  ],
  knowledge: [],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `key`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `startMessage`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `systemPrompt`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `instructions`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `models`                                                                                        | *string*[]                                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `tags`                                                                                          | *string*[]                                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `webSearch`                                                                                     | [models.AgentCreateResponseAgentWebSearch](../models/agent-create-response-agent-web-search.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `isActive`                                                                                      | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `isServiceAccount`                                                                              | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdBy`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedBy`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAtTimestamp`                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAtTimestamp`                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `isDeleted`                                                                                     | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `toolsets`                                                                                      | [models.AgentCreateResponseToolset](../models/agent-create-response-toolset.md)[]               | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `knowledge`                                                                                     | [models.AgentCreateResponseKnowledge](../models/agent-create-response-knowledge.md)[]           | :heavy_check_mark:                                                                              | N/A                                                                                             |
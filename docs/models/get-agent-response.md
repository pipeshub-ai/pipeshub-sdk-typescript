# GetAgentResponse

Success envelope returned by `GET /agents/{agentKey}`.

The Node gateway forwards the backend response as an envelope with a
top-level status/message and the detailed agent projection nested under
`agent`.


## Example Usage

```typescript
import { GetAgentResponse } from "@pipeshub-ai/sdk/models";

let value: GetAgentResponse = {
  status: "success",
  message: "Agent retrieved successfully",
  agent: {
    id: "agentInstances/e6f848ca-e2ab-4594-9925-e1136629f474",
    key: "e6f848ca-e2ab-4594-9925-e1136629f474",
    rev: "_lkNlcOm---",
    name: "Customer Support Assistant",
    createdBy: "<value>",
    models: [
      {
        modelKey: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
        modelName: "gpt-5.4-mini",
        provider: "azureOpenAI",
        isReasoning: true,
        isMultimodal: true,
        isDefault: true,
        modelType: "llm",
        modelFriendlyName: "GPT 5.4 mini",
      },
    ],
    toolsets: [],
    knowledge: [
      {},
    ],
    shareWithOrg: false,
    webSearch: {
      provider: "serper",
    },
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    createdAtTimestamp: 573995,
    updatedAtTimestamp: 586565,
    isActive: true,
    isDeleted: true,
    isServiceAccount: true,
    accessType: "INDIVIDUAL",
    userRole: "OWNER",
    canView: false,
    canShare: false,
    canEdit: false,
    canDelete: false,
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `status`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | success                                                                                               |
| `message`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | Agent retrieved successfully                                                                          |
| `agent`                                                                                               | [models.Agent](../models/agent.md)                                                                    | :heavy_check_mark:                                                                                    | Detailed agent projection returned by agent detail-style endpoints such<br/>as `GET /agents/{agentKey}`.<br/> |                                                                                                       |
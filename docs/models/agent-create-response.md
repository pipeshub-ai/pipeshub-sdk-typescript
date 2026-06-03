# AgentCreateResponse

## Example Usage

```typescript
import { AgentCreateResponse } from "@pipeshub-ai/sdk/models";

let value: AgentCreateResponse = {
  status: "partial_success",
  message: "<value>",
  agent: {
    key: "<key>",
    name: "<value>",
    description: "helplessly gah ick",
    startMessage: "<value>",
    systemPrompt: "<value>",
    instructions: null,
    models: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    webSearch: {},
    isActive: false,
    isServiceAccount: true,
    createdBy: "<value>",
    updatedBy: "<value>",
    createdAtTimestamp: 854825,
    updatedAtTimestamp: 631382,
    isDeleted: true,
    toolsets: [
      {
        name: "teams",
        displayName: "Lincoln1",
        key: "<key>",
        tools: [],
      },
    ],
    knowledge: [
      {
        connectorId: "<id>",
        key: "<key>",
        filters: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `status`                                                                      | [models.AgentCreateResponseStatus](../models/agent-create-response-status.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `message`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `agent`                                                                       | [models.AgentCreateResponseAgent](../models/agent-create-response-agent.md)   | :heavy_check_mark:                                                            | N/A                                                                           |
| `warnings`                                                                    | [models.AgentCreateWarning](../models/agent-create-warning.md)[]              | :heavy_minus_sign:                                                            | N/A                                                                           |
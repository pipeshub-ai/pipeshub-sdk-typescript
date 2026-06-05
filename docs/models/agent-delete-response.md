# AgentDeleteResponse

## Example Usage

```typescript
import { AgentDeleteResponse } from "@pipeshub-ai/sdk/models";

let value: AgentDeleteResponse = {
  status: "success",
  message: "Agent deleted successfully",
  deleted: {
    agents: 1,
    toolsets: 0,
    tools: 0,
    knowledge: 0,
    edges: 0,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `status`                                                                      | [models.AgentDeleteResponseStatus](../models/agent-delete-response-status.md) | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `message`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | Agent deleted successfully                                                    |
| `deleted`                                                                     | [models.Deleted](../models/deleted.md)                                        | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
# UpdateAgentRequest

## Example Usage

```typescript
import { UpdateAgentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentRequest = {
  agentKey: "customer-support-agent",
  body: {
    name: "Renamed Agent",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `agentKey`                                                        | *string*                                                          | :heavy_check_mark:                                                | Unique agent identifier                                           | customer-support-agent                                            |
| `body`                                                            | [models.AgentUpdateRequest](../../models/agent-update-request.md) | :heavy_check_mark:                                                | Partial agent configuration fields to update                      |                                                                   |
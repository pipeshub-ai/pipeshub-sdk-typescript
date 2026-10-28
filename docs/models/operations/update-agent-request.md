# UpdateAgentRequest

## Example Usage

```typescript
import { UpdateAgentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentRequest = {
  agentKey: "customer-support-agent",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `agentKey`                                                        | *string*                                                          | :heavy_check_mark:                                                | Unique agent identifier                                           | customer-support-agent                                            |
| `body`                                                            | [models.AgentUpdateRequest](../../models/agent-update-request.md) | :heavy_minus_sign:                                                | Partial agent configuration fields to update                      |                                                                   |
# DeleteAgentRequest

## Example Usage

```typescript
import { DeleteAgentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteAgentRequest = {
  agentKey: "customer-support-agent",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `agentKey`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unique agent identifier (gateway Zod requires non-empty string). | customer-support-agent                                           |
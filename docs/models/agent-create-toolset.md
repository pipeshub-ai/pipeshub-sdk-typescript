# AgentCreateToolset

## Example Usage

```typescript
import { AgentCreateToolset } from "@pipeshub-ai/sdk/models";

let value: AgentCreateToolset = {
  name: "slack",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `name`                                                                    | [models.AgentCreateToolsetName](../models/agent-create-toolset-name.md)   | :heavy_check_mark:                                                        | Registered toolset name (lowercase) accepted by the create-agent gateway. |
| `displayName`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `type`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `instanceId`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `instanceName`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `tools`                                                                   | [models.AgentCreateToolRef](../models/agent-create-tool-ref.md)[]         | :heavy_minus_sign:                                                        | N/A                                                                       |
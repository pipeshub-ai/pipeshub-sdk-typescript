# AgentCreateResponseToolset

## Example Usage

```typescript
import { AgentCreateResponseToolset } from "@pipeshub-ai/sdk/models";

let value: AgentCreateResponseToolset = {
  name: "redshift",
  displayName: "Brenda.Terry",
  key: "<key>",
  tools: [],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `name`                                                                      | [models.AgentCreateToolsetName](../models/agent-create-toolset-name.md)     | :heavy_check_mark:                                                          | Registered toolset name (lowercase) accepted by the create-agent gateway.   |
| `displayName`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Human-readable toolset product label (for example `Jira` or `Slack`).       |
| `key`                                                                       | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `tools`                                                                     | [models.AgentCreateResponseTool](../models/agent-create-response-tool.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |
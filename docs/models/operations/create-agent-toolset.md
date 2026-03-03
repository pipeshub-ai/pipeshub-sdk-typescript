# CreateAgentToolset

## Example Usage

```typescript
import { CreateAgentToolset } from "@pipeshub-ai/sdk/models/operations";

let value: CreateAgentToolset = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `instanceId`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Admin-created toolset instance ID                                            |
| `instanceName`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Human-friendly instance name                                                 |
| `tools`                                                                      | [operations.CreateAgentTool](../../models/operations/create-agent-tool.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
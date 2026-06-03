# Toolset

## Example Usage

```typescript
import { Toolset } from "@pipeshub-ai/sdk/models";

let value: Toolset = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `name`                                                                  | [models.AgentCreateToolsetName](../models/agent-create-toolset-name.md) | :heavy_minus_sign:                                                      | Integration / toolset type key.                                         |
| `displayName`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Human-readable toolset product label (for example `Jira` or `Slack`).   |
| `type`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `instanceId`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | Admin-created toolset instance id                                       |
| `instanceName`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Human-readable instance label (e.g. sidebar instance name)              |
| `iconPath`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Optional branded icon URL or path                                       |
| `tools`                                                                 | [models.Tool](../models/tool.md)[]                                      | :heavy_minus_sign:                                                      | N/A                                                                     |
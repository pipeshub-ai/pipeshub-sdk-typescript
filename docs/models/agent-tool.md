# AgentTool

A tool that agents can use to perform actions

## Example Usage

```typescript
import { AgentTool } from "@pipeshub-ai/sdk/models";

let value: AgentTool = {
  key: "web-search",
  name: "Web Search",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `key`                                           | *string*                                        | :heavy_minus_sign:                              | Unique tool identifier                          | web-search                                      |
| `name`                                          | *string*                                        | :heavy_minus_sign:                              | Display name                                    | Web Search                                      |
| `description`                                   | *string*                                        | :heavy_minus_sign:                              | What the tool does                              |                                                 |
| `inputSchema`                                   | [models.InputSchema](../models/input-schema.md) | :heavy_minus_sign:                              | JSON Schema for tool inputs                     |                                                 |
| `isEnabled`                                     | *boolean*                                       | :heavy_minus_sign:                              | Whether tool is currently available             |                                                 |
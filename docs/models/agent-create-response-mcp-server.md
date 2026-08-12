# AgentCreateResponseMcpServer

## Example Usage

```typescript
import { AgentCreateResponseMcpServer } from "@pipeshub-ai/sdk/models";

let value: AgentCreateResponseMcpServer = {
  name: "<value>",
  displayName: "Leonie.Metz",
  key: "<key>",
  tools: [
    {
      name: "<value>",
      fullName: "Georgia Veum",
      key: "<key>",
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `displayName`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | Human-readable MCP server product label (for example `Jira MCP`).                               |
| `key`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `tools`                                                                                         | [models.AgentCreateResponseMcpServerTool](../models/agent-create-response-mcp-server-tool.md)[] | :heavy_check_mark:                                                                              | N/A                                                                                             |
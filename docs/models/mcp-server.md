# McpServer

MCP server instance linked to an agent, as projected by the graph
store on `GET /agents/{agentKey}` and `GET /agents` — same shape as
`Toolset`. MCP server nodes carry no secrets, only the attach-time
snapshot of `instanceId`/`typeId`/`name`.


## Example Usage

```typescript
import { McpServer } from "@pipeshub-ai/sdk/models";

let value: McpServer = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `key`                                                                       | *string*                                                                    | :heavy_minus_sign:                                                          | MCP server instance node key in the backing graph store.                    |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | MCP server attachment name (attach-time snapshot).                          |
| `displayName`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Human-readable MCP server product label (for example `Jira MCP`).           |
| `typeId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Catalog server type id, when this instance came from a registered template. |
| `instanceId`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | Admin-created MCP server instance id.                                       |
| `tools`                                                                     | [models.McpServerTool](../models/mcp-server-tool.md)[]                      | :heavy_minus_sign:                                                          | N/A                                                                         |
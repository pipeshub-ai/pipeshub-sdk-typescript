# HandleMCPRequestRequest

JSON-RPC 2.0 request object

## Example Usage

```typescript
import { HandleMCPRequestRequest } from "@pipeshub-ai/sdk/models/operations";

let value: HandleMCPRequestRequest = {
  jsonrpc: "2.0",
  method: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `jsonrpc`                                                               | [operations.JsonrpcRequest](../../models/operations/jsonrpc-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `id`                                                                    | *operations.IdRequest*                                                  | :heavy_minus_sign:                                                      | N/A                                                                     |
| `method`                                                                | *string*                                                                | :heavy_check_mark:                                                      | MCP method (e.g. initialize, tools/list, tools/call)                    |
| `params`                                                                | [operations.Params](../../models/operations/params.md)                  | :heavy_minus_sign:                                                      | N/A                                                                     |
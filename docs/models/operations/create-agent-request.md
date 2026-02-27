# CreateAgentRequest

Request payload

## Example Usage

```typescript
import { CreateAgentRequest } from "pipeshub/models/operations";

let value: CreateAgentRequest = {
  name: "Product Support Agent",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | Agent display name                                                                        | Product Support Agent                                                                     |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | What the agent does                                                                       |                                                                                           |
| `systemPrompt`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | System instructions for the agent                                                         |                                                                                           |
| `tools`                                                                                   | *string*[]                                                                                | :heavy_minus_sign:                                                                        | Tool keys the agent can use                                                               |                                                                                           |
| `knowledgeBases`                                                                          | *string*[]                                                                                | :heavy_minus_sign:                                                                        | Knowledge base IDs to access                                                              |                                                                                           |
| `modelConfig`                                                                             | [operations.CreateAgentModelConfig](../../models/operations/create-agent-model-config.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `isPublic`                                                                                | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Make agent available to all org users                                                     |                                                                                           |
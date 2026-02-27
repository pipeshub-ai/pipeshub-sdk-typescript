# UpdateAgentRequestBody

Request body for Update agent

## Example Usage

```typescript
import { UpdateAgentRequestBody } from "pipeshub/models/operations";

let value: UpdateAgentRequestBody = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `systemPrompt`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `tools`                                                                                   | *string*[]                                                                                | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `knowledgeBases`                                                                          | *string*[]                                                                                | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `modelConfig`                                                                             | [operations.UpdateAgentModelConfig](../../models/operations/update-agent-model-config.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `isPublic`                                                                                | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | N/A                                                                                       |
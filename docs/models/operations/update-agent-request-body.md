# UpdateAgentRequestBody

Request body for Update agent

## Example Usage

```typescript
import { UpdateAgentRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentRequestBody = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `systemPrompt`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `startMessage`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `instructions`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `models`                                                                               | *operations.UpdateAgentModelUnion*[]                                                   | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `toolsets`                                                                             | [operations.UpdateAgentToolset](../../models/operations/update-agent-toolset.md)[]     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `knowledge`                                                                            | [operations.UpdateAgentKnowledge](../../models/operations/update-agent-knowledge.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `isPublic`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `shareWithOrg`                                                                         | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
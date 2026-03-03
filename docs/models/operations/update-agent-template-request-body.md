# UpdateAgentTemplateRequestBody

Request body for Update agent template

## Example Usage

```typescript
import { UpdateAgentTemplateRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentTemplateRequestBody = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `category`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `defaultSystemPrompt`                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `recommendedTools`                                                                                           | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `configSchema`                                                                                               | [operations.UpdateAgentTemplateConfigSchema](../../models/operations/update-agent-template-config-schema.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `isPublic`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
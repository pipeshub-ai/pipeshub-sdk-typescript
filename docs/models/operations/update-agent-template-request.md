# UpdateAgentTemplateRequest

## Example Usage

```typescript
import { UpdateAgentTemplateRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAgentTemplateRequest = {
  templateId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `body`                                                                                                     | [operations.UpdateAgentTemplateRequestBody](../../models/operations/update-agent-template-request-body.md) | :heavy_check_mark:                                                                                         | Request body for Update agent template                                                                     |
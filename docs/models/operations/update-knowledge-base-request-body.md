# UpdateKnowledgeBaseRequestBody

The new name. `kbName` is the only field and it is required.

## Example Usage

```typescript
import { UpdateKnowledgeBaseRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateKnowledgeBaseRequestBody = {
  kbName: "Updated Documentation Hub",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `kbName`                                                                                                                        | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | New name for the knowledge base. Whitespace around it is removed first, so<br/>a name made only of whitespace is refused as empty.<br/> | Updated Documentation Hub                                                                                                       |
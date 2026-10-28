# CreateKnowledgeBaseRequest

Request payload

## Example Usage

```typescript
import { CreateKnowledgeBaseRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateKnowledgeBaseRequest = {
  kbName: "Product Documentation",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `kbName`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Name of the knowledge base. Leading and trailing whitespace is removed<br/>first, so a name made only of whitespace is refused as empty.<br/> | Product Documentation                                                                                                                 |
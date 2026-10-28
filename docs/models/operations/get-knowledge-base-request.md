# GetKnowledgeBaseRequest

## Example Usage

```typescript
import { GetKnowledgeBaseRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetKnowledgeBaseRequest = {
  kbId: "8a095180-2989-4018-b448-70eb75fba1c7",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Knowledge base ID (non-empty string). It is not checked to be a UUID: any other<br/>value is looked up and answered `404`.<br/> | 8a095180-2989-4018-b448-70eb75fba1c7                                                                                    |
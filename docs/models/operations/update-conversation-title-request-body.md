# UpdateConversationTitleRequestBody

Request payload

## Example Usage

```typescript
import { UpdateConversationTitleRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateConversationTitleRequestBody = {
  title: "Q4 Sales Analysis Discussion",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                                                     | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | New conversation title. Surrounding whitespace is trimmed before<br/>validation, so a title of only whitespace is refused with `400`<br/>`VALIDATION_ERROR` ("Title is required").<br/> | Q4 Sales Analysis Discussion                                                                                                                                                |
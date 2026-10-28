# HandleOAuthCallbackRequest

## Example Usage

```typescript
import { HandleOAuthCallbackRequest } from "@pipeshub-ai/sdk/models/operations";

let value: HandleOAuthCallbackRequest = {
  code: "<value>",
  state: "Massachusetts",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                              | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Authorization code from provider. A missing, empty or blank value is<br/>refused with `400`, even when the provider only sent `error`.<br/> |
| `state`                                                                                                                             | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | State parameter (contains connector ID). A missing, empty or blank value is refused with `400`.                                     |
| `error`                                                                                                                             | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Error code if authorization failed                                                                                                  |
| `baseUrl`                                                                                                                           | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Origin prefixed to the returned `redirectUrl`                                                                                       |
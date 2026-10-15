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

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `code`                                  | *string*                                | :heavy_check_mark:                      | Authorization code from provider        |
| `state`                                 | *string*                                | :heavy_check_mark:                      | State parameter (contains connector ID) |
| `error`                                 | *string*                                | :heavy_minus_sign:                      | Error code if authorization failed      |
| `baseUrl`                               | *string*                                | :heavy_minus_sign:                      | Base URL for redirect                   |
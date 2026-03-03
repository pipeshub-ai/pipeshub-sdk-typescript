# HandleOAuthCallbackRequest

## Example Usage

```typescript
import { HandleOAuthCallbackRequest } from "@pipeshub-ai/sdk/models/operations";

let value: HandleOAuthCallbackRequest = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `code`                                  | *string*                                | :heavy_minus_sign:                      | Authorization code from provider        |
| `state`                                 | *string*                                | :heavy_minus_sign:                      | State parameter (contains connector ID) |
| `error`                                 | *string*                                | :heavy_minus_sign:                      | Error code if authorization failed      |
| `baseUrl`                               | *string*                                | :heavy_minus_sign:                      | Base URL for redirect                   |
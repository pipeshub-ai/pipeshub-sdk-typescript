# GetOAuthAuthorizationUrlResponse

Authorization URL generated

## Example Usage

```typescript
import { GetOAuthAuthorizationUrlResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthAuthorizationUrlResponse = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `success`                      | *boolean*                      | :heavy_minus_sign:             | N/A                            |
| `authorizationUrl`             | *string*                       | :heavy_minus_sign:             | Redirect user to this URL      |
| `state`                        | *string*                       | :heavy_minus_sign:             | State parameter for validation |
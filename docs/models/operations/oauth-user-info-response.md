# OauthUserInfoResponse

## Example Usage

```typescript
import { OauthUserInfoResponse } from "@pipeshub-ai/sdk/models/operations";

let value: OauthUserInfoResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    userId: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `headers`                                                                 | Record<string, *string*[]>                                                | :heavy_check_mark:                                                        | N/A                                                                       |
| `result`                                                                  | [models.OAuthUserInfoResponse](../../models/o-auth-user-info-response.md) | :heavy_check_mark:                                                        | N/A                                                                       |
# UpdateOAuthAppRequest

## Example Usage

```typescript
import { UpdateOAuthAppRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOAuthAppRequest = {
  appId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `appId`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | OAuth app ID                                                              |
| `body`                                                                    | [models.UpdateOAuthAppRequest](../../models/update-o-auth-app-request.md) | :heavy_check_mark:                                                        | Request payload                                                           |
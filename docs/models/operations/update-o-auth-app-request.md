# UpdateOAuthAppRequest

## Example Usage

```typescript
import { UpdateOAuthAppRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOAuthAppRequest = {
  appId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | OAuth app ID                                                                                             |
| `body`                                                                                                   | [models.UpdateOAuthAppRequest](../../models/update-o-auth-app-request.md)                                | :heavy_minus_sign:                                                                                       | Fields to change. A request with no body, or `{}`, is accepted and changes nothing (`200` with the app). |
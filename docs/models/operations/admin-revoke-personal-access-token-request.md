# AdminRevokePersonalAccessTokenRequest

## Example Usage

```typescript
import { AdminRevokePersonalAccessTokenRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AdminRevokePersonalAccessTokenRequest = {
  tokenId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `tokenId`                                                     | *string*                                                      | :heavy_check_mark:                                            | Personal access token ID                                      |
| `body`                                                        | [models.RevokePatRequest](../../models/revoke-pat-request.md) | :heavy_minus_sign:                                            | Optional request body for Admin revoke personal access token  |
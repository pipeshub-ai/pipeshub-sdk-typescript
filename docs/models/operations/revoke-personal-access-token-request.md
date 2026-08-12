# RevokePersonalAccessTokenRequest

## Example Usage

```typescript
import { RevokePersonalAccessTokenRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RevokePersonalAccessTokenRequest = {
  tokenId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `tokenId`                                                     | *string*                                                      | :heavy_check_mark:                                            | Personal access token ID                                      |
| `body`                                                        | [models.RevokePatRequest](../../models/revoke-pat-request.md) | :heavy_minus_sign:                                            | Optional request body for Revoke personal access token        |
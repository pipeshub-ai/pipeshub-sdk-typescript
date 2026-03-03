# DeleteKBPermissionsRequest

## Example Usage

```typescript
import { DeleteKBPermissionsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteKBPermissionsRequest = {
  kbId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `body`                                                                                                     | [operations.DeleteKBPermissionsRequestBody](../../models/operations/delete-kb-permissions-request-body.md) | :heavy_check_mark:                                                                                         | Request body for Remove permissions                                                                        |
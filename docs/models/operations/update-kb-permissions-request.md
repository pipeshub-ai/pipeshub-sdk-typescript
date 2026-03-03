# UpdateKBPermissionsRequest

## Example Usage

```typescript
import { UpdateKBPermissionsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateKBPermissionsRequest = {
  kbId: "<id>",
  body: {
    role: "OWNER",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `body`                                                                                                     | [operations.UpdateKBPermissionsRequestBody](../../models/operations/update-kb-permissions-request-body.md) | :heavy_check_mark:                                                                                         | Request body for Update permissions                                                                        |
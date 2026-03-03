# CreateKBPermissionRequest

## Example Usage

```typescript
import { CreateKBPermissionRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateKBPermissionRequest = {
  kbId: "<id>",
  body: {
    role: "COMMENTER",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `body`                                                                                                   | [operations.CreateKBPermissionRequestBody](../../models/operations/create-kb-permission-request-body.md) | :heavy_check_mark:                                                                                       | Request payload                                                                                          |
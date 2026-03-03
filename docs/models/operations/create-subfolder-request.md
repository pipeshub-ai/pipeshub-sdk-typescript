# CreateSubfolderRequest

## Example Usage

```typescript
import { CreateSubfolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateSubfolderRequest = {
  kbId: "<id>",
  folderId: "<id>",
  body: {
    folderName: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `folderId`                                                                                        | *string*                                                                                          | :heavy_check_mark:                                                                                | Parent folder ID                                                                                  |
| `body`                                                                                            | [operations.CreateSubfolderRequestBody](../../models/operations/create-subfolder-request-body.md) | :heavy_check_mark:                                                                                | Request payload                                                                                   |
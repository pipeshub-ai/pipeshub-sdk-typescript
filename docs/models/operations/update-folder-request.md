# UpdateFolderRequest

## Example Usage

```typescript
import { UpdateFolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateFolderRequest = {
  kbId: "<id>",
  folderId: "<id>",
  body: {
    folderName: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `kbId`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `folderId`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `body`                                                                                      | [operations.UpdateFolderRequestBody](../../models/operations/update-folder-request-body.md) | :heavy_check_mark:                                                                          | Request payload                                                                             |
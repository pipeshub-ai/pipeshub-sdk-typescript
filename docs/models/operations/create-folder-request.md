# CreateFolderRequest

## Example Usage

```typescript
import { CreateFolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateFolderRequest = {
  kbId: "<id>",
  body: {
    folderName: "Project Documents",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `kbId`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | Knowledge base ID                                                                           |
| `folderId`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Parent folder ID. Omit to create at the knowledge base root.                                |
| `body`                                                                                      | [operations.CreateFolderRequestBody](../../models/operations/create-folder-request-body.md) | :heavy_check_mark:                                                                          | Request payload                                                                             |
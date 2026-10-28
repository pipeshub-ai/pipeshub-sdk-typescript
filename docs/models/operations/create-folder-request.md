# CreateFolderRequest

## Example Usage

```typescript
import { CreateFolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateFolderRequest = {
  kbId: "a51179e3-40e0-4c77-a29c-5556135b4167",
  body: {
    folderName: "Project Documents",
  },
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Knowledge base ID                                                                                                                                       |
| `folderId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Parent folder ID. Omit to create at the knowledge base root. An id that is not a<br/>folder of this knowledge base (unknown, or a file) is answered `404`.<br/> |
| `body`                                                                                                                                                  | [operations.CreateFolderRequestBody](../../models/operations/create-folder-request-body.md)                                                             | :heavy_check_mark:                                                                                                                                      | Request payload                                                                                                                                         |
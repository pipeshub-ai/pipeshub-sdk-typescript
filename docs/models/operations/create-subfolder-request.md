# CreateSubfolderRequest

## Example Usage

```typescript
import { CreateSubfolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateSubfolderRequest = {
  kbId: "453073c2-029b-4cd2-a077-ad5a6cd8c82a",
  folderIdPathParameter: "f0dfa043-ccb6-43d1-ad83-bfd6a6820c02",
  body: {
    folderName: "Project Documents",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `kbId`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Knowledge base ID                                                                                                        |
| `folderIdPathParameter`                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Parent folder ID. An id that is not a folder of this knowledge base (unknown, or a<br/>file) is answered `404`.<br/>     |
| `folderIdQueryParameter`                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Optional. When sent, it must equal the `folderId` path parameter (`Conflicting<br/>folderId in path and query parameters`).<br/> |
| `body`                                                                                                                   | [operations.CreateSubfolderRequestBody](../../models/operations/create-subfolder-request-body.md)                        | :heavy_check_mark:                                                                                                       | Request payload                                                                                                          |
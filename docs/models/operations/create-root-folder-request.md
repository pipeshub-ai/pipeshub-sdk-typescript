# CreateRootFolderRequest

## Example Usage

```typescript
import { CreateRootFolderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateRootFolderRequest = {
  kbId: "<id>",
  body: {
    folderName: "Project Documents",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kbId`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Knowledge base ID                                                                                    |
| `body`                                                                                               | [operations.CreateRootFolderRequestBody](../../models/operations/create-root-folder-request-body.md) | :heavy_check_mark:                                                                                   | Request payload                                                                                      |
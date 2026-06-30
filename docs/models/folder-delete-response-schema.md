# FolderDeleteResponseSchema

Response returned by DELETE /knowledgeBase/{kbId}/folder/{folderId} (deleteFolder).

## Example Usage

```typescript
import { FolderDeleteResponseSchema } from "@pipeshub-ai/sdk/models";

let value: FolderDeleteResponseSchema = {
  success: true,
  message: "Folder deleted successfully",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `success`                   | *boolean*                   | :heavy_check_mark:          | N/A                         | true                        |
| `message`                   | *string*                    | :heavy_check_mark:          | N/A                         | Folder deleted successfully |
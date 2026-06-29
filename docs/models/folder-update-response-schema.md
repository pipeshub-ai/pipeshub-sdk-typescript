# FolderUpdateResponseSchema

Response returned by PUT /knowledgeBase/{kbId}/folder/{folderId} (updateFolder).

## Example Usage

```typescript
import { FolderUpdateResponseSchema } from "@pipeshub-ai/sdk/models";

let value: FolderUpdateResponseSchema = {
  success: true,
  message: "Folder updated successfully",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `success`                   | *boolean*                   | :heavy_check_mark:          | N/A                         | true                        |
| `message`                   | *string*                    | :heavy_check_mark:          | N/A                         | Folder updated successfully |
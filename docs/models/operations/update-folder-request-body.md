# UpdateFolderRequestBody

Request payload

## Example Usage

```typescript
import { UpdateFolderRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateFolderRequestBody = {
  folderName: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folderName`                                                                                                                                                                               | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | New name of the folder. Whitespace around it is removed first, so a name<br/>made only of whitespace is refused as empty.<br/>It cannot contain `/` or `\`, which folder paths use as separators.<br/> |
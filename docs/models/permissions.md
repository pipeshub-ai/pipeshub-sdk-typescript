# Permissions

Present when `include=permissions`; otherwise `null`.

## Example Usage

```typescript
import { Permissions } from "@pipeshub-ai/sdk/models";

let value: Permissions = {
  role: "<value>",
  canUpload: false,
  canCreateFolders: false,
  canEdit: true,
  canDelete: true,
  canManagePermissions: false,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `role`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `canUpload`            | *boolean*              | :heavy_check_mark:     | N/A                    |
| `canCreateFolders`     | *boolean*              | :heavy_check_mark:     | N/A                    |
| `canEdit`              | *boolean*              | :heavy_check_mark:     | N/A                    |
| `canDelete`            | *boolean*              | :heavy_check_mark:     | N/A                    |
| `canManagePermissions` | *boolean*              | :heavy_check_mark:     | N/A                    |
# Permission

Per-item permission when `include=permissions` is requested; otherwise `null`.

## Example Usage

```typescript
import { Permission } from "@pipeshub-ai/sdk/models";

let value: Permission = {
  role: "<value>",
  canEdit: false,
  canDelete: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `role`             | *string*           | :heavy_check_mark: | N/A                |
| `canEdit`          | *boolean*          | :heavy_check_mark: | N/A                |
| `canDelete`        | *boolean*          | :heavy_check_mark: | N/A                |
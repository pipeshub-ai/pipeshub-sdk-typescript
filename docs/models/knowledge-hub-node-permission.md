# KnowledgeHubNodePermission

Per-item permission when `include=permissions` is requested; otherwise `null`.

## Example Usage

```typescript
import { KnowledgeHubNodePermission } from "@pipeshub-ai/sdk/models";

let value: KnowledgeHubNodePermission = {
  role: "<value>",
  canEdit: true,
  canDelete: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `role`             | *string*           | :heavy_check_mark: | N/A                |
| `canEdit`          | *boolean*          | :heavy_check_mark: | N/A                |
| `canDelete`        | *boolean*          | :heavy_check_mark: | N/A                |
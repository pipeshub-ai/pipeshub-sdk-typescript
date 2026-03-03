# UpdateToolsetOAuthConfigRequest

## Example Usage

```typescript
import { UpdateToolsetOAuthConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateToolsetOAuthConfigRequest = {
  toolsetType: "<value>",
  oauthConfigId: "<id>",
  body: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `toolsetType`         | *string*              | :heavy_check_mark:    | N/A                   |
| `oauthConfigId`       | *string*              | :heavy_check_mark:    | N/A                   |
| `body`                | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
# CreateToolsetInstanceRequest

## Example Usage

```typescript
import { CreateToolsetInstanceRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateToolsetInstanceRequest = {
  instanceName: "<value>",
  toolsetType: "<value>",
  authType: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `instanceName`        | *string*              | :heavy_check_mark:    | N/A                   |
| `toolsetType`         | *string*              | :heavy_check_mark:    | N/A                   |
| `authType`            | *string*              | :heavy_check_mark:    | N/A                   |
| `authConfig`          | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `baseUrl`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `oauthConfigId`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `oauthInstanceName`   | *string*              | :heavy_minus_sign:    | N/A                   |
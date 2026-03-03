# GetAllUsersRequest

## Example Usage

```typescript
import { GetAllUsersRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetAllUsersRequest = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `page`                               | *number*                             | :heavy_minus_sign:                   | Page number for pagination (1-based) |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of users per page             |
| `search`                             | *string*                             | :heavy_minus_sign:                   | Search users by name or email        |
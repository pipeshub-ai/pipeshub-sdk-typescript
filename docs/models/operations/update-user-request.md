# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateUserRequest = {
  id: "507f1f77bcf86cd799439011",
  body: {
    fullName: "John Smith",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@company.com",
    mobile: "+15551234567",
    designation: "Senior Software Engineer",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | User ID (24-character MongoDB ObjectId)                                                 | 507f1f77bcf86cd799439011                                                                |
| `body`                                                                                  | [operations.UpdateUserRequestBody](../../models/operations/update-user-request-body.md) | :heavy_check_mark:                                                                      | Request payload                                                                         |                                                                                         |
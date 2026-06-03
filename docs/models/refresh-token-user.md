# RefreshTokenUser

User record returned with a refreshed access token

## Example Usage

```typescript
import { RefreshTokenUser } from "@pipeshub-ai/sdk/models";

let value: RefreshTokenUser = {
  id: "<id>",
  orgId: "<id>",
  email: "Joyce30@hotmail.com",
  fullName: "Angelina Lakin",
  hasLoggedIn: false,
  isDeleted: false,
  slug: "<value>",
  createdAt: "1714294113163",
  updatedAt: "1735650676269",
  v: 743653,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | User ID            |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `fullName`         | *string*           | :heavy_check_mark: | N/A                |
| `firstName`        | *string*           | :heavy_minus_sign: | N/A                |
| `lastName`         | *string*           | :heavy_minus_sign: | N/A                |
| `designation`      | *string*           | :heavy_minus_sign: | N/A                |
| `hasLoggedIn`      | *boolean*          | :heavy_check_mark: | N/A                |
| `isDeleted`        | *boolean*          | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *string*           | :heavy_check_mark: | N/A                |
| `updatedAt`        | *string*           | :heavy_check_mark: | N/A                |
| `v`                | *number*           | :heavy_check_mark: | N/A                |
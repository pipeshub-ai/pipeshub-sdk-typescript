# InitAuthRequest

Request to initialize authentication session

## Example Usage

```typescript
import { InitAuthRequest } from "@pipeshub-ai/sdk/models";

let value: InitAuthRequest = {
  email: "user@example.com",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `email`                                 | *string*                                | :heavy_check_mark:                      | User email address (RFC 5321 compliant) | user@example.com                        |
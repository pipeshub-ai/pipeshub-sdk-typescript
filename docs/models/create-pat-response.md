# CreatePatResponse

Response body for `POST /personal-access-tokens` (`pat.controller.ts` `createToken`).

## Example Usage

```typescript
import { CreatePatResponse } from "@pipeshub-ai/sdk/models";

let value: CreatePatResponse = {
  message: "Personal access token created successfully",
  token: {
    id: "<id>",
    name: "<value>",
    scopes: [
      "<value 1>",
    ],
    createdAt: new Date("2026-12-27T13:12:48.342Z"),
    expiresAt: new Date("2026-12-22T16:52:48.349Z"),
    accessToken: "phpat_eyJhbGciOiJIUzI1NiIs...",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `message`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | Personal access token created successfully           |
| `token`                                              | [models.PatWithSecret](../models/pat-with-secret.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |
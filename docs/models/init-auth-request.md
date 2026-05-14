# InitAuthRequest

Optional JSON body for `/userAccount/initAuth`. Valid shapes include: omitting the body entirely, sending `{}` (empty object), or `{ "email": "<address>" }`. Neither the body nor `email` is required. When `email` is omitted or empty, the session is still created and `allowedMethods` / `authProviders` are returned as usual; clients typically supply `email` later on `/userAccount/authenticate`. The `email` property remains supported mainly for legacy clients and backward compatibility.


## Example Usage

```typescript
import { InitAuthRequest } from "@pipeshub-ai/sdk/models";

let value: InitAuthRequest = {
  email: "user@example.com",
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                     | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Optional; retained for legacy reasons. When set, stored on the auth session for correlation with later `/authenticate` calls (RFC 5321 compliant address).<br/> | user@example.com                                                                                                                                            |
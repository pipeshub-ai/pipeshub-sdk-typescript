# GoogleCredentials

Google ID token wrapped in an object, as Google's sign-in button returns it. Only the
first token check reads `credential`; the second one (`authenticateWithGoogle`) is
handed the whole object, so by code reading a sign-in sent this way ends in `500`
even with a valid token. Send the bare token string instead.


## Example Usage

```typescript
import { GoogleCredentials } from "@pipeshub-ai/sdk/models";

let value: GoogleCredentials = {
  credential: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `credential`          | *string*              | :heavy_check_mark:    | Google ID token (JWT) |
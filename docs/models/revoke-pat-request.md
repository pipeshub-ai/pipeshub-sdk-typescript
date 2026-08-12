# RevokePatRequest

Optional request body for `DELETE /personal-access-tokens/{tokenId}`
and `DELETE /personal-access-tokens/admin/{tokenId}`. The body itself
is optional; `reason`, if present, is stored on the revocation for
auditing.


## Example Usage

```typescript
import { RevokePatRequest } from "@pipeshub-ai/sdk/models";

let value: RevokePatRequest = {
  reason: "rotated",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `reason`           | *string*           | :heavy_minus_sign: | N/A                | rotated            |
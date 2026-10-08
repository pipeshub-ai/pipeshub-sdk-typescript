# RefreshTokenUserRole

Organization role stored on the user document (`admin` or `member`)

## Example Usage

```typescript
import { RefreshTokenUserRole } from "@pipeshub-ai/sdk/models";

let value: RefreshTokenUserRole = "admin";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"admin" | "member" | Unrecognized<string>
```
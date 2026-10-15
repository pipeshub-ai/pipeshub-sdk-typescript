# Role

Organization role stored on the user document (`admin` or `member`)

## Example Usage

```typescript
import { Role } from "@pipeshub-ai/sdk/models";

let value: Role = "admin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"admin" | "member" | Unrecognized<string>
```
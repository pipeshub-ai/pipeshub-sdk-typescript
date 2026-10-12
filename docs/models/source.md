# Source

Origin of the feedback. Always present in responses (server applies the default `user`).

## Example Usage

```typescript
import { Source } from "@pipeshub-ai/sdk/models";

let value: Source = "user";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"user" | "system" | "admin" | "auto" | Unrecognized<string>
```
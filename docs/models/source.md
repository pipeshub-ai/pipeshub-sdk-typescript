# Source

Origin of the feedback. Always present in responses (server applies the default `user`).

## Example Usage

```typescript
import { Source } from "@pipeshub-ai/sdk/models";

let value: Source = "user";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "system" | "admin" | "auto" | Unrecognized<string>
```
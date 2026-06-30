# AppliedPermission

## Example Usage

```typescript
import { AppliedPermission } from "@pipeshub-ai/sdk/models";

let value: AppliedPermission = "WRITER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OWNER" | "WRITER" | "READER" | Unrecognized<string>
```
# Relationship

## Example Usage

```typescript
import { Relationship } from "@pipeshub-ai/sdk/models";

let value: Relationship = "WRITER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OWNER" | "WRITER" | "READER" | Unrecognized<string>
```
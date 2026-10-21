# FieldType

## Example Usage

```typescript
import { FieldType } from "@pipeshub-ai/sdk/models";

let value: FieldType = "SELECT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "PASSWORD" | "URL" | "SELECT" | Unrecognized<string>
```
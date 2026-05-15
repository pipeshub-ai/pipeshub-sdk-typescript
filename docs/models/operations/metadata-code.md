# MetadataCode

Machine-readable error code mapped from the Zod issue code.

## Example Usage

```typescript
import { MetadataCode } from "@pipeshub-ai/sdk/models/operations";

let value: MetadataCode = "INVALID_ENUM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"INVALID_TYPE" | "INVALID_LITERAL" | "INVALID_ENUM" | "INVALID_UNION" | "INVALID_DISCRIMINATOR" | "INVALID_ARGUMENTS" | "TOO_SMALL" | "TOO_BIG" | Unrecognized<string>
```
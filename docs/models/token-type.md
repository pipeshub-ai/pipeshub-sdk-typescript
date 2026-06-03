# TokenType

Type of token

## Example Usage

```typescript
import { TokenType } from "@pipeshub-ai/sdk/models";

let value: TokenType = "refresh";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"access" | "refresh" | Unrecognized<string>
```
# OptionSourceType

`dynamic` options come from GET /connectors/{connectorId}/filters/{filterKey}/options

## Example Usage

```typescript
import { OptionSourceType } from "@pipeshub-ai/sdk/models";

let value: OptionSourceType = "static";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "static" | "dynamic" | Unrecognized<string>
```
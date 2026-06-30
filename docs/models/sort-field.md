# SortField

## Example Usage

```typescript
import { SortField } from "@pipeshub-ai/sdk/models";

let value: SortField = "name";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"name" | "createdAtTimestamp" | "updatedAtTimestamp" | "userRole" | Unrecognized<string>
```
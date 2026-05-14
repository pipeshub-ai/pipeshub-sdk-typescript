# Filter

## Example Usage

```typescript
import { Filter } from "@pipeshub-ai/sdk/models";

let value: Filter = "sortOrder";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"page" | "limit" | "search" | "shared" | "tags" | "minMessages" | "sortBy" | "sortOrder" | "startDate" | "endDate" | "messageType" | "dateRange" | Unrecognized<string>
```
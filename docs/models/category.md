# Category

## Example Usage

```typescript
import { Category } from "@pipeshub-ai/sdk/models";

let value: Category = "well_explained";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"incorrect_information" | "missing_information" | "irrelevant_information" | "unclear_explanation" | "poor_citations" | "excellent_answer" | "helpful_citations" | "well_explained" | "other" | Unrecognized<string>
```
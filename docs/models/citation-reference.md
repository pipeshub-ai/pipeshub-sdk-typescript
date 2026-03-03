# CitationReference

Reference to a source document cited in a response

## Example Usage

```typescript
import { CitationReference } from "@pipeshub-ai/sdk/models";

let value: CitationReference = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `citationId`                                     | *string*                                         | :heavy_minus_sign:                               | ID of the citation record                        |
| `relevanceScore`                                 | *number*                                         | :heavy_minus_sign:                               | How relevant this citation is to the query (0-1) |
| `excerpt`                                        | *string*                                         | :heavy_minus_sign:                               | Relevant excerpt from the source document        |
| `context`                                        | *string*                                         | :heavy_minus_sign:                               | Additional context around the citation           |
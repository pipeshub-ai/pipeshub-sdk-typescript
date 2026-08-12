# LookupRecordResponseSchema

Response returned by GET /connectors/record/lookup.

Field names are snake_case, matching the knowledge graph's internal
view models. A miss is a 200 with an empty `matches` and the input
echoed in `not_found_identifiers` — see the endpoint description.


## Example Usage

```typescript
import { LookupRecordResponseSchema } from "@pipeshub-ai/sdk/models";

let value: LookupRecordResponseSchema = {
  matches: [],
  ambiguous: false,
  notFoundIdentifiers: [
    "<value 1>",
    "<value 2>",
  ],
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                       | Type                                                                                                                                                                                                        | Required                                                                                                                                                                                                    | Description                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `matches`                                                                                                                                                                                                   | [models.KnowledgeGraphLookupMatchSchema](../models/knowledge-graph-lookup-match-schema.md)[]                                                                                                                | :heavy_check_mark:                                                                                                                                                                                          | N/A                                                                                                                                                                                                         |
| `ambiguous`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                          | True when one identifier resolved to more than one accessible record. Present the choice rather than taking the first, or retry with `connectorName`.                                                       |
| `notFoundIdentifiers`                                                                                                                                                                                       | *string*[]                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                          | Identifiers that resolved to nothing the caller can access.                                                                                                                                                 |
| `searchedConnectors`                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                          | Per-identifier list of the connector types that were searched, so a miss can be retried against a different `connectorName`. Keys are the identifiers exactly as supplied.                                  |
| `text`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                          | Flat-text rendering of the matches — each match's metadata block followed by a `Next:` line naming a follow-up call — and a line per miss naming the connectors that were searched. Capped at 25,000 bytes. |
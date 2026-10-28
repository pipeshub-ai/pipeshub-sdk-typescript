# SemanticSearchExecuteResponse

Immediate POST `/search` response: persisted search id plus the raw retrieval payload.
`searchId` is absent when the request set `saveHistory` to `false`.
SDK-oriented modeling: named fields only at this level; dynamic-key maps inside `searchResponse` use
`additionalProperties` with a `$ref` (e.g. `virtual_to_record_map`) rather than boolean `additionalProperties: true`,
so generated clients retain typed values where possible.


## Example Usage

```typescript
import { SemanticSearchExecuteResponse } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchExecuteResponse = {
  searchResponse: {
    searchResults: [
      {},
    ],
    records: [
      {},
    ],
    status: "<value>",
    statusCode: 530457,
    message: "<value>",
    timeline: {
      dateField: "modified",
      start: new Date("2026-10-14"),
      end: new Date("2026-06-11"),
      periods: [
        {
          label: "March 2026 (2026-03-01 to 2026-03-31)",
          start: new Date("2025-05-04"),
          end: new Date("2026-09-07"),
          records: 351206,
          matches: 271168,
        },
      ],
      notes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `searchId`                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                      | The saved search, for `GET /search/{searchId}`. Absent when `saveHistory` is `false`.                                                                                                                                                                                                                                                                   |
| `searchResponse`                                                                                                                                                                                                                                                                                                                                        | [models.SemanticSearchAiResponse](../models/semantic-search-ai-response.md)                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                      | Payload returned by the AI retrieval service for a semantic search (embedded in `searchResponse`).<br/>Optional `virtual_to_record_map` maps each virtual record id (string key) to one resolved graph record document.<br/>Empty responses from the retrieval layer omit `virtual_to_record_map`; success payloads may include it alongside hits and records.<br/> |
# SemanticSearchExecuteResponse

Immediate POST `/search` response: persisted search id plus the raw retrieval payload.
SDK-oriented modeling: named fields only at this level; dynamic-key maps inside `searchResponse` use
`additionalProperties` with a `$ref` (e.g. `virtual_to_record_map`) rather than boolean `additionalProperties: true`,
so generated clients retain typed values where possible.


## Example Usage

```typescript
import { SemanticSearchExecuteResponse } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchExecuteResponse = {
  searchId: "<value>",
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `searchId`                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                                                     |
| `searchResponse`                                                                                                                                                                                                                                                                                                                                        | [models.SemanticSearchAiResponse](../models/semantic-search-ai-response.md)                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                      | Payload returned by the AI retrieval service for a semantic search (embedded in `searchResponse`).<br/>Optional `virtual_to_record_map` maps each virtual record id (string key) to one resolved graph record document.<br/>Empty responses from the retrieval layer omit `virtual_to_record_map`; success payloads may include it alongside hits and records.<br/> |
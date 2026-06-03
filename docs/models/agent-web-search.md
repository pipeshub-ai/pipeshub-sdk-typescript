# AgentWebSearch

Web search provider attached to this agent. Null when none is configured.

## Example Usage

```typescript
import { AgentWebSearch } from "@pipeshub-ai/sdk/models";

let value: AgentWebSearch = {
  provider: "serper",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `provider`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Provider identifier (e.g. "tavily", "serper", "exa", "duckduckgo") |
| `providerKey`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `providerLabel`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
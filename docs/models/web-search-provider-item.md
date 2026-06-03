# WebSearchProviderItem

Web search provider configuration item returned by getWebSearchProviders

## Example Usage

```typescript
import { WebSearchProviderItem } from "@pipeshub-ai/sdk/models";

let value: WebSearchProviderItem = {
  provider: "serper",
  providerKey: "<value>",
  configuration: {
    "key": "<value>",
  },
  isDefault: false,
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                                                                                                | [models.WebSearchProviderType](../models/web-search-provider-type.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                        | Supported web search provider                                                                                                                                             |
| `providerKey`                                                                                                                                                             | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | Unique key for the provider configuration                                                                                                                                 |
| `configuration`                                                                                                                                                           | Record<string, *any*>                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                        | Provider-specific configuration as stored and returned by the gateway (open record).<br/>Serper, Tavily, and Exa typically include `apiKey`; additional keys may be present.<br/> |
| `isDefault`                                                                                                                                                               | *boolean*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
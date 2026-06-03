# WebSearchProvidersResponse

Response for getWebSearchProviders

## Example Usage

```typescript
import { WebSearchProvidersResponse } from "@pipeshub-ai/sdk/models";

let value: WebSearchProvidersResponse = {
  status: "success",
  providers: [
    {
      provider: "duckduckgo",
      providerKey: "<value>",
      configuration: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      isDefault: true,
    },
  ],
  settings: {
    includeImages: false,
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `status`                                                                                     | [models.WebSearchProvidersResponseStatus](../models/web-search-providers-response-status.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `providers`                                                                                  | [models.WebSearchProviderItem](../models/web-search-provider-item.md)[]                      | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `settings`                                                                                   | [models.WebSearchSettings](../models/web-search-settings.md)                                 | :heavy_check_mark:                                                                           | Normalized web search global settings returned by getWebSearchProviders                      |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Human-readable status (empty list vs populated providers)                                    |
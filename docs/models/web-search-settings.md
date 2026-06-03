# WebSearchSettings

Normalized web search global settings returned by getWebSearchProviders

## Example Usage

```typescript
import { WebSearchSettings } from "@pipeshub-ai/sdk/models";

let value: WebSearchSettings = {
  includeImages: false,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `includeImages`                                               | *boolean*                                                     | :heavy_check_mark:                                            | Whether to include images in search results                   |
| `maxImages`                                                   | *number*                                                      | :heavy_minus_sign:                                            | Maximum number of images to return when includeImages is true |
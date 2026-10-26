# WebSearchProviderType

Supported web search provider. crawl4ai only reads pages (it backs up the built-in page reader) and cannot be the default; firecrawl both searches and reads pages. searxng, firecrawl and crawl4ai take a baseUrl; firecrawl defaults to its cloud API.

## Example Usage

```typescript
import { WebSearchProviderType } from "@pipeshub-ai/sdk/models";

let value: WebSearchProviderType = "firecrawl";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"duckduckgo" | "serper" | "tavily" | "exa" | "brave" | "searxng" | "firecrawl" | "crawl4ai" | Unrecognized<string>
```
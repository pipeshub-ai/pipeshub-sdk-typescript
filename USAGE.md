<!-- Start SDK Example Usage [usage] -->
### Retrieve passages with citations

```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.semanticSearch.retrieve({
    query: "how do we roll back a canary?",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
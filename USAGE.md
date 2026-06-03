<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
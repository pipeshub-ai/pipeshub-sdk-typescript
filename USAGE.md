<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.userAccount.initAuth({
    email: "user@example.com",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
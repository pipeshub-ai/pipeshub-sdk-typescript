# Method

Authentication method to use. It must be one the session's current step allows;
any other value, known or not, is answered `400`.


## Example Usage

```typescript
import { Method } from "@pipeshub-ai/sdk/models";

let value: Method = "password";
```

## Values

```typescript
"otp" | "password" | "google" | "microsoft"
```
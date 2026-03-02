# OAuth

## Overview

OAuth 2.0 token exchange for third-party authentication providers

### Available Operations

* [exchangeOAuthCode](#exchangeoauthcode) - Exchange OAuth authorization code for tokens

## exchangeOAuthCode

Exchange an OAuth authorization code for access and ID tokens.
Used after the OAuth authorization flow redirects back to the application.
<br><br>
<b>Supported Providers:</b><br>
- Generic OAuth 2.0 providers configured in org settings
<br><br>
<b>Flow:</b><br>
1. User is redirected to OAuth provider's authorization URL<br>
2. User authorizes and is redirected back with a code<br>
3. This endpoint exchanges the code for tokens<br>
4. Tokens can then be used with the <code>/userAccount/authenticate</code> endpoint


### Example Usage

<!-- UsageSnippet language="typescript" operationID="exchangeOAuthCode" method="post" path="/userAccount/oauth/exchange" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuth.exchangeOAuthCode({
    code: "<value>",
    email: "Jason2@gmail.com",
    provider: "<value>",
    redirectUri: "https://enlightened-developing.info",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { oAuthExchangeOAuthCode } from "pipeshub/funcs/o-auth-exchange-o-auth-code.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore();

async function run() {
  const res = await oAuthExchangeOAuthCode(pipeshub, {
    code: "<value>",
    email: "Jason2@gmail.com",
    provider: "<value>",
    redirectUri: "https://enlightened-developing.info",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthExchangeOAuthCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.OAuthExchangeRequest](../../models/o-auth-exchange-request.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OAuthExchangeResponse](../../models/o-auth-exchange-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.AuthError            | 400                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
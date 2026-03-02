# SMTPConfiguration

## Overview

Configure SMTP email server for sending notifications and invitations.

### Available Operations

* [createSMTPConfig](#createsmtpconfig) - Create or update SMTP configuration
* [getSMTPConfig](#getsmtpconfig) - Get SMTP configuration

## createSMTPConfig

Configure SMTP email server for sending system emails including user invitations, notifications, and password resets.

Common SMTP providers and their settings:
- Gmail: host=smtp.gmail.com, port=587 (requires App Password)
- SendGrid: host=smtp.sendgrid.net, port=587
- Amazon SES: host=email-smtp.{region}.amazonaws.com, port=587
- Microsoft 365: host=smtp.office365.com, port=587

Configuration is encrypted before storage.


### Example Usage: amazonSes

<!-- UsageSnippet language="typescript" operationID="createSMTPConfig" method="post" path="/configurationManager/smtpConfig" example="amazonSes" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.smtpConfiguration.createSMTPConfig({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 587,
    username: "AKIAIOSFODNN7EXAMPLE",
    password: "your-ses-smtp-password",
    fromEmail: "noreply@yourcompany.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { smtpConfigurationCreateSMTPConfig } from "pipeshub/funcs/smtp-configuration-create-smtp-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await smtpConfigurationCreateSMTPConfig(pipeshub, {
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 587,
    username: "AKIAIOSFODNN7EXAMPLE",
    password: "your-ses-smtp-password",
    fromEmail: "noreply@yourcompany.com",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("smtpConfigurationCreateSMTPConfig failed:", res.error);
  }
}

run();
```
### Example Usage: gmail

<!-- UsageSnippet language="typescript" operationID="createSMTPConfig" method="post" path="/configurationManager/smtpConfig" example="gmail" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.smtpConfiguration.createSMTPConfig({
    host: "smtp.gmail.com",
    port: 587,
    username: "notifications@yourcompany.com",
    password: "your-app-password",
    fromEmail: "noreply@yourcompany.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { smtpConfigurationCreateSMTPConfig } from "pipeshub/funcs/smtp-configuration-create-smtp-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await smtpConfigurationCreateSMTPConfig(pipeshub, {
    host: "smtp.gmail.com",
    port: 587,
    username: "notifications@yourcompany.com",
    password: "your-app-password",
    fromEmail: "noreply@yourcompany.com",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("smtpConfigurationCreateSMTPConfig failed:", res.error);
  }
}

run();
```
### Example Usage: office365

<!-- UsageSnippet language="typescript" operationID="createSMTPConfig" method="post" path="/configurationManager/smtpConfig" example="office365" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.smtpConfiguration.createSMTPConfig({
    host: "smtp.office365.com",
    port: 587,
    username: "notifications@yourcompany.onmicrosoft.com",
    password: "your-password",
    fromEmail: "notifications@yourcompany.onmicrosoft.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { smtpConfigurationCreateSMTPConfig } from "pipeshub/funcs/smtp-configuration-create-smtp-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await smtpConfigurationCreateSMTPConfig(pipeshub, {
    host: "smtp.office365.com",
    port: 587,
    username: "notifications@yourcompany.onmicrosoft.com",
    password: "your-password",
    fromEmail: "notifications@yourcompany.onmicrosoft.com",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("smtpConfigurationCreateSMTPConfig failed:", res.error);
  }
}

run();
```
### Example Usage: sendgrid

<!-- UsageSnippet language="typescript" operationID="createSMTPConfig" method="post" path="/configurationManager/smtpConfig" example="sendgrid" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await pipeshub.smtpConfiguration.createSMTPConfig({
    host: "smtp.sendgrid.net",
    port: 587,
    username: "apikey",
    password: "SG.your-sendgrid-api-key",
    fromEmail: "noreply@yourcompany.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { smtpConfigurationCreateSMTPConfig } from "pipeshub/funcs/smtp-configuration-create-smtp-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await smtpConfigurationCreateSMTPConfig(pipeshub, {
    host: "smtp.sendgrid.net",
    port: 587,
    username: "apikey",
    password: "SG.your-sendgrid-api-key",
    fromEmail: "noreply@yourcompany.com",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("smtpConfigurationCreateSMTPConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SMTPConfig](../../models/smtp-config.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getSMTPConfig

Retrieve the current SMTP server configuration. Password is included in the response for admin users.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSMTPConfig" method="get" path="/configurationManager/smtpConfig" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.smtpConfiguration.getSMTPConfig();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { smtpConfigurationGetSMTPConfig } from "pipeshub/funcs/smtp-configuration-get-smtp-config.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await smtpConfigurationGetSMTPConfig(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smtpConfigurationGetSMTPConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SMTPConfig](../../models/smtp-config.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
# Upload

## Overview

File upload operations

### Available Operations

* [uploadRecordsToKB](#uploadrecordstokb) - Upload files to knowledge base
* [uploadRecordsToFolder](#uploadrecordstofolder) - Upload files to folder
* [getUploadLimits](#getuploadlimits) - Get upload limits

## uploadRecordsToKB

Upload one or more files directly to a knowledge base.<br><br>
<b>Overview:</b><br>
Batch upload multiple files in a single request. Each file becomes a new record in the KB with automatic content indexing.<br><br>
<b>Upload Limits:</b><br>
<ul>
<li><b>Max files per request:</b> 1000</li>
<li><b>Default max file size:</b> 30MB (configurable via platform settings)</li>
<li>Use <code>GET /knowledgeBase/limits</code> to check current limits</li>
</ul>
<b>Supported File Types:</b><br>
Documents (PDF, DOCX, TXT), Images (PNG, JPG), Videos (MP4), and more.<br><br>
<b>File Metadata:</b><br>
Use <code>files_metadata</code> to provide additional info like file paths and last modified timestamps.<br><br>
<b>Versioning:</b><br>
Set <code>isVersioned: true</code> to enable version tracking for uploaded files.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadRecordsToKB" method="post" path="/knowledgeBase/{kbId}/upload" -->
```typescript
import { openAsBlob } from "node:fs";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.upload.uploadRecordsToKB({
    kbId: "<id>",
    body: {
      files: [
        await openAsBlob("example.file"),
      ],
      filesMetadata: "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PipeshubCore } from "pipeshub/core.js";
import { uploadUploadRecordsToKB } from "pipeshub/funcs/upload-upload-records-to-kb.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await uploadUploadRecordsToKB(pipeshub, {
    kbId: "<id>",
    body: {
      files: [
        await openAsBlob("example.file"),
      ],
      filesMetadata: "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadUploadRecordsToKB failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadRecordsToKBRequest](../../models/operations/upload-records-to-kb-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UploadResult](../../models/upload-result.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## uploadRecordsToFolder

Upload files directly to a specific folder within a knowledge base.<br><br>
<b>Same as KB upload</b> but files are placed in the specified folder instead of KB root.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadRecordsToFolder" method="post" path="/knowledgeBase/{kbId}/folder/{folderId}/upload" -->
```typescript
import { openAsBlob } from "node:fs";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.upload.uploadRecordsToFolder({
    kbId: "<id>",
    folderId: "<id>",
    body: {
      files: [
        await openAsBlob("example.file"),
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { PipeshubCore } from "pipeshub/core.js";
import { uploadUploadRecordsToFolder } from "pipeshub/funcs/upload-upload-records-to-folder.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await uploadUploadRecordsToFolder(pipeshub, {
    kbId: "<id>",
    folderId: "<id>",
    body: {
      files: [
        await openAsBlob("example.file"),
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadUploadRecordsToFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadRecordsToFolderRequest](../../models/operations/upload-records-to-folder-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UploadResult](../../models/upload-result.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getUploadLimits

Retrieve current upload constraints for the organization.<br><br>
<b>Use Case:</b><br>
Call this before uploads to validate file sizes on the client side and display appropriate limits to users.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUploadLimits" method="get" path="/knowledgeBase/limits" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.upload.getUploadLimits();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { uploadGetUploadLimits } from "pipeshub/funcs/upload-get-upload-limits.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await uploadGetUploadLimits(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadGetUploadLimits failed:", res.error);
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

**Promise\<[operations.GetUploadLimitsResponse](../../models/operations/get-upload-limits-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
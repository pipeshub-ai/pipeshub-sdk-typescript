# KnowledgeBase

## Overview

Knowledge base management operations

### Available Operations

* [createKnowledgeBase](#createknowledgebase) - Create a new knowledge base
* [listKnowledgeBases](#listknowledgebases) - List all knowledge bases
* [getKnowledgeBase](#getknowledgebase) - Get knowledge base by ID
* [updateKnowledgeBase](#updateknowledgebase) - Update knowledge base
* [deleteKnowledgeBase](#deleteknowledgebase) - Delete knowledge base
* [getRecordById](#getrecordbyid) - Get record by ID
* [updateRecord](#updaterecord) - Update record
* [deleteRecord](#deleterecord) - Delete record
* [streamRecordBuffer](#streamrecordbuffer) - Stream record content
* [createFolder](#createfolder) - Create folder
* [updateFolder](#updatefolder) - Update folder
* [deleteFolder](#deletefolder) - Delete folder
* [uploadRecords](#uploadrecords) - Upload files to knowledge base or folder
* [getUploadLimits](#getuploadlimits) - Get knowledge base upload limits
* [reindexRecord](#reindexrecord) - Reindex single record
* [reindexRecordGroup](#reindexrecordgroup) - Reindex record group
* [moveRecord](#moverecord) - Move record to another location
* [~~getKnowledgeHubRootNodes~~](#getknowledgehubrootnodes) - Get knowledge hub root nodes :warning: **Deprecated**
* [~~getKnowledgeHubChildNodes~~](#getknowledgehubchildnodes) - Get knowledge hub child nodes :warning: **Deprecated**

## createKnowledgeBase

Create a new knowledge base for organizing and managing documents within your organization.

**Overview:**

A knowledge base is a container for organizing related documents, files, and content. It provides a central location for teams to collaborate on shared information.

**Features:**

- Hierarchical folder structure support
- Role-based access control (OWNER, WRITER, READER)
- Full-text search across all records
- Integration with external connectors (Google Drive, OneDrive, etc.)
- Automatic content indexing for AI-powered search

**Naming Rules:**

- Name must be 1-255 characters
- Special characters and HTML tags are sanitized
- Names don't need to be unique within organization

**Creator Permissions:**

The user creating the KB automatically becomes the OWNER with full administrative rights.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createKnowledgeBase" method="post" path="/knowledgeBase" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.createKnowledgeBase({
    kbName: "Product Documentation",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseCreateKnowledgeBase } from "@pipeshub-ai/sdk/funcs/knowledge-base-create-knowledge-base.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseCreateKnowledgeBase(pipeshub, {
    kbName: "Product Documentation",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseCreateKnowledgeBase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateKnowledgeBaseRequest](../../models/operations/create-knowledge-base-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KnowledgeBaseCreateResponse](../../models/knowledge-base-create-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## listKnowledgeBases

Retrieve a paginated list of all knowledge bases accessible to the authenticated user.

**Overview:**

Returns knowledge bases where the user has at least READER permission. Results include the user's role for each KB.

**Filtering:**

- **search:** Full-text search on KB names (max 1000 chars)
- **permissions:** Filter by user's role (comma-separated: OWNER, WRITER, READER)

**Sorting Options:**

- `name` — Alphabetical by KB name
- `createdAtTimestamp` — By creation date
- `updatedAtTimestamp` — By last modification
- `userRole` — By permission level

**Performance:**

Uses efficient pagination with limit/offset. For large result sets, use smaller page sizes.

**Query parameters:**

Only `page`, `limit`, `search`, `permissions`, `sortBy`, and `sortOrder` are allowed; unknown query keys are rejected.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listKnowledgeBases" method="get" path="/knowledgeBase" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.listKnowledgeBases({
    permissions: "OWNER,ORGANIZER,WRITER",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseListKnowledgeBases } from "@pipeshub-ai/sdk/funcs/knowledge-base-list-knowledge-bases.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseListKnowledgeBases(pipeshub, {
    permissions: "OWNER,ORGANIZER,WRITER",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseListKnowledgeBases failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListKnowledgeBasesRequest](../../models/operations/list-knowledge-bases-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAllKnowledgeBaseResponseSchema](../../models/get-all-knowledge-base-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getKnowledgeBase

Retrieve detailed information about a specific knowledge base.

**Overview:**

Returns complete KB metadata including name, timestamps, root-level folders, and the requesting user's role.

**Access Control:**

User must have at least READER permission to view KB details.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKnowledgeBase" method="get" path="/knowledgeBase/{kbId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.getKnowledgeBase({
    kbId: "kb_550e8400-e29b-41d4-a716",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseGetKnowledgeBase } from "@pipeshub-ai/sdk/funcs/knowledge-base-get-knowledge-base.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseGetKnowledgeBase(pipeshub, {
    kbId: "kb_550e8400-e29b-41d4-a716",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseGetKnowledgeBase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKnowledgeBaseRequest](../../models/operations/get-knowledge-base-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetKnowledgeBaseById](../../models/get-knowledge-base-by-id.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403, 404               | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateKnowledgeBase

Update a knowledge base's name.

**Required permission:**

User must have one of `OWNER` or `WRITER` on the knowledge base.

**Validation:**

- `kbId` path parameter must be a valid UUID (`updateKBSchema`)
- When provided, `kbName` must be 1–255 characters
- XSS and format-specifier checks are applied to `kbName` in the gateway controller


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateKnowledgeBase" method="put" path="/knowledgeBase/{kbId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.updateKnowledgeBase({
    kbId: "<id>",
    body: {
      kbName: "Updated Documentation Hub",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseUpdateKnowledgeBase } from "@pipeshub-ai/sdk/funcs/knowledge-base-update-knowledge-base.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseUpdateKnowledgeBase(pipeshub, {
    kbId: "<id>",
    body: {
      kbName: "Updated Documentation Hub",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseUpdateKnowledgeBase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateKnowledgeBaseRequest](../../models/operations/update-knowledge-base-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateKnowledgeBaseById](../../models/update-knowledge-base-by-id.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteKnowledgeBase

Permanently delete a knowledge base and all its contents.

**Required permission:**

User must have `OWNER` role on the knowledge base.

**What gets deleted:**

- All folders within the KB
- All records and their indexed content
- All permission grants
- Associated storage files

**Warning:** This action is irreversible. Consider exporting data before deletion.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteKnowledgeBase" method="delete" path="/knowledgeBase/{kbId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.deleteKnowledgeBase({
    kbId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseDeleteKnowledgeBase } from "@pipeshub-ai/sdk/funcs/knowledge-base-delete-knowledge-base.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseDeleteKnowledgeBase(pipeshub, {
    kbId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseDeleteKnowledgeBase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteKnowledgeBaseRequest](../../models/operations/delete-knowledge-base-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteKnowledgeBaseById](../../models/delete-knowledge-base-by-id.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401, 403, 404               | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getRecordById

Retrieve detailed information about a specific record.

**Overview:**

Returns complete record metadata including name, type, indexing status, storage information, and version history.

**File conversion:**

Use the optional `convertTo` parameter to request file format conversion (e.g., PDF to text). Supported conversions include PPT to PDF and PPTX to PDF.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRecordById" method="get" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.getRecordById({
    recordId: "<id>",
    convertTo: "txt",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseGetRecordById } from "@pipeshub-ai/sdk/funcs/knowledge-base-get-record-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseGetRecordById(pipeshub, {
    recordId: "<id>",
    convertTo: "txt",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseGetRecordById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecordByIdRequest](../../models/operations/get-record-by-id-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetRecordByIdResponseSchema](../../models/get-record-by-id-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateRecord

Update a record's name and/or file content.

**Overview:**

Allows updating the display name and optionally replacing the file content. Triggers re-indexing when content changes.

**Required permission:**

WRITER or higher

**Updating file content:**

Include a new file in the request to replace the existing content. The file extension must match the original.

**Side effects:**

- Updates `updatedAtTimestamp`
- Increments version if file content changed
- Triggers re-indexing for content changes


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateRecord" method="put" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.updateRecord({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseUpdateRecord } from "@pipeshub-ai/sdk/funcs/knowledge-base-update-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseUpdateRecord(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseUpdateRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRecordRequest](../../models/operations/update-record-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateRecordResponse](../../models/operations/update-record-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteRecord

Permanently delete a record from the knowledge base.

**Required permission:**

WRITER or higher

**What gets deleted:**

- Record metadata
- Associated storage file
- Indexed content and embeddings

**Warning:** This action is irreversible.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteRecord" method="delete" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.deleteRecord({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseDeleteRecord } from "@pipeshub-ai/sdk/funcs/knowledge-base-delete-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseDeleteRecord(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseDeleteRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRecordRequest](../../models/operations/delete-record-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteRecordResponseSchema](../../models/delete-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## streamRecordBuffer

Stream the binary content of a record's file.

**Overview:**

Returns the raw file content with appropriate `Content-Type` and `Content-Disposition` headers for download or inline viewing.

**Use cases:**

- File downloads
- Inline document preview
- Content extraction pipelines

**Format conversion:**

Use the `convertTo` parameter to convert between formats (e.g. DOCX to PDF).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="streamRecordBuffer" method="get" path="/knowledgeBase/stream/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.streamRecordBuffer({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseStreamRecordBuffer } from "@pipeshub-ai/sdk/funcs/knowledge-base-stream-record-buffer.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseStreamRecordBuffer(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseStreamRecordBuffer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StreamRecordBufferRequest](../../models/operations/stream-record-buffer-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.ErrorResponse             | 400, 401                         | application/json                 |
| errors.ErrorResponse             | 403                              | application/json                 |
| errors.StreamRecordErrorResponse | 403                              | application/json                 |
| errors.StreamRecordErrorResponse | 404, 409                         | application/json                 |
| errors.StreamRecordErrorResponse | 500                              | application/json                 |
| errors.PipeshubDefaultError      | 4XX, 5XX                         | \*/\*                            |

## createFolder

Create a folder in a knowledge base. Omit `folderId` to create at the KB root;
pass `folderId` as a query parameter to create a nested subfolder inside an
existing parent folder.

**Required permission:** WRITER or higher

**Folder features:**

- Organize records hierarchically
- Support nested subfolders (unlimited depth)
- Inherit parent KB permissions

**Naming rules:**

- 1–255 characters
- XSS protection applied
- Spaces and special characters allowed
- Duplicate names rejected within the same parent (`409`)

**Response:** Returns `id` and `name` for the created folder.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createFolder" method="post" path="/knowledgeBase/{kbId}/folder" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.createFolder({
    kbId: "<id>",
    body: {
      folderName: "Project Documents",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseCreateFolder } from "@pipeshub-ai/sdk/funcs/knowledge-base-create-folder.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseCreateFolder(pipeshub, {
    kbId: "<id>",
    body: {
      folderName: "Project Documents",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseCreateFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateFolderRequest](../../models/operations/create-folder-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FolderCreateResponseSchema](../../models/folder-create-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateFolder

Rename a folder.

**Required permission:** WRITER or higher


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateFolder" method="put" path="/knowledgeBase/{kbId}/folder/{folderId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.updateFolder({
    kbId: "<id>",
    folderId: "<id>",
    body: {
      folderName: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseUpdateFolder } from "@pipeshub-ai/sdk/funcs/knowledge-base-update-folder.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseUpdateFolder(pipeshub, {
    kbId: "<id>",
    folderId: "<id>",
    body: {
      folderName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseUpdateFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateFolderRequest](../../models/operations/update-folder-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FolderUpdateResponseSchema](../../models/folder-update-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteFolder

Delete a folder and all its contents.

**Required permission:** WRITER or higher

**Cascade delete:**

All subfolders and records within will be permanently deleted.

**Warning:** This action is irreversible.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteFolder" method="delete" path="/knowledgeBase/{kbId}/folder/{folderId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.deleteFolder({
    kbId: "<id>",
    folderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseDeleteFolder } from "@pipeshub-ai/sdk/funcs/knowledge-base-delete-folder.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseDeleteFolder(pipeshub, {
    kbId: "<id>",
    folderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseDeleteFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFolderRequest](../../models/operations/delete-folder-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FolderDeleteResponseSchema](../../models/folder-delete-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## uploadRecords

Upload one or more files to a knowledge base root or to a specific folder.

**Overview**

Batch upload multiple files in a single request. Each file becomes a new record with automatic content indexing.
Omit the `folderId` query parameter to upload to the KB root; include it to upload into that folder.

**Upload Limits**

- **Max files per request:** 1000
- **Default max file size:** 30MB (configurable via platform settings)
- Use `GET /knowledgeBase/limits` to check current limits

**Supported File Types**

Documents (PDF, DOCX, DOC, XLS, XLSX, PPT, PPTX, TXT, CSV, MD), Images (PNG, JPG, JPEG, SVG, WebP), Web (HTML, HTM), and Google Workspace formats.

**File Metadata**

Use `files_metadata` to provide additional info like file paths and last modified timestamps.

**Versioning**

Set `isVersioned: true` to enable version tracking for uploaded files.

**Streaming response**

This endpoint responds with `Content-Type: text/event-stream`.
The upload and its per-file progress are a single request: the body streams
a `file:succeeded` or `file:failed` event per file
(including files rejected up front for size/type), followed by a final
`done` summary, then closes. See the
`UploadStreamSSEEvent` schema for the event/payload contract.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadRecords" method="post" path="/knowledgeBase/{kbId}/upload" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.uploadRecords({
    kbId: "<id>",
    body: {
      files: [],
      filesMetadata: "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseUploadRecords } from "@pipeshub-ai/sdk/funcs/knowledge-base-upload-records.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseUploadRecords(pipeshub, {
    kbId: "<id>",
    body: {
      files: [],
      filesMetadata: "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("knowledgeBaseUploadRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadRecordsRequest](../../models/operations/upload-records-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<models.UploadStreamSSEEvent>](../../models/.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 403, 404, 413, 429 | application/json             |
| errors.PipeshubDefaultError  | 4XX, 5XX                     | \*/\*                        |

## getUploadLimits

Retrieve current upload constraints for the organization.

**Use case:** Call this before uploads to validate file sizes on the client
side and display appropriate limits to users.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUploadLimits" method="get" path="/knowledgeBase/limits" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.getUploadLimits();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseGetUploadLimits } from "@pipeshub-ai/sdk/funcs/knowledge-base-get-upload-limits.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseGetUploadLimits(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseGetUploadLimits failed:", res.error);
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

**Promise\<[models.UploadLimitsResponseSchema](../../models/upload-limits-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 401                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## reindexRecord

Trigger reindexing for a specific record.

**Overview:**

Reprocesses the record's content to update search indexes and AI embeddings. Useful after content changes or to fix indexing failures.

**Depth parameter:**

Controls processing depth for complex documents (`-1` for full depth, `0`–`100` for limited).

**Status filters:**

Optional `statusFilters` array limits reindex to records in matching indexing states
(e.g. `FAILED`, `AUTO_INDEX_OFF`).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="reindexRecord" method="post" path="/knowledgeBase/reindex/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.reindexRecord({
    recordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseReindexRecord } from "@pipeshub-ai/sdk/funcs/knowledge-base-reindex-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseReindexRecord(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseReindexRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReindexRecordRequest](../../models/operations/reindex-record-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ReIndexRecordResponseSchema](../../models/re-index-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## reindexRecordGroup

Trigger reindexing for all records in a folder or knowledge base.

**Overview:**

Batch reindex operation for entire containers. The `recordGroupId` can be a folder ID or KB ID.

**Status filters:**

Optional `statusFilters` limit which child records are queued (e.g. failed-only or manual-indexing).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="reindexRecordGroup" method="post" path="/knowledgeBase/reindex/record-group/{recordGroupId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.reindexRecordGroup({
    recordGroupId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseReindexRecordGroup } from "@pipeshub-ai/sdk/funcs/knowledge-base-reindex-record-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseReindexRecordGroup(pipeshub, {
    recordGroupId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseReindexRecordGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReindexRecordGroupRequest](../../models/operations/reindex-record-group-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ReIndexRecordGroupResponseSchema](../../models/re-index-record-group-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## moveRecord

Move a file or folder record to a different location within the same knowledge base.

Set `newParentId` to a folder ID to move the record into that folder, or `null` to move it to the knowledge base root.

**Required Permission:** OWNER or WRITER


### Example Usage: moveToFolder

<!-- UsageSnippet language="typescript" operationID="moveRecord" method="put" path="/knowledgeBase/{kbId}/record/{recordId}/move" example="moveToFolder" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.moveRecord({
    kbId: "702f8ff0-0a01-4354-b592-eea268f40f25",
    recordId: "<id>",
    body: {
      newParentId: "folder-abc123",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseMoveRecord } from "@pipeshub-ai/sdk/funcs/knowledge-base-move-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseMoveRecord(pipeshub, {
    kbId: "702f8ff0-0a01-4354-b592-eea268f40f25",
    recordId: "<id>",
    body: {
      newParentId: "folder-abc123",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseMoveRecord failed:", res.error);
  }
}

run();
```
### Example Usage: moveToRoot

<!-- UsageSnippet language="typescript" operationID="moveRecord" method="put" path="/knowledgeBase/{kbId}/record/{recordId}/move" example="moveToRoot" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.moveRecord({
    kbId: "8bdbd4fc-ec2e-4e15-8a88-ae59a5b4bad2",
    recordId: "<id>",
    body: {
      newParentId: null,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseMoveRecord } from "@pipeshub-ai/sdk/funcs/knowledge-base-move-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseMoveRecord(pipeshub, {
    kbId: "8bdbd4fc-ec2e-4e15-8a88-ae59a5b4bad2",
    recordId: "<id>",
    body: {
      newParentId: null,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseMoveRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MoveRecordRequest](../../models/operations/move-record-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KnowledgeBaseMoveRecordResponse](../../models/knowledge-base-move-record-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## ~~getKnowledgeHubRootNodes~~

Returns root-level nodes (connector apps and Collection apps) or, when
filters or search are applied, a flat list of matching nodes across the
entire knowledge hub tree.

**Overview**

The Knowledge Hub provides a unified view across all knowledge sources:
- **Collection** — locally uploaded knowledge bases (`origin: COLLECTION`)
- **Connector app** — external connector instances such as Google Drive,
  Slack, Confluence, Jira (`origin: CONNECTOR`)

Use this endpoint to build file-browser UIs and sidebar navigation trees.

**Browsing vs. searching**

When no filters or search query are provided, only top-level app nodes
are returned. Adding `nodeTypes`, `q`, or other filter params triggers a
search across the full tree, returning matching nodes regardless of depth.

For children of a specific node, use
`GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`.

**Pagination and sorting**

Results are always paginated. Default sort is `updatedAt` descending.
The `pagination` object in the response contains `hasNext` / `hasPrev`
flags suitable for infinite-scroll or page-based navigation.

**Expanding the response**

Use the `include` parameter to request additional sections:
- `availableFilters` — adds `filters.available` with all filter options
- `counts` — adds a `counts` summary broken down by node type
- `breadcrumbs` — adds the breadcrumb trail (empty at root level)
- `permissions` — adds the caller's permission flags

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.


> :warning: **DEPRECATED**: Use the Knowledge Base API instead. This grouping will be removed in a future release.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKnowledgeHubRootNodes" method="get" path="/knowledgeBase/knowledge-hub/nodes" example="root_apps" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.getKnowledgeHubRootNodes({
    q: "quarterly report",
    nodeTypes: "app,recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "availableFilters,counts",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseGetKnowledgeHubRootNodes } from "@pipeshub-ai/sdk/funcs/knowledge-base-get-knowledge-hub-root-nodes.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseGetKnowledgeHubRootNodes(pipeshub, {
    q: "quarterly report",
    nodeTypes: "app,recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "availableFilters,counts",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseGetKnowledgeHubRootNodes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKnowledgeHubRootNodesRequest](../../models/operations/get-knowledge-hub-root-nodes-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KnowledgeHubNodesResponse](../../models/knowledge-hub-nodes-response.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetKnowledgeHubRootNodesBadRequestError     | 400                                                | application/json                                   |
| errors.GetKnowledgeHubRootNodesUnauthorizedError   | 401                                                | application/json                                   |
| errors.GetKnowledgeHubRootNodesForbiddenError      | 403                                                | application/json                                   |
| errors.GetKnowledgeHubRootNodesInternalServerError | 500                                                | application/json                                   |
| errors.PipeshubDefaultError                        | 4XX, 5XX                                           | \*/\*                                              |

## ~~getKnowledgeHubChildNodes~~

Returns the children of a specific node in the knowledge hub tree.
Use this endpoint to drill down into Collections, connector app
hierarchies, folders, and record groups.

**Navigation hierarchy**

The typical drill-down path is:
1. Root apps (`GET /knowledgeBase/knowledge-hub/nodes`)
2. Record groups / folders within an app (`parentType=app`)
3. Records within a record group (`parentType=recordGroup`)
4. Sub-records or attachments within a record (`parentType=record`)

**Parent identification**

- `parentType` must be one of: `app`, `recordGroup`, `folder`, `record`
- `parentId` is either a standard UUID or the Collection app sentinel
  `knowledgeBase_<orgId>` (e.g. `knowledgeBase_org123`)

**Filtering and searching**

All query-param filters from the root endpoint are available here and
operate within the scope of the parent node's subtree. When `q` is
provided, the search spans all descendants of the parent node.

**Response extras**

When `include=breadcrumbs` is set, the response contains a
`breadcrumbs` array tracing the path from the root to the current
node. The `currentNode` and `parentNode` objects are always populated
for non-root requests.

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.


> :warning: **DEPRECATED**: Use the Knowledge Base API instead. This grouping will be removed in a future release.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getKnowledgeHubChildNodes" method="get" path="/knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}" example="collection_record_groups" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.getKnowledgeHubChildNodes({
    parentType: "app",
    parentId: "<id>",
    q: "quarterly report",
    nodeTypes: "recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "breadcrumbs,availableFilters",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseGetKnowledgeHubChildNodes } from "@pipeshub-ai/sdk/funcs/knowledge-base-get-knowledge-hub-child-nodes.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseGetKnowledgeHubChildNodes(pipeshub, {
    parentType: "app",
    parentId: "<id>",
    q: "quarterly report",
    nodeTypes: "recordGroup",
    recordTypes: "FILE,CONFLUENCE_PAGE",
    origins: "CONNECTOR",
    connectorIds: "f3a4b5b6-5b6c-4e85-9097-3202cfe696fc",
    indexingStatus: "COMPLETED,FAILED",
    createdAt: "gte:1700000000000,lte:1710000000000",
    updatedAt: "gte:1700000000000,lte:1710000000000",
    size: "gte:0,lte:10485760",
    include: "breadcrumbs,availableFilters",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseGetKnowledgeHubChildNodes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKnowledgeHubChildNodesRequest](../../models/operations/get-knowledge-hub-child-nodes-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KnowledgeHubNodesResponse](../../models/knowledge-hub-nodes-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.GetKnowledgeHubChildNodesBadRequestError     | 400                                                 | application/json                                    |
| errors.GetKnowledgeHubChildNodesUnauthorizedError   | 401                                                 | application/json                                    |
| errors.GetKnowledgeHubChildNodesForbiddenError      | 403                                                 | application/json                                    |
| errors.GetKnowledgeHubChildNodesNotFoundError       | 404                                                 | application/json                                    |
| errors.GetKnowledgeHubChildNodesInternalServerError | 500                                                 | application/json                                    |
| errors.PipeshubDefaultError                         | 4XX, 5XX                                            | \*/\*                                               |
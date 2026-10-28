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
* [updateRecordMultipart](#updaterecordmultipart) - Update record
* [updateRecord](#updaterecord) - Update record
* [updateRecordForm](#updaterecordform) - Update record
* [deleteRecord](#deleterecord) - Delete record
* [restoreRecord](#restorerecord) - Restore a deleted record
* [restoreRecords](#restorerecords) - Restore several deleted records
* [listTrash](#listtrash) - List a collection's recently deleted items
* [streamRecordBuffer](#streamrecordbuffer) - Stream record content
* [createFolder](#createfolder) - Create folder
* [createSubfolder](#createsubfolder) - Create subfolder
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

- Name must be 1-255 characters and hold at least one character that is not whitespace
- Whitespace around the name is removed before it is stored
- A name that contains an HTML tag, a `javascript:` URL or an inline event handler
  (`onclick=` and the like) is refused with `400`; nothing is stripped out of it
- Names don't need to be unique within organization

**Request body:**

Only `kbName` is read. Any other field is dropped before the handler runs, so a
knowledge base cannot be created hidden, or with another role or organization,
through this endpoint.

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

- **search:** Full-text search on KB names (max 1000 chars). A longer value is answered `500`, not `400`.
- **permissions:** Filter by user's role (comma-separated: OWNER, WRITER, READER)

**Sorting Options:**

- `name` — Alphabetical by KB name
- `createdAtTimestamp` — By creation date
- `updatedAtTimestamp` — By last modification
- `userRole` — By permission level

**Performance:**

Uses efficient pagination with limit/offset. For large result sets, use smaller page sizes.

**Query parameters:**

Only `page`, `limit`, `search`, `permissions`, `sortBy`, and `sortOrder` are allowed; any other
query key is rejected with `400` (`VALIDATION_ERROR`: "These fields aren't accepted here: <key>.").
A parameter sent more than once is rejected the same way. `page`, `limit`, `search`,
`permissions` and `sortBy` sent with an empty value are read as not sent; an empty
`sortOrder` is rejected.


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

Returns complete KB metadata including name, timestamps, every folder (nested ones
included, without their parent), and the requesting user's role.

**Access Control:**

User must have at least READER permission to view KB details. A knowledge base the
caller holds no role on is answered `404` with the same message as an unknown id, so
its existence is not revealed.

**Request:** only the `kbId` path parameter is read; any query string or body is ignored.


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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateKnowledgeBase

Update a knowledge base's name.

**Required permission:**

User must have one of `OWNER` or `WRITER` on the knowledge base.

**Validation:**

- `kbId` path parameter must be a valid UUID (`updateKBSchema`)
- `kbName` is trimmed first, then must be 1–255 characters
- A `kbName` holding an HTML tag, a `javascript:` URL or an inline event handler is
  refused with `400` before authentication; one holding a printf-style format
  specifier (`%s`, `%n`, `%x`, `%p`, with flags and width such as `%08x`) is refused
  with `400` by the gateway controller. A plain `%` (`50% off`) is accepted.
- `kbName` is the only field read. Other body fields and any query parameter are
  ignored, so a body without `kbName` (an empty object, no body, or only unknown
  fields) is refused by the connector service with `400` `No fields to update`.


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
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
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

**Request:** only the `kbId` path parameter is read; any query string or body is ignored.


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
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getRecordById

Retrieve detailed information about a specific record.

**Overview:**

Returns complete record metadata including name, type, indexing status, storage information, and version history.

**Query parameters:**

`convertTo` and `version` are checked by the request validator but not used by this
endpoint: the response is the same JSON metadata whatever they hold. They take effect
on `GET /knowledgeBase/stream/record/{recordId}`, which shares the validator. Any other
query parameter is ignored.

**Not found:**

A record that does not exist, one the caller has no access to and one that is in the
trash all answer `404` with the same message, so a record's existence is not revealed.


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
    version: "2",
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
    version: "2",
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

## updateRecordMultipart

Update a record's name and/or file content.

**Overview:**

Allows updating the display name and optionally replacing the file content. Triggers re-indexing when content changes.

**Required permission:**

WRITER or higher on the record's knowledge base. A READER is answered `403`; a caller
with no role is answered `404`.

**Renaming:**

Send `recordName` as a multipart field or in a JSON body. There is no length limit.
A request with no body, an empty JSON object or an empty `recordName` changes nothing
and still answers `200`. In a JSON body the name is trimmed first (so a blank name is
read as empty and changes nothing); in a multipart form it is not, and a blank name
is refused with `400`. Fields other than `recordName` and `file` are ignored.

**Updating file content:**

Include a new file in a multipart request to replace the existing content. The file
extension must match the original: a file with another extension is answered `500`,
not `400`. When a file is sent, `recordName` is ignored and the record is named after
the file (without its extension).

**Side effects:**

- Updates `updatedAtTimestamp`
- A new file is stored as the next version of the record's storage document and the
  record is queued for indexing again. The record's own `version` and `sizeInBytes`
  are not updated by this call.

**Known gaps:**

- Renaming a record that is in the trash is not refused: the answer is `200` with the
  success message, but nothing changes, and `record` is the trashed record (`isDeleted: true`,
  with `deletedAtTimestamp`, `deleteBatchId` and `deleteSource`).
- `fileBuffer` is an internal field filled by the upload parser. A JSON body that
  supplies an object under that name (`buffer`, `originalname`, `mimetype`, `size`,
  `lastModified`) is treated as an uploaded file and stored as the new version.

**OAuth scopes:** `kb:write`, plus `kb:read`: replacing the file first reads the record and its knowledge base with the caller's token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateRecord_multipart" method="put" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.updateRecordMultipart({
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
import { knowledgeBaseUpdateRecordMultipart } from "@pipeshub-ai/sdk/funcs/knowledge-base-update-record-multipart.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseUpdateRecordMultipart(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseUpdateRecordMultipart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRecordMultipartRequest](../../models/operations/update-record-multipart-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateRecordResponseSchema](../../models/update-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateRecord

Update a record's name and/or file content.

**Overview:**

Allows updating the display name and optionally replacing the file content. Triggers re-indexing when content changes.

**Required permission:**

WRITER or higher on the record's knowledge base. A READER is answered `403`; a caller
with no role is answered `404`.

**Renaming:**

Send `recordName` as a multipart field or in a JSON body. There is no length limit.
A request with no body, an empty JSON object or an empty `recordName` changes nothing
and still answers `200`. In a JSON body the name is trimmed first (so a blank name is
read as empty and changes nothing); in a multipart form it is not, and a blank name
is refused with `400`. Fields other than `recordName` and `file` are ignored.

**Updating file content:**

Include a new file in a multipart request to replace the existing content. The file
extension must match the original: a file with another extension is answered `500`,
not `400`. When a file is sent, `recordName` is ignored and the record is named after
the file (without its extension).

**Side effects:**

- Updates `updatedAtTimestamp`
- A new file is stored as the next version of the record's storage document and the
  record is queued for indexing again. The record's own `version` and `sizeInBytes`
  are not updated by this call.

**Known gaps:**

- Renaming a record that is in the trash is not refused: the answer is `200` with the
  success message, but nothing changes, and `record` is the trashed record (`isDeleted: true`,
  with `deletedAtTimestamp`, `deleteBatchId` and `deleteSource`).
- `fileBuffer` is an internal field filled by the upload parser. A JSON body that
  supplies an object under that name (`buffer`, `originalname`, `mimetype`, `size`,
  `lastModified`) is treated as an uploaded file and stored as the new version.

**OAuth scopes:** `kb:write`, plus `kb:read`: replacing the file first reads the record and its knowledge base with the caller's token.


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

**Promise\<[models.UpdateRecordResponseSchema](../../models/update-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateRecordForm

Update a record's name and/or file content.

**Overview:**

Allows updating the display name and optionally replacing the file content. Triggers re-indexing when content changes.

**Required permission:**

WRITER or higher on the record's knowledge base. A READER is answered `403`; a caller
with no role is answered `404`.

**Renaming:**

Send `recordName` as a multipart field or in a JSON body. There is no length limit.
A request with no body, an empty JSON object or an empty `recordName` changes nothing
and still answers `200`. In a JSON body the name is trimmed first (so a blank name is
read as empty and changes nothing); in a multipart form it is not, and a blank name
is refused with `400`. Fields other than `recordName` and `file` are ignored.

**Updating file content:**

Include a new file in a multipart request to replace the existing content. The file
extension must match the original: a file with another extension is answered `500`,
not `400`. When a file is sent, `recordName` is ignored and the record is named after
the file (without its extension).

**Side effects:**

- Updates `updatedAtTimestamp`
- A new file is stored as the next version of the record's storage document and the
  record is queued for indexing again. The record's own `version` and `sizeInBytes`
  are not updated by this call.

**Known gaps:**

- Renaming a record that is in the trash is not refused: the answer is `200` with the
  success message, but nothing changes, and `record` is the trashed record (`isDeleted: true`,
  with `deletedAtTimestamp`, `deleteBatchId` and `deleteSource`).
- `fileBuffer` is an internal field filled by the upload parser. A JSON body that
  supplies an object under that name (`buffer`, `originalname`, `mimetype`, `size`,
  `lastModified`) is treated as an uploaded file and stored as the new version.

**OAuth scopes:** `kb:write`, plus `kb:read`: replacing the file first reads the record and its knowledge base with the caller's token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateRecord_form" method="put" path="/knowledgeBase/record/{recordId}" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.updateRecordForm({
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
import { knowledgeBaseUpdateRecordForm } from "@pipeshub-ai/sdk/funcs/knowledge-base-update-record-form.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseUpdateRecordForm(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseUpdateRecordForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRecordFormRequest](../../models/operations/update-record-form-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateRecordResponseSchema](../../models/update-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteRecord

Delete a record from the knowledge base.

**Required permission:**

WRITER or higher on the record's knowledge base. A READER is answered `403`; a caller
with no role, an unknown id and a record that is already in the trash are all answered `404`.
The query string and any request body are ignored.

**What gets deleted:**

- Record metadata
- Associated storage file
- Indexed content and embeddings

**Trash:** With "Move Deleted Records to the Trash" on in Labs, the record
goes to the trash instead: it disappears from search, chat and lists at once,
its embeddings are removed, and the record and its file stay until the scheduled
purge. The response then carries `softDeleted: true` and the `batchId`, and the
record can be brought back with `POST /knowledgeBase/record/{recordId}/restore`.
With the setting off, the delete is immediate and cannot be undone.
A folder sent to the trash this way goes alone: the records inside it stay live and
readable. `DELETE /knowledgeBase/{kbId}/folder/{folderId}` trashes a folder with its
contents.


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
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## restoreRecord

Bring a record back from the trash, together with everything deleted in the
same action: a folder comes back with its contents, a file with its
attachments, a multi-select delete with every item it removed.

Needs "Move Deleted Records to the Trash" on in Labs.

**Required permission:** the role the delete needed. A single file needs
OWNER, WRITER or FILEORGANIZER on its collection; a folder or several items
need OWNER or WRITER.

**Names:** an item whose name another item next to it now uses comes back
as "name (restored)" (a file keeps its extension: "report (restored).pdf").

**Search:** restored files are indexed again, so they return to search and
chat once indexing finishes. `reindexPending` lists any that could not be
queued; reindex those by hand. A file that is back but whose indexing never
started is queued again when it is restored again, and the indexing service
queues it on its own after about an hour.

A record that is not in the trash answers 200 with nothing restored.
The query string and any request body are ignored.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="restoreRecord" method="post" path="/knowledgeBase/record/{recordId}/restore" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.restoreRecord({
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
import { knowledgeBaseRestoreRecord } from "@pipeshub-ai/sdk/funcs/knowledge-base-restore-record.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseRestoreRecord(pipeshub, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseRestoreRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RestoreRecordRequest](../../models/operations/restore-record-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RestoreRecordResponseSchema](../../models/restore-record-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## restoreRecords

Restore up to 100 records from the trash. Each id is restored as
`POST /knowledgeBase/record/{recordId}/restore` restores it, with everything
deleted along with it; ids from one delete are restored once. Every id gets its
own outcome in `results`, so one refusal does not hold the others back, and the
answer is 200 whatever the outcomes: with the trash turned off in Labs every id is
refused with `code: 403` inside a 200. An id listed twice is answered once. Body
fields other than `recordIds` are ignored.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="restoreRecords" method="post" path="/knowledgeBase/records/restore" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.restoreRecords({
    recordIds: [
      "<value 1>",
      "<value 2>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "@pipeshub-ai/sdk/core.js";
import { knowledgeBaseRestoreRecords } from "@pipeshub-ai/sdk/funcs/knowledge-base-restore-records.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseRestoreRecords(pipeshub, {
    recordIds: [
      "<value 1>",
      "<value 2>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseRestoreRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.RestoreRecordsRequestBody](../../models/restore-records-request-body.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RestoreRecordsResponseSchema](../../models/restore-records-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 409          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## listTrash

One page of what was deleted from a collection and can still be restored,
newest first. Each item is what one delete removed, as a restore brings it back
whole: a folder deleted with its contents is one item, and so is a multi-select
delete (`rootCount` items selected, some named in `otherRootNames`). `itemCount`
says how many records it holds, the folder included.

A folder deleted with `DELETE /knowledgeBase/{kbId}/folder/{folderId}` takes its
contents along. A folder deleted with `DELETE /knowledgeBase/record/{recordId}`
goes to the trash alone (`itemCount` 1): the records inside it stay live.
Restore an item with `POST /knowledgeBase/record/{recordId}/restore`, using its `id`.

Needs "Move Deleted Records to the Trash" on in Labs.

**Who sees what:** the list holds what the caller may restore. OWNER and
WRITER see every item; FILEORGANIZER sees single files only; other roles are
refused. The workspace and user always come from the sign-in.

**Removed for good:** the scheduled cleanup may remove an item from
`removableAfterTimestamp` on (at least 14 days after it was deleted by
default; it runs every 14 days, so an item stays 14 to 28 days). It is
absent when the retention settings can't be read.

An item whose folder is also in the trash (`parentInTrash`) can only be
restored after that folder.

**Request:** query parameters other than `page` and `limit` are ignored. A page past
the last one is answered `200` with no items.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTrash" method="get" path="/knowledgeBase/{kbId}/trash" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.listTrash({
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
import { knowledgeBaseListTrash } from "@pipeshub-ai/sdk/funcs/knowledge-base-list-trash.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseListTrash(pipeshub, {
    kbId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseListTrash failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTrashRequest](../../models/operations/list-trash-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListTrashResponseSchema](../../models/list-trash-response-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorResponse        | 400, 401, 403, 404          | application/json            |
| errors.ErrorResponse        | 500, 503                    | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## streamRecordBuffer

Stream the binary content of a record's file.

**Overview:**

Returns the stored file's bytes with the file's own `Content-Type` (for an uploaded
file, the MIME type it was uploaded with, followed by `; charset=utf-8`, for example
`text/plain; charset=utf-8` or `application/json; charset=utf-8`). No
`Content-Disposition` header is sent for uploaded files.

**Use cases:**

- File downloads
- Inline document preview
- Content extraction pipelines

**Format conversion:**

`convertTo=application/pdf` asks for a PDF rendering of documents that can be
converted. Any other value, and the conversion request for a plain-text file, is
ignored: the original file is returned.

**Access:** the caller needs access to the record (any role on its knowledge base).
Without it, and for a record in the trash, the answer is `403`. An unknown record, or
an id that is not a record (a knowledge base id), is `404`. A folder has no content:
the answer is `502`.

**Errors** that come from the connector service are relayed with its status as
`{"error": "<message>"}` (`StreamRecordErrorResponse`); errors raised by the gateway
itself (`400`, `401`, scope `403`, malformed body `500`) use `ErrorResponse`.

**Request:** unknown query parameters are ignored.


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
| errors.ErrorResponse             | 500                              | application/json                 |
| errors.StreamRecordErrorResponse | 502                              | application/json                 |
| errors.PipeshubDefaultError      | 4XX, 5XX                         | \*/\*                            |

## createFolder

Create a folder in a knowledge base. Omit `folderId` to create at the KB root;
pass `folderId` as a query parameter to create a nested subfolder inside an
existing parent folder.

**Required permission:** WRITER or higher

**Folder features:**

- Organize records hierarchically
- Support nested subfolders, up to 20 levels deep
- Inherit parent KB permissions

**Naming rules:**

- Whitespace around the name is removed first; then 1–255 characters
- A name holding an HTML tag, a `javascript:` URL or an inline event handler is
  refused with `400` before authentication; one holding a printf-style format
  specifier (`%s`, `%x`, `%n`, `%p`) is refused with `400` by the gateway controller
- Spaces and special characters allowed
- A name already used by a folder in the same parent is refused with `409`, ignoring
  case (`Reports` and `rEPORTS` clash). A file of the same name, or a folder of the
  same name under another parent, does not clash.

**Request:** only `folderName` and the `folderId` query parameter are read; other body
fields and query parameters are ignored, except a `folderId`, `parentId` or
`parent_id` in the body and a `parentId` or `parent_id` query parameter, which are
refused with `400`.

**Access:** a caller with no role on the knowledge base gets `404`
(`Knowledge base <kbId> not found`), a `READER` gets `403`.

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

## createSubfolder

Create a nested subfolder inside an existing parent folder, named by the `folderId`
path parameter. It runs the same validator and handler as
`POST /knowledgeBase/{kbId}/folder`. A `folderId` query parameter is still read: one
that names a different folder than the path is refused with `400`.

**Required permission:** WRITER or higher

**Folder features:**

- Organize records hierarchically
- Support nested subfolders, up to 20 levels deep
- Inherit parent KB permissions

**Naming rules:**

- Whitespace around the name is removed first; then 1–255 characters
- A name holding an HTML tag, a `javascript:` URL or an inline event handler is
  refused with `400` before authentication; one holding a printf-style format
  specifier (`%s`, `%x`, `%n`, `%p`) is refused with `400` by the gateway controller
- Spaces and special characters allowed
- A name already used by a folder in the same parent is refused with `409`, ignoring
  case (`Reports` and `rEPORTS` clash). A file of the same name, or a folder of the
  same name under another parent, does not clash.

**Request:** only `folderName` and the `folderId` query parameter are read; other body
fields and query parameters are ignored, except a `folderId`, `parentId` or
`parent_id` in the body and a `parentId` or `parent_id` query parameter, which are
refused with `400`.

**Access:** a caller with no role on the knowledge base gets `404`
(`Knowledge base <kbId> not found`), a `READER` gets `403`.

**Response:** Returns `id` and `name` for the created folder.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSubfolder" method="post" path="/knowledgeBase/{kbId}/folder/{folderId}/subfolder" -->
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.knowledgeBase.createSubfolder({
    kbId: "<id>",
    folderIdPathParameter: "<id>",
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
import { knowledgeBaseCreateSubfolder } from "@pipeshub-ai/sdk/funcs/knowledge-base-create-subfolder.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeBaseCreateSubfolder(pipeshub, {
    kbId: "<id>",
    folderIdPathParameter: "<id>",
    body: {
      folderName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("knowledgeBaseCreateSubfolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSubfolderRequest](../../models/operations/create-subfolder-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Rename a folder, at the root or nested.

**Required permission:** WRITER or higher. A `READER` gets `403`; a caller with no
role on the knowledge base gets `404` (`Knowledge base not found`).

**Naming rules:** the same as for creating a folder. Whitespace around the name is
removed first; HTML is refused with `400` before authentication and a printf-style
format specifier with `400` by the gateway controller. A name already used by another
folder in the same parent is refused with `409`, ignoring case; renaming a folder to
its own name, or to the name of a file, is allowed.

**Request:** `kbId` and `folderId` are only checked to be non-empty (an id that is not
a UUID is looked up and answered `404`). Only `folderName` is read; other body fields
and any query parameter are ignored.


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

**Required permission:** WRITER or higher. A `READER` gets `403`; a caller with no
role on the knowledge base gets `404`.

**Cascade delete:**

All subfolders and records within are deleted for good, unless "Move Deleted Records
to the Trash" (Labs flag `ENABLE_SOFT_DELETE`) is on: then they all go to the trash and
can be brought back with `POST /knowledgeBase/record/{folderId}/restore`. The response
is the same in both cases. Known gap: while in the trash, the folder is still listed
in `folders` by `GET /knowledgeBase/{kbId}`, although its records answer `404`.

**Request:** `kbId` and `folderId` are only checked to be non-empty; any query string
or body is ignored.


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
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
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
A path with folders (`docs/2026/a.txt`) creates those folders, as a folder upload does.

**Rejected files**

A file whose extension is not supported, or that is larger than the size limit, does
not fail the request: it is reported as a `file:failed` event (`reason`
`UNSUPPORTED_TYPE` or `EXCEEDS_SIZE_LIMIT`, `stage: upload`) and the other files go on.
A file whose name is already used in the same place fails the same way with `reason`
`DUPLICATE_NAME` and `stage: index`. The request still answers `200` when every file
failed. There is no `413`.

**Ignored fields**

`recordName`, `recordType` and `origin` are validated (non-empty, and `recordName` is
checked for HTML and format specifiers) but do not affect the records: each record is
named after its file, with origin `UPLOAD` and type `FILE`. Other fields and unknown
query parameters are ignored; `rejectedFiles` and `fileBuffers` are set by the gateway
itself, so a value sent for them is replaced.

**Access**

`OWNER` and `WRITER` may upload. A `READER` gets `403`; a caller with no role on the
knowledge base gets `404`. Only a multipart body is read: a JSON body has no files and
is refused with `400`.

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
      filesMetadata: [
        {
          filePath: "/docs/report.pdf",
          lastModified: 2024,
        },
      ],
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
      filesMetadata: [
        {
          filePath: "/docs/report.pdf",
          lastModified: 2024,
        },
      ],
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
| errors.ErrorResponse         | 400, 401, 403, 404, 409, 429 | application/json             |
| errors.ErrorResponse         | 500                          | application/json             |
| errors.PipeshubDefaultError  | 4XX, 5XX                     | \*/\*                        |

## getUploadLimits

Retrieve current upload constraints for the organization.

**Use case:** Call this before uploads to validate file sizes on the client
side and display appropriate limits to users.

`maxFilesPerRequest` is a fixed 1000. `maxFileSizeBytes` is the organization's
`fileUploadMaxSizeBytes` platform setting, read on every call (30 MB when the
setting cannot be read). Any signed-in member gets the same values; no knowledge
base role is needed.

**Request:** there is no validator and nothing from the request is read; any query
string is ignored.


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
| errors.ErrorResponse        | 400, 401, 403               | application/json            |
| errors.ErrorResponse        | 500                         | application/json            |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## reindexRecord

Trigger reindexing for a specific record.

**Overview:**

Reprocesses the record's content to update search indexes and AI embeddings. Useful after content changes or to fix indexing failures.

**Depth parameter:**

Controls processing depth for complex documents (`-1` for full depth, `0`–`100` for limited).

**Status filters:**

Optional `statusFilters` array limits reindex to records in matching indexing states
(e.g. `FAILED`, `AUTO_INDEX_OFF`, `PASSWORD_PROTECTED`). Any string is accepted.

**Access:** any role on the record's knowledge base may reindex it, `READER` included.
For a connector record, read access to the record is enough. A record of a disabled
connector is refused with `409`, a record in the trash with `400`.

**Request:** only `depth` and `statusFilters` are read; other body fields (`force`
included) and any query parameter are ignored. The body is optional.


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

Trigger reindexing for all records in a record group.

**Overview:**

Batch reindex operation for a connector's container (a drive, a space, a channel, a
crawled site). Record groups are written by connector syncs only: a knowledge base id
or a knowledge base folder id is not a record group and is answered `404` (reindex
those with `POST /knowledgeBase/reindex/record/{recordId}` and a depth).

**Status filters:**

Optional `statusFilters` limit which child records are queued (e.g. failed-only or
manual-indexing). Any string is accepted.

**Access:** the caller needs access to the record group (an organization-wide
connector gives it to every member; a personal one only to its owner); without it the
answer is `403`. A record group of a disabled connector is refused with `409`.

**Request:** only `depth` and `statusFilters` are read; other body fields (`force`
included) and any query parameter are ignored. The body is optional.


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

Set `newParentId` to a folder ID to move the record into that folder, or `null` (or an
empty string) to move it to the knowledge base root. A folder moves with everything in
it. Moving a record to where it already is answers `200` with the same body.

**Required Permission:** OWNER or WRITER. A `READER` gets `403`; a caller with no role
on the knowledge base gets `404` (`Knowledge base not found`).

**Request:** only `newParentId` is read; other body fields and any query parameter
are ignored.


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
| errors.ErrorResponse        | 400, 401, 403, 404, 409     | application/json            |
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

**A connected app with a limit**

A token that may see only some sources pages and counts only what
its limit lets it see:
- Limited to whole sources (apps or collections) only: the listing
  and the search cover those, with exact totals and counts.
- Limited to any spaces, folders or files, alone or beside whole
  sources: the listing returns each whole source, space (record
  group), folder and file the limit names, one item each, to open
  by its `id`. `totalItems` counts those items, not what is inside
  them. A search reads
  forward only (`prevCursor` is always null), and takes a `page`
  number up to 5; for later pages, send `nextCursor`. Its `totalItems` counts
  the matches found so far and can grow from page to page; it is
  final once `hasNext` is false. `counts` is returned only when the
  whole result fits in the first page read, and is `null` otherwise.
- An item can sit in a folder the limit leaves out, as a file the
  limit names does. Its `parentId` and `parent` are then `null`: the
  item is returned, and the folder above it is not named.
- A `nextCursor` or `prevCursor` belongs to the limit it was read
  under. A token with a different limit that sends it gets a `400`;
  start that listing again without a cursor.

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement. Only nodes the caller can access are listed.

**Request checking**

This route has no request validator of its own; the query is passed on and
checked by the connector service. Query parameters not listed here are
ignored. A wrong type for `page`, `limit`, `onlyContainers` or `flattened`
(or `page` below 1 or `limit` outside 1-200, or either sent more than once) is answered
`422`; a refused filter value is answered `400`.


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

**Promise\<[operations.GetKnowledgeHubRootNodesResponse](../../models/operations/get-knowledge-hub-root-nodes-response.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.ErrorResponse                                    | 400, 401, 403                                           | application/json                                        |
| errors.GetKnowledgeHubRootNodesUnprocessableEntityError | 422                                                     | application/json                                        |
| errors.ErrorResponse                                    | 500                                                     | application/json                                        |
| errors.GetKnowledgeHubRootNodesServiceUnavailableError  | 503                                                     | application/json                                        |
| errors.PipeshubDefaultError                             | 4XX, 5XX                                                | \*/\*                                                   |

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
- `parentId` must be a standard UUID

**Filtering and searching**

All query-param filters from the root endpoint are available here and
operate within the scope of the parent node's subtree. When `q` is
provided, the search spans all descendants of the parent node.

**Response extras**

When `include=breadcrumbs` is set, the response contains a
`breadcrumbs` array tracing the path from the root to the current
node. The `currentNode` object is always populated for non-root
requests. `parentNode` is too, except at the top of a source and for
a connected app whose limit leaves that parent out: it is `null` then.

**Access control**

Requires a valid bearer token. For OAuth tokens the `kb:read` scope
must be present; regular JWT bearer tokens pass through without scope
enforcement.

A parent the caller may not see, one in the trash, and one that does not
exist are all answered `404` with the same body, so the route does not reveal
whether the node exists.

**Request checking**

This route has no request validator of its own; the path values and the query
are checked by the connector service. Query parameters not listed here are
ignored. A wrong type for `page`, `limit`, `onlyContainers` or `flattened`
(or `page` below 1 or `limit` outside 1-200) is answered `422`; other refusals,
`page` above 50 and an unusable `cursor` included, are `400`.


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

**Promise\<[operations.GetKnowledgeHubChildNodesResponse](../../models/operations/get-knowledge-hub-child-nodes-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ErrorResponse                                     | 400, 401, 403, 404                                       | application/json                                         |
| errors.GetKnowledgeHubChildNodesUnprocessableEntityError | 422                                                      | application/json                                         |
| errors.ErrorResponse                                     | 500                                                      | application/json                                         |
| errors.GetKnowledgeHubChildNodesServiceUnavailableError  | 503                                                      | application/json                                         |
| errors.PipeshubDefaultError                              | 4XX, 5XX                                                 | \*/\*                                                    |
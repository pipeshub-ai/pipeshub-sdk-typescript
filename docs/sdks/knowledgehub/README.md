# KnowledgeHub

## Overview

### Available Operations

* [getKnowledgeHubRootNodes](#getknowledgehubrootnodes) - Get knowledge hub root nodes
* [getKnowledgeHubChildNodes](#getknowledgehubchildnodes) - Get knowledge hub child nodes

## getKnowledgeHubRootNodes

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
  const result = await pipeshub.knowledgeHub.getKnowledgeHubRootNodes({
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
import { knowledgeHubGetKnowledgeHubRootNodes } from "@pipeshub-ai/sdk/funcs/knowledge-hub-get-knowledge-hub-root-nodes.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeHubGetKnowledgeHubRootNodes(pipeshub, {
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
    console.log("knowledgeHubGetKnowledgeHubRootNodes failed:", res.error);
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

## getKnowledgeHubChildNodes

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
  const result = await pipeshub.knowledgeHub.getKnowledgeHubChildNodes({
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
import { knowledgeHubGetKnowledgeHubChildNodes } from "@pipeshub-ai/sdk/funcs/knowledge-hub-get-knowledge-hub-child-nodes.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const res = await knowledgeHubGetKnowledgeHubChildNodes(pipeshub, {
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
    console.log("knowledgeHubGetKnowledgeHubChildNodes failed:", res.error);
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
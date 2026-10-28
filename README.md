# pipeshub-sdk-typescript

**Compatibility:** SDK version 1.7.0 is compatible with PipesHub [v0.9.1](https://github.com/pipeshub-ai/pipeshub-ai/releases/tag/v0.9.1).

<!-- Start Summary [summary] -->
## Summary

PipesHub API: Unified API documentation for PipesHub services.

PipesHub is an enterprise-grade platform providing:
- User authentication and management
- Document storage and version control
- Knowledge base management
- Enterprise search and conversational AI
- Third-party integrations via connectors
- System configuration management
- Crawling job scheduling
- Email services

## Authentication
Most endpoints require JWT Bearer token authentication. Some internal endpoints use scoped tokens for service-to-service communication.

**OAuth 2.0 Bearer tokens** from `POST /oauth2/token` use the same `Authorization: Bearer` header. For **`client_credentials`**, machine tokens may encode `userId === client_id` in the JWT; the **Node API gateway** resolves the application's **token identity** — the service account it is pointed at (`tokenIdentityUserId`), or its creator for an application registered before that was required and never bound, and sets the authenticated user accordingly. It reads the application record on every request, and a token minted for a different identity than the app's current one is refused with `401`. See the **OAuth Provider** tag for full behavior.

## Behaviour common to every route
App-level middleware runs before any router, so the following applies to every operation below, before authentication, unless an exception is named.

**Markup filter.** A query value, or any string in a JSON or form-encoded body, that looks like markup is refused with `400 HTTP_BAD_REQUEST`. The message names where the value was, for example `HTML tags, scripts, and XSS content are not allowed in the field "name".` or `... in the query parameter "search".` (a field name that is not a plain identifier path reads `the request`), and says what counted: text in angle brackets such as `<id>` counts as an HTML tag, an encoded script tag counts, or script content such as `onclick=`, `javascript:` or `data:text/html` counts. A string over 100,000 characters is refused as too long to check instead: `The value of the field "name" is longer than 100,000 characters, which is too long to check for HTML tags and scripts. Please shorten it and try again.` It looks for an HTML tag, a script tag, `<iframe`, `<object`, `<embed` or `<svg` tag, a word starting with `on` followed by `=` (meant for inline event handlers such as `onerror=`, it also catches plain text such as `one=1`), a `javascript:` or `data:text/html` URL, an encoded script tag (`&lt;script`, `%3cscript`), and any string longer than 100,000 characters. A string the filter lets through is rewritten before the route sees it: the filter trims surrounding whitespace, drops a lone `<` together with everything after it (`a < b` arrives as `a`), and escapes `>` as `&gt;`. POST and PUT under `/agents/`, `/conversations/`, `/connectors` and `/api-toolsets`, and POST, PUT and PATCH under `/skills`, skip the filter. So does the question of a search: the `query` string of a JSON body sent to `POST /search` or `POST /retrieve` is neither checked nor rewritten, unless it is longer than 100,000 characters.

**Body parsers.** `application/json` bodies (up to 10 MB, 5 MB on `/mcp`) and `application/x-www-form-urlencoded` bodies (up to 100 KB and 1000 fields) are parsed for every method. A JSON body that does not parse, or a body shorter or longer than its `Content-Length`, is answered `400 HTTP_BAD_REQUEST` (`The request body is not valid JSON.`, `The request body does not match its Content-Length.`), a body past these limits `413 HTTP_PAYLOAD_TOO_LARGE`, and an unsupported content encoding or character set `415 HTTP_UNSUPPORTED_MEDIA_TYPE`; a JSON body over 5 MB on `/mcp` gets its `413` as a JSON-RPC error (see `POST /mcp`). Form values arrive as text and the request validators do not convert them, so a number, a boolean or a free-form object sent form-encoded is refused (`400 VALIDATION_ERROR`) or read as a string. A list sent form-encoded is read as a list only when its key repeats, so a single value or an empty list cannot be sent. The form media type is therefore listed only on operations whose body is a flat object of text fields: every value a string (string enums included), with no lists or nested objects.

**Request size.** On every route with a request validator, the body, query and path values are measured before the schema runs. An array over 10,000 items (`<path> can have at most 10000 items.`), an object over 10,000 keys (`<path> can have at most 10000 fields.`), more than 100,000 array items and object keys in the whole request (`The request holds too many items in total (the limit is 100000); the limit is reached at <path>.`) or nesting deeper than 64 levels (`<path> is nested more than 64 levels deep.`) is refused with `400 VALIDATION_ERROR` (detail code `TOO_BIG`, or `TOO_DEEP` for nesting; the path reads like `body.items`). The deployment can change the first three limits with `VALIDATION_MAX_ARRAY_LENGTH`, `VALIDATION_MAX_OBJECT_KEYS` and `VALIDATION_MAX_TOTAL_ITEMS`.

**OAuth scopes.** On an operation whose `security` names `oauth2` scopes, an OAuth access token holding none of them gets `403 HTTP_FORBIDDEN` ("Insufficient scope. Required: ...") right after authentication. Session tokens are never scope-checked.

**No such route.** A method and path that no route handles get Express's own `404` page, `text/html`, reading `Cannot <METHOD> <path>`. Such pairs are not listed as operations.

## Base URLs
All endpoints use the `/api/v1` prefix unless otherwise noted.

## Query parameter names
On every `/api/v1` and `/mcp` endpoint, a query parameter whose name starts with `$` or contains `.` (including a nested name such as `filter[$ne]` or `a.b`) is refused with `400` and error code `VALIDATION_ERROR`. Only names are checked: values may contain dots, such as file names.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [pipeshub-sdk-typescript](#pipeshub-sdk-typescript)
  * [Authentication](#authentication)
  * [Behaviour common to every route](#behaviour-common-to-every-route)
  * [Base URLs](#base-urls)
  * [Query parameter names](#query-parameter-names)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Retrieval for RAG and the Vercel AI SDK](#retrieval-for-rag-and-the-vercel-ai-sdk)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @pipeshub-ai/sdk
```

### PNPM

```bash
pnpm add @pipeshub-ai/sdk
```

### Bun

```bash
bun add @pipeshub-ai/sdk
```

### Yarn

```bash
yarn add @pipeshub-ai/sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

## Retrieval for RAG and the Vercel AI SDK

`semanticSearch.retrieve` returns permission-filtered passages ("chunks"), each with its record and a citation link. It stores no search history, so you can call it on every request your application serves. See the [Retrieval API](https://docs.pipeshub.com/developer/retrieval-api) docs.

```typescript
const { chunks } = await pipeshub.semanticSearch.retrieve({ query: "How do we roll back a canary deploy?", limit: 5 });
for (const chunk of chunks) console.log(chunk.score, chunk.record.name, chunk.citation.url);
```

`pipeshubRetrieveTool` turns it into a [Vercel AI SDK](https://ai-sdk.dev) tool. It works with AI SDK 5 and later, and the SDK itself does not depend on `ai`:

```typescript
import { generateText, stepCountIs } from "ai";
import { pipeshubRetrieveTool } from "@pipeshub-ai/sdk/integrations/ai-sdk";

const { text } = await generateText({
  model,
  tools: { searchCompanyKnowledge: pipeshubRetrieveTool(pipeshub, { limit: 5 }) },
  stopWhen: stepCountIs(3),
  prompt: "How do we roll back a canary deploy?",
});
```

The tool takes one input, `query`. Its options (`limit`, `filters`, `maxChunksPerRecord`, `rewriteQuery`, `description`) apply to every call. The model gets back the chunks with their citation `url`s.

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type   | Scheme       |
| ------------ | ------ | ------------ |
| `bearerAuth` | http   | HTTP Bearer  |
| `oauth2`     | oauth2 | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.userAccount.refreshToken({
    scopedToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Agents](docs/sdks/agents/README.md)

* [listAgents](docs/sdks/agents/README.md#listagents) - List agents
* [createAgent](docs/sdks/agents/README.md#createagent) - Create agent
* [getAgent](docs/sdks/agents/README.md#getagent) - Get agent
* [updateAgent](docs/sdks/agents/README.md#updateagent) - Update agent
* [deleteAgent](docs/sdks/agents/README.md#deleteagent) - Delete agent
* [listAgentArchivedConversationsGrouped](docs/sdks/agents/README.md#listagentarchivedconversationsgrouped) - List archived agent conversations grouped by agent
* [listAgentConversationArchives](docs/sdks/agents/README.md#listagentconversationarchives) - List archived conversations for an agent
* [uploadAgentConversationChatAttachments](docs/sdks/agents/README.md#uploadagentconversationchatattachments) - Upload agent chat attachments
* [deleteAgentConversationChatAttachment](docs/sdks/agents/README.md#deleteagentconversationchatattachment) - Delete an agent chat attachment
* [streamAgentConversation](docs/sdks/agents/README.md#streamagentconversation) - Create agent conversation with streaming response
* [streamAgentConversationMessage](docs/sdks/agents/README.md#streamagentconversationmessage) - Add message to agent conversation with streaming response
* [regenerateAgentConversationMessage](docs/sdks/agents/README.md#regenerateagentconversationmessage) - Regenerate agent conversation message
* [forkAgentConversation](docs/sdks/agents/README.md#forkagentconversation) - Fork agent conversation from a message
* [cancelAgentConversationStream](docs/sdks/agents/README.md#cancelagentconversationstream) - Cancel an in-flight agent chat stream
* [updateAgentConversationMessageFeedback](docs/sdks/agents/README.md#updateagentconversationmessagefeedback) - Submit feedback for an agent message
* [addAgentConversationMessage](docs/sdks/agents/README.md#addagentconversationmessage) - Add message to agent conversation (non-streaming)
* [archiveAgentConversation](docs/sdks/agents/README.md#archiveagentconversation) - Archive an agent conversation
* [unarchiveAgentConversation](docs/sdks/agents/README.md#unarchiveagentconversation) - Unarchive an agent conversation
* [updateAgentConversationTitle](docs/sdks/agents/README.md#updateagentconversationtitle) - Update agent conversation title
* [deleteAgentConversationById](docs/sdks/agents/README.md#deleteagentconversationbyid) - Delete an agent conversation
* [getAgentConversationById](docs/sdks/agents/README.md#getagentconversationbyid) - Get agent conversation by ID
* [listAgentConversations](docs/sdks/agents/README.md#listagentconversations) - List agent conversations
* [createAgentConversation](docs/sdks/agents/README.md#createagentconversation) - Create agent conversation (non-streaming)

### [AIModelsProviders](docs/sdks/aimodelsproviders/README.md)

* [getAvailableModelsByType](docs/sdks/aimodelsproviders/README.md#getavailablemodelsbytype) - Get available models by type

### [Connector](docs/sdks/connector/README.md)

* [getRecordContent](docs/sdks/connector/README.md#getrecordcontent) - Get a record's full parsed content and metadata
* [navigateKnowledgeGraph](docs/sdks/connector/README.md#navigateknowledgegraph) - Browse the knowledge graph from a node
* [lookupRecordByIdentifier](docs/sdks/connector/README.md#lookuprecordbyidentifier) - Resolve a URL, issue key or external ID to a Record ID

### [ConnectorConfiguration](docs/sdks/connectorconfiguration/README.md)

* [getConnectorConfig](docs/sdks/connectorconfiguration/README.md#getconnectorconfig) - Get connector configuration
* [updateConnectorConfig](docs/sdks/connectorconfiguration/README.md#updateconnectorconfig) - Update connector configuration
* [updateConnectorAuthConfig](docs/sdks/connectorconfiguration/README.md#updateconnectorauthconfig) - Update authentication configuration
* [updateConnectorFiltersSyncConfig](docs/sdks/connectorconfiguration/README.md#updateconnectorfilterssyncconfig) - Update filters and sync configuration

### [ConnectorControl](docs/sdks/connectorcontrol/README.md)

* [toggleConnector](docs/sdks/connectorcontrol/README.md#toggleconnector) - Toggle connector sync or agent

### [ConnectorFilters](docs/sdks/connectorfilters/README.md)

* [getConnectorFilters](docs/sdks/connectorfilters/README.md#getconnectorfilters) - Get filter options
* [~~saveConnectorFilters~~](docs/sdks/connectorfilters/README.md#saveconnectorfilters) - Save filter selections (deprecated) :warning: **Deprecated**
* [getFilterFieldOptions](docs/sdks/connectorfilters/README.md#getfilterfieldoptions) - Get dynamic filter options

### [ConnectorInstances](docs/sdks/connectorinstances/README.md)

* [listConnectorInstances](docs/sdks/connectorinstances/README.md#listconnectorinstances) - List connector instances
* [createConnectorInstance](docs/sdks/connectorinstances/README.md#createconnectorinstance) - Create connector instance
* [getConnectorInstance](docs/sdks/connectorinstances/README.md#getconnectorinstance) - Get connector instance
* [deleteConnectorInstance](docs/sdks/connectorinstances/README.md#deleteconnectorinstance) - Delete connector instance
* [getConnectorStats](docs/sdks/connectorinstances/README.md#getconnectorstats) - Get connector statistics
* [resyncConnector](docs/sdks/connectorinstances/README.md#resyncconnector) - Resync connector
* [stopConnectorSync](docs/sdks/connectorinstances/README.md#stopconnectorsync) - Stop the running sync for a connector

### [ConnectorOAuth](docs/sdks/connectoroauth/README.md)

* [getOAuthAuthorizationUrl](docs/sdks/connectoroauth/README.md#getoauthauthorizationurl) - Get OAuth authorization URL
* [handleOAuthCallback](docs/sdks/connectoroauth/README.md#handleoauthcallback) - OAuth callback handler

### [ConnectorRegistry](docs/sdks/connectorregistry/README.md)

* [getConnectorRegistry](docs/sdks/connectorregistry/README.md#getconnectorregistry) - List available connector types
* [getConnectorSchema](docs/sdks/connectorregistry/README.md#getconnectorschema) - Get connector configuration schema
* [testConnectorConnection](docs/sdks/connectorregistry/README.md#testconnectorconnection) - Test connector credentials before saving
* [getConnectorEgressIps](docs/sdks/connectorregistry/README.md#getconnectoregressips) - Get the IP addresses connectors connect from

### [Conversations](docs/sdks/conversations/README.md)

* [createConversation](docs/sdks/conversations/README.md#createconversation) - Create conversation (non-streaming)
* [streamChat](docs/sdks/conversations/README.md#streamchat) - Create conversation with streaming response
* [getAllConversations](docs/sdks/conversations/README.md#getallconversations) - List all conversations
* [getArchivedConversations](docs/sdks/conversations/README.md#getarchivedconversations) - List archived conversations
* [searchArchivedConversations](docs/sdks/conversations/README.md#searcharchivedconversations) - Search archived conversations
* [getConversationById](docs/sdks/conversations/README.md#getconversationbyid) - Get conversation by ID
* [deleteConversationById](docs/sdks/conversations/README.md#deleteconversationbyid) - Delete conversation
* [addMessage](docs/sdks/conversations/README.md#addmessage) - Add message (non-streaming)
* [addMessageStream](docs/sdks/conversations/README.md#addmessagestream) - Add message to a conversation with streaming response
* [updateConversationTitle](docs/sdks/conversations/README.md#updateconversationtitle) - Update conversation title
* [archiveConversation](docs/sdks/conversations/README.md#archiveconversation) - Archive conversation
* [unarchiveConversation](docs/sdks/conversations/README.md#unarchiveconversation) - Unarchive conversation
* [pinConversation](docs/sdks/conversations/README.md#pinconversation) - Pin conversation
* [unpinConversation](docs/sdks/conversations/README.md#unpinconversation) - Unpin conversation
* [regenerateAnswer](docs/sdks/conversations/README.md#regenerateanswer) - Regenerate AI response
* [forkConversation](docs/sdks/conversations/README.md#forkconversation) - Fork conversation from a message
* [cancelConversationStream](docs/sdks/conversations/README.md#cancelconversationstream) - Cancel an in-flight chat stream
* [updateMessageFeedback](docs/sdks/conversations/README.md#updatemessagefeedback) - Submit feedback on AI response

### [KnowledgeBase](docs/sdks/knowledgebase/README.md)

* [createKnowledgeBase](docs/sdks/knowledgebase/README.md#createknowledgebase) - Create a new knowledge base
* [listKnowledgeBases](docs/sdks/knowledgebase/README.md#listknowledgebases) - List all knowledge bases
* [getKnowledgeBase](docs/sdks/knowledgebase/README.md#getknowledgebase) - Get knowledge base by ID
* [updateKnowledgeBase](docs/sdks/knowledgebase/README.md#updateknowledgebase) - Update knowledge base
* [deleteKnowledgeBase](docs/sdks/knowledgebase/README.md#deleteknowledgebase) - Delete knowledge base
* [getRecordById](docs/sdks/knowledgebase/README.md#getrecordbyid) - Get record by ID
* [updateRecordMultipart](docs/sdks/knowledgebase/README.md#updaterecordmultipart) - Update record
* [updateRecord](docs/sdks/knowledgebase/README.md#updaterecord) - Update record
* [updateRecordForm](docs/sdks/knowledgebase/README.md#updaterecordform) - Update record
* [deleteRecord](docs/sdks/knowledgebase/README.md#deleterecord) - Delete record
* [restoreRecord](docs/sdks/knowledgebase/README.md#restorerecord) - Restore a deleted record
* [restoreRecords](docs/sdks/knowledgebase/README.md#restorerecords) - Restore several deleted records
* [listTrash](docs/sdks/knowledgebase/README.md#listtrash) - List a collection's recently deleted items
* [streamRecordBuffer](docs/sdks/knowledgebase/README.md#streamrecordbuffer) - Stream record content
* [createFolder](docs/sdks/knowledgebase/README.md#createfolder) - Create folder
* [createSubfolder](docs/sdks/knowledgebase/README.md#createsubfolder) - Create subfolder
* [updateFolder](docs/sdks/knowledgebase/README.md#updatefolder) - Update folder
* [deleteFolder](docs/sdks/knowledgebase/README.md#deletefolder) - Delete folder
* [uploadRecords](docs/sdks/knowledgebase/README.md#uploadrecords) - Upload files to knowledge base or folder
* [getUploadLimits](docs/sdks/knowledgebase/README.md#getuploadlimits) - Get knowledge base upload limits
* [reindexRecord](docs/sdks/knowledgebase/README.md#reindexrecord) - Reindex single record
* [reindexRecordGroup](docs/sdks/knowledgebase/README.md#reindexrecordgroup) - Reindex record group
* [moveRecord](docs/sdks/knowledgebase/README.md#moverecord) - Move record to another location
* [~~getKnowledgeHubRootNodes~~](docs/sdks/knowledgebase/README.md#getknowledgehubrootnodes) - Get knowledge hub root nodes :warning: **Deprecated**
* [~~getKnowledgeHubChildNodes~~](docs/sdks/knowledgebase/README.md#getknowledgehubchildnodes) - Get knowledge hub child nodes :warning: **Deprecated**

### [~~KnowledgeHub~~](docs/sdks/knowledgehub/README.md)

* [~~getKnowledgeHubRootNodes~~](docs/sdks/knowledgehub/README.md#getknowledgehubrootnodes) - Get knowledge hub root nodes :warning: **Deprecated**
* [~~getKnowledgeHubChildNodes~~](docs/sdks/knowledgehub/README.md#getknowledgehubchildnodes) - Get knowledge hub child nodes :warning: **Deprecated**

### [OAuthApps](docs/sdks/oauthapps/README.md)

* [listOAuthApps](docs/sdks/oauthapps/README.md#listoauthapps) - List OAuth apps
* [createOAuthApp](docs/sdks/oauthapps/README.md#createoauthapp) - Create OAuth app
* [listOAuthScopes](docs/sdks/oauthapps/README.md#listoauthscopes) - List available scopes
* [getOAuthApp](docs/sdks/oauthapps/README.md#getoauthapp) - Get OAuth app details
* [updateOAuthApp](docs/sdks/oauthapps/README.md#updateoauthapp) - Update OAuth app
* [deleteOAuthApp](docs/sdks/oauthapps/README.md#deleteoauthapp) - Delete OAuth app
* [regenerateOAuthAppSecret](docs/sdks/oauthapps/README.md#regenerateoauthappsecret) - Regenerate client secret
* [suspendOAuthApp](docs/sdks/oauthapps/README.md#suspendoauthapp) - Suspend OAuth app
* [activateOAuthApp](docs/sdks/oauthapps/README.md#activateoauthapp) - Activate suspended OAuth app
* [listOAuthAppTokens](docs/sdks/oauthapps/README.md#listoauthapptokens) - List app tokens
* [revokeAllOAuthAppTokens](docs/sdks/oauthapps/README.md#revokealloauthapptokens) - Revoke all app tokens

### [OAuthConfiguration](docs/sdks/oauthconfiguration/README.md)

* [getOAuthRegistry](docs/sdks/oauthconfiguration/README.md#getoauthregistry) - List OAuth-capable connector types
* [getOAuthConnectorType](docs/sdks/oauthconfiguration/README.md#getoauthconnectortype) - Get OAuth connector type details
* [listOAuthConfigs](docs/sdks/oauthconfiguration/README.md#listoauthconfigs) - List OAuth configurations
* [listOAuthConfigsByType](docs/sdks/oauthconfiguration/README.md#listoauthconfigsbytype) - List OAuth configs for connector type
* [createOAuthConfig](docs/sdks/oauthconfiguration/README.md#createoauthconfig) - Create OAuth configuration
* [getOAuthConfig](docs/sdks/oauthconfiguration/README.md#getoauthconfig) - Get OAuth configuration
* [updateOAuthConfig](docs/sdks/oauthconfiguration/README.md#updateoauthconfig) - Update OAuth configuration
* [deleteOAuthConfig](docs/sdks/oauthconfiguration/README.md#deleteoauthconfig) - Delete OAuth configuration

### [OAuthProvider](docs/sdks/oauthprovider/README.md)

* [oauthToken](docs/sdks/oauthprovider/README.md#oauthtoken) - Exchange authorization code for tokens
* [oauthRevoke](docs/sdks/oauthprovider/README.md#oauthrevoke) - Revoke an access or refresh token
* [oauthIntrospect](docs/sdks/oauthprovider/README.md#oauthintrospect) - Introspect a token

### [OpenIDConnect](docs/sdks/openidconnect/README.md)

* [oauthUserInfo](docs/sdks/openidconnect/README.md#oauthuserinfo) - Get authenticated user information

### [OrganizationAuthConfig](docs/sdks/organizationauthconfig/README.md)

* [getAuthMethods](docs/sdks/organizationauthconfig/README.md#getauthmethods) - Get organization authentication methods
* [updateAuthMethod](docs/sdks/organizationauthconfig/README.md#updateauthmethod) - Update organization authentication methods
* [setUpAuthConfig](docs/sdks/organizationauthconfig/README.md#setupauthconfig) - Set up auth configuration

### [Organizations](docs/sdks/organizations/README.md)

* [getCurrentOrganization](docs/sdks/organizations/README.md#getcurrentorganization) - Get current organization

### [PersonalAccessTokens](docs/sdks/personalaccesstokens/README.md)

* [listPersonalAccessTokens](docs/sdks/personalaccesstokens/README.md#listpersonalaccesstokens) - List your own personal access tokens
* [createPersonalAccessToken](docs/sdks/personalaccesstokens/README.md#createpersonalaccesstoken) - Create a personal access token
* [listPersonalAccessTokenScopes](docs/sdks/personalaccesstokens/README.md#listpersonalaccesstokenscopes) - List scopes available for a new personal access token
* [revokePersonalAccessToken](docs/sdks/personalaccesstokens/README.md#revokepersonalaccesstoken) - Revoke one of your own personal access tokens
* [adminListPersonalAccessTokens](docs/sdks/personalaccesstokens/README.md#adminlistpersonalaccesstokens) - Admin: list every active personal access token in the org
* [adminRevokePersonalAccessToken](docs/sdks/personalaccesstokens/README.md#adminrevokepersonalaccesstoken) - Admin: revoke any user's personal access token by id

### [SemanticSearch](docs/sdks/semanticsearch/README.md)

* [retrieve](docs/sdks/semanticsearch/README.md#retrieve) - Retrieve chunks with citations
* [search](docs/sdks/semanticsearch/README.md#search) - Perform semantic search
* [searchHistory](docs/sdks/semanticsearch/README.md#searchhistory) - Get search history
* [deleteSearchHistory](docs/sdks/semanticsearch/README.md#deletesearchhistory) - Clear all search history
* [getSearchById](docs/sdks/semanticsearch/README.md#getsearchbyid) - Get search by ID
* [deleteSearchById](docs/sdks/semanticsearch/README.md#deletesearchbyid) - Delete search by ID
* [archiveSearch](docs/sdks/semanticsearch/README.md#archivesearch) - Archive a search
* [unarchiveSearch](docs/sdks/semanticsearch/README.md#unarchivesearch) - Unarchive a search

### [UserAccount](docs/sdks/useraccount/README.md)

* [initAuth](docs/sdks/useraccount/README.md#initauth) - Initialize authentication session
* [authenticate](docs/sdks/useraccount/README.md#authenticate) - Authenticate user with credentials
* [refreshToken](docs/sdks/useraccount/README.md#refreshtoken) - Refresh access token
* [getPasswordStatus](docs/sdks/useraccount/README.md#getpasswordstatus) - Get password status
* [sendPasswordSetupEmail](docs/sdks/useraccount/README.md#sendpasswordsetupemail) - Email a link to set a first password
* [resetPassword](docs/sdks/useraccount/README.md#resetpassword) - Reset password

### [WebSearch](docs/sdks/websearch/README.md)

* [getWebSearchProviders](docs/sdks/websearch/README.md#getwebsearchproviders) - Get all web search providers

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentsAddAgentConversationMessage`](docs/sdks/agents/README.md#addagentconversationmessage) - Add message to agent conversation (non-streaming)
- [`agentsArchiveAgentConversation`](docs/sdks/agents/README.md#archiveagentconversation) - Archive an agent conversation
- [`agentsCancelAgentConversationStream`](docs/sdks/agents/README.md#cancelagentconversationstream) - Cancel an in-flight agent chat stream
- [`agentsCreateAgent`](docs/sdks/agents/README.md#createagent) - Create agent
- [`agentsCreateAgentConversation`](docs/sdks/agents/README.md#createagentconversation) - Create agent conversation (non-streaming)
- [`agentsDeleteAgent`](docs/sdks/agents/README.md#deleteagent) - Delete agent
- [`agentsDeleteAgentConversationById`](docs/sdks/agents/README.md#deleteagentconversationbyid) - Delete an agent conversation
- [`agentsDeleteAgentConversationChatAttachment`](docs/sdks/agents/README.md#deleteagentconversationchatattachment) - Delete an agent chat attachment
- [`agentsForkAgentConversation`](docs/sdks/agents/README.md#forkagentconversation) - Fork agent conversation from a message
- [`agentsGetAgent`](docs/sdks/agents/README.md#getagent) - Get agent
- [`agentsGetAgentConversationById`](docs/sdks/agents/README.md#getagentconversationbyid) - Get agent conversation by ID
- [`agentsListAgentArchivedConversationsGrouped`](docs/sdks/agents/README.md#listagentarchivedconversationsgrouped) - List archived agent conversations grouped by agent
- [`agentsListAgentConversationArchives`](docs/sdks/agents/README.md#listagentconversationarchives) - List archived conversations for an agent
- [`agentsListAgentConversations`](docs/sdks/agents/README.md#listagentconversations) - List agent conversations
- [`agentsListAgents`](docs/sdks/agents/README.md#listagents) - List agents
- [`agentsRegenerateAgentConversationMessage`](docs/sdks/agents/README.md#regenerateagentconversationmessage) - Regenerate agent conversation message
- [`agentsStreamAgentConversation`](docs/sdks/agents/README.md#streamagentconversation) - Create agent conversation with streaming response
- [`agentsStreamAgentConversationMessage`](docs/sdks/agents/README.md#streamagentconversationmessage) - Add message to agent conversation with streaming response
- [`agentsUnarchiveAgentConversation`](docs/sdks/agents/README.md#unarchiveagentconversation) - Unarchive an agent conversation
- [`agentsUpdateAgent`](docs/sdks/agents/README.md#updateagent) - Update agent
- [`agentsUpdateAgentConversationMessageFeedback`](docs/sdks/agents/README.md#updateagentconversationmessagefeedback) - Submit feedback for an agent message
- [`agentsUpdateAgentConversationTitle`](docs/sdks/agents/README.md#updateagentconversationtitle) - Update agent conversation title
- [`agentsUploadAgentConversationChatAttachments`](docs/sdks/agents/README.md#uploadagentconversationchatattachments) - Upload agent chat attachments
- [`aiModelsProvidersGetAvailableModelsByType`](docs/sdks/aimodelsproviders/README.md#getavailablemodelsbytype) - Get available models by type
- [`connectorConfigurationGetConnectorConfig`](docs/sdks/connectorconfiguration/README.md#getconnectorconfig) - Get connector configuration
- [`connectorConfigurationUpdateConnectorAuthConfig`](docs/sdks/connectorconfiguration/README.md#updateconnectorauthconfig) - Update authentication configuration
- [`connectorConfigurationUpdateConnectorConfig`](docs/sdks/connectorconfiguration/README.md#updateconnectorconfig) - Update connector configuration
- [`connectorConfigurationUpdateConnectorFiltersSyncConfig`](docs/sdks/connectorconfiguration/README.md#updateconnectorfilterssyncconfig) - Update filters and sync configuration
- [`connectorControlToggleConnector`](docs/sdks/connectorcontrol/README.md#toggleconnector) - Toggle connector sync or agent
- [`connectorFiltersGetConnectorFilters`](docs/sdks/connectorfilters/README.md#getconnectorfilters) - Get filter options
- [`connectorFiltersGetFilterFieldOptions`](docs/sdks/connectorfilters/README.md#getfilterfieldoptions) - Get dynamic filter options
- [`connectorGetRecordContent`](docs/sdks/connector/README.md#getrecordcontent) - Get a record's full parsed content and metadata
- [`connectorInstancesCreateConnectorInstance`](docs/sdks/connectorinstances/README.md#createconnectorinstance) - Create connector instance
- [`connectorInstancesDeleteConnectorInstance`](docs/sdks/connectorinstances/README.md#deleteconnectorinstance) - Delete connector instance
- [`connectorInstancesGetConnectorInstance`](docs/sdks/connectorinstances/README.md#getconnectorinstance) - Get connector instance
- [`connectorInstancesGetConnectorStats`](docs/sdks/connectorinstances/README.md#getconnectorstats) - Get connector statistics
- [`connectorInstancesListConnectorInstances`](docs/sdks/connectorinstances/README.md#listconnectorinstances) - List connector instances
- [`connectorInstancesResyncConnector`](docs/sdks/connectorinstances/README.md#resyncconnector) - Resync connector
- [`connectorInstancesStopConnectorSync`](docs/sdks/connectorinstances/README.md#stopconnectorsync) - Stop the running sync for a connector
- [`connectorLookupRecordByIdentifier`](docs/sdks/connector/README.md#lookuprecordbyidentifier) - Resolve a URL, issue key or external ID to a Record ID
- [`connectorNavigateKnowledgeGraph`](docs/sdks/connector/README.md#navigateknowledgegraph) - Browse the knowledge graph from a node
- [`connectorOAuthGetOAuthAuthorizationUrl`](docs/sdks/connectoroauth/README.md#getoauthauthorizationurl) - Get OAuth authorization URL
- [`connectorOAuthHandleOAuthCallback`](docs/sdks/connectoroauth/README.md#handleoauthcallback) - OAuth callback handler
- [`connectorRegistryGetConnectorEgressIps`](docs/sdks/connectorregistry/README.md#getconnectoregressips) - Get the IP addresses connectors connect from
- [`connectorRegistryGetConnectorRegistry`](docs/sdks/connectorregistry/README.md#getconnectorregistry) - List available connector types
- [`connectorRegistryGetConnectorSchema`](docs/sdks/connectorregistry/README.md#getconnectorschema) - Get connector configuration schema
- [`connectorRegistryTestConnectorConnection`](docs/sdks/connectorregistry/README.md#testconnectorconnection) - Test connector credentials before saving
- [`conversationsAddMessage`](docs/sdks/conversations/README.md#addmessage) - Add message (non-streaming)
- [`conversationsAddMessageStream`](docs/sdks/conversations/README.md#addmessagestream) - Add message to a conversation with streaming response
- [`conversationsArchiveConversation`](docs/sdks/conversations/README.md#archiveconversation) - Archive conversation
- [`conversationsCancelConversationStream`](docs/sdks/conversations/README.md#cancelconversationstream) - Cancel an in-flight chat stream
- [`conversationsCreateConversation`](docs/sdks/conversations/README.md#createconversation) - Create conversation (non-streaming)
- [`conversationsDeleteConversationById`](docs/sdks/conversations/README.md#deleteconversationbyid) - Delete conversation
- [`conversationsForkConversation`](docs/sdks/conversations/README.md#forkconversation) - Fork conversation from a message
- [`conversationsGetAllConversations`](docs/sdks/conversations/README.md#getallconversations) - List all conversations
- [`conversationsGetArchivedConversations`](docs/sdks/conversations/README.md#getarchivedconversations) - List archived conversations
- [`conversationsGetConversationById`](docs/sdks/conversations/README.md#getconversationbyid) - Get conversation by ID
- [`conversationsPinConversation`](docs/sdks/conversations/README.md#pinconversation) - Pin conversation
- [`conversationsRegenerateAnswer`](docs/sdks/conversations/README.md#regenerateanswer) - Regenerate AI response
- [`conversationsSearchArchivedConversations`](docs/sdks/conversations/README.md#searcharchivedconversations) - Search archived conversations
- [`conversationsStreamChat`](docs/sdks/conversations/README.md#streamchat) - Create conversation with streaming response
- [`conversationsUnarchiveConversation`](docs/sdks/conversations/README.md#unarchiveconversation) - Unarchive conversation
- [`conversationsUnpinConversation`](docs/sdks/conversations/README.md#unpinconversation) - Unpin conversation
- [`conversationsUpdateConversationTitle`](docs/sdks/conversations/README.md#updateconversationtitle) - Update conversation title
- [`conversationsUpdateMessageFeedback`](docs/sdks/conversations/README.md#updatemessagefeedback) - Submit feedback on AI response
- [`knowledgeBaseCreateFolder`](docs/sdks/knowledgebase/README.md#createfolder) - Create folder
- [`knowledgeBaseCreateKnowledgeBase`](docs/sdks/knowledgebase/README.md#createknowledgebase) - Create a new knowledge base
- [`knowledgeBaseCreateSubfolder`](docs/sdks/knowledgebase/README.md#createsubfolder) - Create subfolder
- [`knowledgeBaseDeleteFolder`](docs/sdks/knowledgebase/README.md#deletefolder) - Delete folder
- [`knowledgeBaseDeleteKnowledgeBase`](docs/sdks/knowledgebase/README.md#deleteknowledgebase) - Delete knowledge base
- [`knowledgeBaseDeleteRecord`](docs/sdks/knowledgebase/README.md#deleterecord) - Delete record
- [`knowledgeBaseGetKnowledgeBase`](docs/sdks/knowledgebase/README.md#getknowledgebase) - Get knowledge base by ID
- [`knowledgeBaseGetRecordById`](docs/sdks/knowledgebase/README.md#getrecordbyid) - Get record by ID
- [`knowledgeBaseGetUploadLimits`](docs/sdks/knowledgebase/README.md#getuploadlimits) - Get knowledge base upload limits
- [`knowledgeBaseListKnowledgeBases`](docs/sdks/knowledgebase/README.md#listknowledgebases) - List all knowledge bases
- [`knowledgeBaseListTrash`](docs/sdks/knowledgebase/README.md#listtrash) - List a collection's recently deleted items
- [`knowledgeBaseMoveRecord`](docs/sdks/knowledgebase/README.md#moverecord) - Move record to another location
- [`knowledgeBaseReindexRecord`](docs/sdks/knowledgebase/README.md#reindexrecord) - Reindex single record
- [`knowledgeBaseReindexRecordGroup`](docs/sdks/knowledgebase/README.md#reindexrecordgroup) - Reindex record group
- [`knowledgeBaseRestoreRecord`](docs/sdks/knowledgebase/README.md#restorerecord) - Restore a deleted record
- [`knowledgeBaseRestoreRecords`](docs/sdks/knowledgebase/README.md#restorerecords) - Restore several deleted records
- [`knowledgeBaseStreamRecordBuffer`](docs/sdks/knowledgebase/README.md#streamrecordbuffer) - Stream record content
- [`knowledgeBaseUpdateFolder`](docs/sdks/knowledgebase/README.md#updatefolder) - Update folder
- [`knowledgeBaseUpdateKnowledgeBase`](docs/sdks/knowledgebase/README.md#updateknowledgebase) - Update knowledge base
- [`knowledgeBaseUpdateRecord`](docs/sdks/knowledgebase/README.md#updaterecord) - Update record
- [`knowledgeBaseUpdateRecordForm`](docs/sdks/knowledgebase/README.md#updaterecordform) - Update record
- [`knowledgeBaseUpdateRecordMultipart`](docs/sdks/knowledgebase/README.md#updaterecordmultipart) - Update record
- [`knowledgeBaseUploadRecords`](docs/sdks/knowledgebase/README.md#uploadrecords) - Upload files to knowledge base or folder
- [`oAuthAppsActivateOAuthApp`](docs/sdks/oauthapps/README.md#activateoauthapp) - Activate suspended OAuth app
- [`oAuthAppsCreateOAuthApp`](docs/sdks/oauthapps/README.md#createoauthapp) - Create OAuth app
- [`oAuthAppsDeleteOAuthApp`](docs/sdks/oauthapps/README.md#deleteoauthapp) - Delete OAuth app
- [`oAuthAppsGetOAuthApp`](docs/sdks/oauthapps/README.md#getoauthapp) - Get OAuth app details
- [`oAuthAppsListOAuthApps`](docs/sdks/oauthapps/README.md#listoauthapps) - List OAuth apps
- [`oAuthAppsListOAuthAppTokens`](docs/sdks/oauthapps/README.md#listoauthapptokens) - List app tokens
- [`oAuthAppsListOAuthScopes`](docs/sdks/oauthapps/README.md#listoauthscopes) - List available scopes
- [`oAuthAppsRegenerateOAuthAppSecret`](docs/sdks/oauthapps/README.md#regenerateoauthappsecret) - Regenerate client secret
- [`oAuthAppsRevokeAllOAuthAppTokens`](docs/sdks/oauthapps/README.md#revokealloauthapptokens) - Revoke all app tokens
- [`oAuthAppsSuspendOAuthApp`](docs/sdks/oauthapps/README.md#suspendoauthapp) - Suspend OAuth app
- [`oAuthAppsUpdateOAuthApp`](docs/sdks/oauthapps/README.md#updateoauthapp) - Update OAuth app
- [`oAuthConfigurationCreateOAuthConfig`](docs/sdks/oauthconfiguration/README.md#createoauthconfig) - Create OAuth configuration
- [`oAuthConfigurationDeleteOAuthConfig`](docs/sdks/oauthconfiguration/README.md#deleteoauthconfig) - Delete OAuth configuration
- [`oAuthConfigurationGetOAuthConfig`](docs/sdks/oauthconfiguration/README.md#getoauthconfig) - Get OAuth configuration
- [`oAuthConfigurationGetOAuthConnectorType`](docs/sdks/oauthconfiguration/README.md#getoauthconnectortype) - Get OAuth connector type details
- [`oAuthConfigurationGetOAuthRegistry`](docs/sdks/oauthconfiguration/README.md#getoauthregistry) - List OAuth-capable connector types
- [`oAuthConfigurationListOAuthConfigs`](docs/sdks/oauthconfiguration/README.md#listoauthconfigs) - List OAuth configurations
- [`oAuthConfigurationListOAuthConfigsByType`](docs/sdks/oauthconfiguration/README.md#listoauthconfigsbytype) - List OAuth configs for connector type
- [`oAuthConfigurationUpdateOAuthConfig`](docs/sdks/oauthconfiguration/README.md#updateoauthconfig) - Update OAuth configuration
- [`oAuthProviderOauthIntrospect`](docs/sdks/oauthprovider/README.md#oauthintrospect) - Introspect a token
- [`oAuthProviderOauthRevoke`](docs/sdks/oauthprovider/README.md#oauthrevoke) - Revoke an access or refresh token
- [`oAuthProviderOauthToken`](docs/sdks/oauthprovider/README.md#oauthtoken) - Exchange authorization code for tokens
- [`openIDConnectOauthUserInfo`](docs/sdks/openidconnect/README.md#oauthuserinfo) - Get authenticated user information
- [`organizationAuthConfigGetAuthMethods`](docs/sdks/organizationauthconfig/README.md#getauthmethods) - Get organization authentication methods
- [`organizationAuthConfigSetUpAuthConfig`](docs/sdks/organizationauthconfig/README.md#setupauthconfig) - Set up auth configuration
- [`organizationAuthConfigUpdateAuthMethod`](docs/sdks/organizationauthconfig/README.md#updateauthmethod) - Update organization authentication methods
- [`organizationsGetCurrentOrganization`](docs/sdks/organizations/README.md#getcurrentorganization) - Get current organization
- [`personalAccessTokensAdminListPersonalAccessTokens`](docs/sdks/personalaccesstokens/README.md#adminlistpersonalaccesstokens) - Admin: list every active personal access token in the org
- [`personalAccessTokensAdminRevokePersonalAccessToken`](docs/sdks/personalaccesstokens/README.md#adminrevokepersonalaccesstoken) - Admin: revoke any user's personal access token by id
- [`personalAccessTokensCreatePersonalAccessToken`](docs/sdks/personalaccesstokens/README.md#createpersonalaccesstoken) - Create a personal access token
- [`personalAccessTokensListPersonalAccessTokens`](docs/sdks/personalaccesstokens/README.md#listpersonalaccesstokens) - List your own personal access tokens
- [`personalAccessTokensListPersonalAccessTokenScopes`](docs/sdks/personalaccesstokens/README.md#listpersonalaccesstokenscopes) - List scopes available for a new personal access token
- [`personalAccessTokensRevokePersonalAccessToken`](docs/sdks/personalaccesstokens/README.md#revokepersonalaccesstoken) - Revoke one of your own personal access tokens
- [`semanticSearchArchiveSearch`](docs/sdks/semanticsearch/README.md#archivesearch) - Archive a search
- [`semanticSearchDeleteSearchById`](docs/sdks/semanticsearch/README.md#deletesearchbyid) - Delete search by ID
- [`semanticSearchDeleteSearchHistory`](docs/sdks/semanticsearch/README.md#deletesearchhistory) - Clear all search history
- [`semanticSearchGetSearchById`](docs/sdks/semanticsearch/README.md#getsearchbyid) - Get search by ID
- [`semanticSearchRetrieve`](docs/sdks/semanticsearch/README.md#retrieve) - Retrieve chunks with citations
- [`semanticSearchSearch`](docs/sdks/semanticsearch/README.md#search) - Perform semantic search
- [`semanticSearchSearchHistory`](docs/sdks/semanticsearch/README.md#searchhistory) - Get search history
- [`semanticSearchUnarchiveSearch`](docs/sdks/semanticsearch/README.md#unarchivesearch) - Unarchive a search
- [`userAccountAuthenticate`](docs/sdks/useraccount/README.md#authenticate) - Authenticate user with credentials
- [`userAccountGetPasswordStatus`](docs/sdks/useraccount/README.md#getpasswordstatus) - Get password status
- [`userAccountInitAuth`](docs/sdks/useraccount/README.md#initauth) - Initialize authentication session
- [`userAccountRefreshToken`](docs/sdks/useraccount/README.md#refreshtoken) - Refresh access token
- [`userAccountResetPassword`](docs/sdks/useraccount/README.md#resetpassword) - Reset password
- [`userAccountSendPasswordSetupEmail`](docs/sdks/useraccount/README.md#sendpasswordsetupemail) - Email a link to set a first password
- [`webSearchGetWebSearchProviders`](docs/sdks/websearch/README.md#getwebsearchproviders) - Get all web search providers
- ~~[`connectorFiltersSaveConnectorFilters`](docs/sdks/connectorfilters/README.md#saveconnectorfilters)~~ - Save filter selections (deprecated) :warning: **Deprecated**
- ~~[`knowledgeBaseGetKnowledgeHubChildNodes`](docs/sdks/knowledgebase/README.md#getknowledgehubchildnodes)~~ - Get knowledge hub child nodes :warning: **Deprecated**
- ~~[`knowledgeBaseGetKnowledgeHubChildNodes`](docs/sdks/knowledgehub/README.md#getknowledgehubchildnodes)~~ - Get knowledge hub child nodes :warning: **Deprecated**
- ~~[`knowledgeBaseGetKnowledgeHubRootNodes`](docs/sdks/knowledgebase/README.md#getknowledgehubrootnodes)~~ - Get knowledge hub root nodes :warning: **Deprecated**
- ~~[`knowledgeBaseGetKnowledgeHubRootNodes`](docs/sdks/knowledgehub/README.md#getknowledgehubrootnodes)~~ - Get knowledge hub root nodes :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

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

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

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
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub();

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`PipeshubError`](./src/models/errors/pipeshub-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";
import * as errors from "@pipeshub-ai/sdk/models/errors";

const pipeshub = new Pipeshub();

async function run() {
  try {
    const result = await pipeshub.oAuthProvider.oauthToken({
      grantType: "client_credentials",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.PipeshubError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.error); // models.ErrorResponseError
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`PipeshubError`](./src/models/errors/pipeshub-error.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/error-response.ts): Standard error envelope returned by all errors routed through `ErrorMiddleware`. Applies to all `BaseError` subclasses including `HttpError`, `ValidationError`, and others. The `code` field is a machine-readable string identifying the error type (e.g. `HTTP_UNAUTHORIZED`, `HTTP_NOT_FOUND`, `VALIDATION_ERROR`, `INTERNAL_ERROR`). *

<details><summary>Less common errors (22)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`PipeshubError`](./src/models/errors/pipeshub-error.ts)**:
* [`OAuthClientManagementRateLimitError`](./src/models/errors/o-auth-client-management-rate-limit-error.ts): JSON body when OAuth client management routes exceed the per-minute rate limit (same limiter as other `/oauth-clients/*` routes). Status code `429`. Applicable to 20 of 141 methods.*
* [`ApplicationJsonErrorResponse`](./src/models/errors/application-json-error-response.ts): Standard JSON error envelope from `ErrorMiddleware` for `BaseError` subclasses (`error.middleware.ts`). Returned for most API 4xx errors (unauthorized, forbidden, not found, validation failures, etc.). Applicable to 17 of 141 methods.*
* [`OAuthErrorResponse`](./src/models/errors/o-auth-error-response.ts): OAuth 2.0 Error Response (RFC 6749 Section 5.2). Standard error format for OAuth endpoints. Applicable to 3 of 141 methods.*
* [`RateLimitErrorResponse`](./src/models/errors/rate-limit-error-response.ts): Rate-limit error payload (shape differs from standard error responses). Status code `429`. Applicable to 3 of 141 methods.*
* [`LocalFsDesktopRefusalError`](./src/models/errors/local-fs-desktop-refusal-error.ts): 409 body returned when a Local FS connector cannot sync because of its owner device. Status code `409`. Applicable to 2 of 141 methods.*
* [`BadRequestError`](./src/models/errors/bad-request-error.ts): Error envelope for a failed request. Status code `400`. Applicable to 1 of 141 methods.*
* [`UnauthorizedError`](./src/models/errors/unauthorized-error.ts): Error envelope for a failed request. Status code `401`. Applicable to 1 of 141 methods.*
* [`OAuthBearerTokenError`](./src/models/errors/o-auth-bearer-token-error.ts): Error body written by the OAuth bearer-token middleware (RFC 6750 Section 3.1) on routes that accept only an OAuth access token, such as `GET /oauth2/userinfo`. The same `error`, `error_description` and `scope` values are repeated in the `WWW-Authenticate` response header. This is not the standard `ErrorResponse` envelope: `error` is a string. Applicable to 1 of 141 methods.*
* [`ForbiddenError`](./src/models/errors/forbidden-error.ts): Error envelope for a failed request. Status code `403`. Applicable to 1 of 141 methods.*
* [`StreamRecordErrorResponse`](./src/models/errors/stream-record-error-response.ts): Error payload returned by the legacy record-stream proxy when the downstream streaming request fails after route middleware has passed. Applicable to 1 of 141 methods.*
* [`GetKnowledgeHubRootNodesUnprocessableEntityError`](./src/models/errors/get-knowledge-hub-root-nodes-unprocessable-entity-error.ts): Either of: - A typed query parameter could not be read: `page` or `limit` is not an   integer or is out of range (`page` below 1, `limit` outside 1-200),   `onlyContainers` or `flattened` is not a boolean, or `page`/`limit` was   sent more than once. `error.message` is the connector service's own   validation text. - A listing that spans a whole connector (a flattened listing, a search or a filter) was too large for the   database to hold in memory, so it was refused instead of cut short. No page is returned. Open a folder   (`GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`) to see its records, or add a search (`q`),   which keeps only matching records in memory. Choosing a connector, or a filter that keeps most records (such as   `nodeTypes`), does not help. Sorting by name with no filters is served from stored visibility where the   connector allows it and is not affected. Status code `422`. Applicable to 1 of 141 methods.*
* [`GetKnowledgeHubChildNodesUnprocessableEntityError`](./src/models/errors/get-knowledge-hub-child-nodes-unprocessable-entity-error.ts): Either of: - A typed query parameter could not be read: `page` or `limit` is not an   integer or is out of range (`page` below 1, `limit` outside 1-200), or   `onlyContainers` or `flattened` is not a boolean. `error.message` is the   connector service's own validation text. - A listing that spans a whole connector (a flattened listing, a search or a filter) was too large for the   database to hold in memory, so it was refused instead of cut short. No page is returned. Open a folder   (`GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`) to see its records, or add a search (`q`),   which keeps only matching records in memory. Choosing a connector, or a filter that keeps most records (such as   `nodeTypes`), does not help. Sorting by name with no filters is served from stored visibility where the   connector allows it and is not affected. Status code `422`. Applicable to 1 of 141 methods.*
* [`UploadAgentConversationChatAttachmentsUnprocessableEntityError`](./src/models/errors/upload-agent-conversation-chat-attachments-unprocessable-entity-error.ts): A PDF that could not be read within the upload's 50-second budget, or whose parse ran out of memory, is not attached (`<name> is too large or complex to read right now, so it wasn't attached. ...`). Only that upload fails. Status code `422`. Applicable to 1 of 141 methods.*
* [`SearchHistoryInternalServerError`](./src/models/errors/search-history-internal-server-error.ts): Error envelope for a failed request. Status code `500`. Applicable to 1 of 141 methods.*
* [`GetKnowledgeHubRootNodesServiceUnavailableError`](./src/models/errors/get-knowledge-hub-root-nodes-service-unavailable-error.ts): The database could not give this listing the memory it needs right now, because other requests were using it (nothing is wrong with the request). Retry after `Retry-After` seconds; the web app retries by itself. The body is the gateway's own busy message, not the service's wording. Status code `503`. Applicable to 1 of 141 methods.*
* [`GetKnowledgeHubChildNodesServiceUnavailableError`](./src/models/errors/get-knowledge-hub-child-nodes-service-unavailable-error.ts): The database could not give this listing the memory it needs right now, because other requests were using it (nothing is wrong with the request). Retry after `Retry-After` seconds; the web app retries by itself. The body is the gateway's own busy message, not the service's wording. Status code `503`. Applicable to 1 of 141 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                          | Variables      | Description                                       |
| --- | ------------------------------- | -------------- | ------------------------------------------------- |
| 0   | `https://{instance_url}/api/v1` | `instance_url` | Base API URL                                      |
| 1   | `https://{instance_url}`        | `instance_url` | Root URL (used for MCP endpoints mounted at /mcp) |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable       | Parameter             | Default                      | Description     |
| -------------- | --------------------- | ---------------------------- | --------------- |
| `instance_url` | `instanceUrl: string` | `"https://app.pipeshub.com"` | Base server URL |

#### Example

```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverIdx: 0,
  instanceUrl: "https://app.pipeshub.com",
});

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const pipeshub = new Pipeshub({
  serverURL: "https://https://app.pipeshub.com",
});

async function run() {
  const result = await pipeshub.oAuthProvider.oauthToken({
    grantType: "client_credentials",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@pipeshub-ai/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Pipeshub({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Pipeshub } from "@pipeshub-ai/sdk";

const sdk = new Pipeshub({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

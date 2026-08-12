# pipeshub-sdk-typescript
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

**OAuth 2.0 Bearer tokens** from `POST /oauth2/token` use the same `Authorization: Bearer` header. For **`client_credentials`**, machine tokens may encode `userId === client_id` in the JWT; the **Node API gateway** resolves the OAuth **app creator** and sets the authenticated user accordingly. See the **OAuth Provider** tag for full behavior.

## Base URLs
All endpoints use the `/api/v1` prefix unless otherwise noted.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [pipeshub-sdk-typescript](#pipeshub-sdk-typescript)
  * [Authentication](#authentication)
  * [Base URLs](#base-urls)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
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
* [updateAgentConversationMessageFeedback](docs/sdks/agents/README.md#updateagentconversationmessagefeedback) - Submit feedback for an agent message
* [archiveAgentConversation](docs/sdks/agents/README.md#archiveagentconversation) - Archive an agent conversation
* [unarchiveAgentConversation](docs/sdks/agents/README.md#unarchiveagentconversation) - Unarchive an agent conversation
* [updateAgentConversationTitle](docs/sdks/agents/README.md#updateagentconversationtitle) - Update agent conversation title
* [deleteAgentConversationById](docs/sdks/agents/README.md#deleteagentconversationbyid) - Delete an agent conversation
* [getAgentConversationById](docs/sdks/agents/README.md#getagentconversationbyid) - Get agent conversation by ID
* [listAgentConversations](docs/sdks/agents/README.md#listagentconversations) - List agent conversations

### [AIModelsProviders](docs/sdks/aimodelsproviders/README.md)

* [getAvailableModelsByType](docs/sdks/aimodelsproviders/README.md#getavailablemodelsbytype) - Get available models by type

### [Connector](docs/sdks/connector/README.md)

* [getRecordContent](docs/sdks/connector/README.md#getrecordcontent) - Get a record's full parsed content and metadata
* [navigateKnowledgeGraph](docs/sdks/connector/README.md#navigateknowledgegraph) - Browse the knowledge graph from a node
* [lookupRecordByIdentifier](docs/sdks/connector/README.md#lookuprecordbyidentifier) - Resolve a URL, issue key or external ID to a Record ID

### [Conversations](docs/sdks/conversations/README.md)

* [streamChat](docs/sdks/conversations/README.md#streamchat) - Create conversation with streaming response
* [getAllConversations](docs/sdks/conversations/README.md#getallconversations) - List all conversations
* [getArchivedConversations](docs/sdks/conversations/README.md#getarchivedconversations) - List archived conversations
* [searchArchivedConversations](docs/sdks/conversations/README.md#searcharchivedconversations) - Search archived conversations
* [getConversationById](docs/sdks/conversations/README.md#getconversationbyid) - Get conversation by ID
* [deleteConversationById](docs/sdks/conversations/README.md#deleteconversationbyid) - Delete conversation
* [addMessageStream](docs/sdks/conversations/README.md#addmessagestream) - Add message to a conversation with streaming response
* [updateConversationTitle](docs/sdks/conversations/README.md#updateconversationtitle) - Update conversation title
* [archiveConversation](docs/sdks/conversations/README.md#archiveconversation) - Archive conversation
* [unarchiveConversation](docs/sdks/conversations/README.md#unarchiveconversation) - Unarchive conversation
* [regenerateAnswer](docs/sdks/conversations/README.md#regenerateanswer) - Regenerate AI response
* [updateMessageFeedback](docs/sdks/conversations/README.md#updatemessagefeedback) - Submit feedback on AI response

### [KnowledgeBase](docs/sdks/knowledgebase/README.md)

* [createKnowledgeBase](docs/sdks/knowledgebase/README.md#createknowledgebase) - Create a new knowledge base
* [listKnowledgeBases](docs/sdks/knowledgebase/README.md#listknowledgebases) - List all knowledge bases
* [getKnowledgeBase](docs/sdks/knowledgebase/README.md#getknowledgebase) - Get knowledge base by ID
* [updateKnowledgeBase](docs/sdks/knowledgebase/README.md#updateknowledgebase) - Update knowledge base
* [deleteKnowledgeBase](docs/sdks/knowledgebase/README.md#deleteknowledgebase) - Delete knowledge base
* [getRecordById](docs/sdks/knowledgebase/README.md#getrecordbyid) - Get record by ID
* [updateRecord](docs/sdks/knowledgebase/README.md#updaterecord) - Update record
* [deleteRecord](docs/sdks/knowledgebase/README.md#deleterecord) - Delete record
* [streamRecordBuffer](docs/sdks/knowledgebase/README.md#streamrecordbuffer) - Stream record content
* [createFolder](docs/sdks/knowledgebase/README.md#createfolder) - Create folder
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

- [`agentsArchiveAgentConversation`](docs/sdks/agents/README.md#archiveagentconversation) - Archive an agent conversation
- [`agentsCreateAgent`](docs/sdks/agents/README.md#createagent) - Create agent
- [`agentsDeleteAgent`](docs/sdks/agents/README.md#deleteagent) - Delete agent
- [`agentsDeleteAgentConversationById`](docs/sdks/agents/README.md#deleteagentconversationbyid) - Delete an agent conversation
- [`agentsDeleteAgentConversationChatAttachment`](docs/sdks/agents/README.md#deleteagentconversationchatattachment) - Delete an agent chat attachment
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
- [`connectorGetRecordContent`](docs/sdks/connector/README.md#getrecordcontent) - Get a record's full parsed content and metadata
- [`connectorLookupRecordByIdentifier`](docs/sdks/connector/README.md#lookuprecordbyidentifier) - Resolve a URL, issue key or external ID to a Record ID
- [`connectorNavigateKnowledgeGraph`](docs/sdks/connector/README.md#navigateknowledgegraph) - Browse the knowledge graph from a node
- [`conversationsAddMessageStream`](docs/sdks/conversations/README.md#addmessagestream) - Add message to a conversation with streaming response
- [`conversationsArchiveConversation`](docs/sdks/conversations/README.md#archiveconversation) - Archive conversation
- [`conversationsDeleteConversationById`](docs/sdks/conversations/README.md#deleteconversationbyid) - Delete conversation
- [`conversationsGetAllConversations`](docs/sdks/conversations/README.md#getallconversations) - List all conversations
- [`conversationsGetArchivedConversations`](docs/sdks/conversations/README.md#getarchivedconversations) - List archived conversations
- [`conversationsGetConversationById`](docs/sdks/conversations/README.md#getconversationbyid) - Get conversation by ID
- [`conversationsRegenerateAnswer`](docs/sdks/conversations/README.md#regenerateanswer) - Regenerate AI response
- [`conversationsSearchArchivedConversations`](docs/sdks/conversations/README.md#searcharchivedconversations) - Search archived conversations
- [`conversationsStreamChat`](docs/sdks/conversations/README.md#streamchat) - Create conversation with streaming response
- [`conversationsUnarchiveConversation`](docs/sdks/conversations/README.md#unarchiveconversation) - Unarchive conversation
- [`conversationsUpdateConversationTitle`](docs/sdks/conversations/README.md#updateconversationtitle) - Update conversation title
- [`conversationsUpdateMessageFeedback`](docs/sdks/conversations/README.md#updatemessagefeedback) - Submit feedback on AI response
- [`knowledgeBaseCreateFolder`](docs/sdks/knowledgebase/README.md#createfolder) - Create folder
- [`knowledgeBaseCreateKnowledgeBase`](docs/sdks/knowledgebase/README.md#createknowledgebase) - Create a new knowledge base
- [`knowledgeBaseDeleteFolder`](docs/sdks/knowledgebase/README.md#deletefolder) - Delete folder
- [`knowledgeBaseDeleteKnowledgeBase`](docs/sdks/knowledgebase/README.md#deleteknowledgebase) - Delete knowledge base
- [`knowledgeBaseDeleteRecord`](docs/sdks/knowledgebase/README.md#deleterecord) - Delete record
- [`knowledgeBaseGetKnowledgeBase`](docs/sdks/knowledgebase/README.md#getknowledgebase) - Get knowledge base by ID
- [`knowledgeBaseGetRecordById`](docs/sdks/knowledgebase/README.md#getrecordbyid) - Get record by ID
- [`knowledgeBaseGetUploadLimits`](docs/sdks/knowledgebase/README.md#getuploadlimits) - Get knowledge base upload limits
- [`knowledgeBaseListKnowledgeBases`](docs/sdks/knowledgebase/README.md#listknowledgebases) - List all knowledge bases
- [`knowledgeBaseMoveRecord`](docs/sdks/knowledgebase/README.md#moverecord) - Move record to another location
- [`knowledgeBaseReindexRecord`](docs/sdks/knowledgebase/README.md#reindexrecord) - Reindex single record
- [`knowledgeBaseReindexRecordGroup`](docs/sdks/knowledgebase/README.md#reindexrecordgroup) - Reindex record group
- [`knowledgeBaseStreamRecordBuffer`](docs/sdks/knowledgebase/README.md#streamrecordbuffer) - Stream record content
- [`knowledgeBaseUpdateFolder`](docs/sdks/knowledgebase/README.md#updatefolder) - Update folder
- [`knowledgeBaseUpdateKnowledgeBase`](docs/sdks/knowledgebase/README.md#updateknowledgebase) - Update knowledge base
- [`knowledgeBaseUpdateRecord`](docs/sdks/knowledgebase/README.md#updaterecord) - Update record
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
- [`semanticSearchSearch`](docs/sdks/semanticsearch/README.md#search) - Perform semantic search
- [`semanticSearchSearchHistory`](docs/sdks/semanticsearch/README.md#searchhistory) - Get search history
- [`semanticSearchUnarchiveSearch`](docs/sdks/semanticsearch/README.md#unarchivesearch) - Unarchive a search
- [`userAccountAuthenticate`](docs/sdks/useraccount/README.md#authenticate) - Authenticate user with credentials
- [`userAccountInitAuth`](docs/sdks/useraccount/README.md#initauth) - Initialize authentication session
- [`userAccountRefreshToken`](docs/sdks/useraccount/README.md#refreshtoken) - Refresh access token
- [`userAccountResetPassword`](docs/sdks/useraccount/README.md#resetpassword) - Reset password
- [`webSearchGetWebSearchProviders`](docs/sdks/websearch/README.md#getwebsearchproviders) - Get all web search providers
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
      filesMetadata:
        "[{\"file_path\":\"/docs/report.pdf\",\"last_modified\":\"2024-01-15T10:30:00Z\"}]",
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
  const result = await pipeshub.knowledgeBase.updateRecord({
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
**Primary error:**
* [`PipeshubError`](./src/models/errors/pipeshub-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (34)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`PipeshubError`](./src/models/errors/pipeshub-error.ts)**:
* [`ErrorResponse`](./src/models/errors/error-response.ts): Standard error envelope returned by all errors routed through `ErrorMiddleware`. Applies to all `BaseError` subclasses including `HttpError`, `ValidationError`, and others. The `code` field is a machine-readable string identifying the error type (e.g. `HTTP_UNAUTHORIZED`, `HTTP_NOT_FOUND`, `VALIDATION_ERROR`, `INTERNAL_ERROR`). Applicable to 40 of 93 methods.*
* [`OAuthClientManagementRateLimitError`](./src/models/errors/o-auth-client-management-rate-limit-error.ts): JSON body when OAuth client management routes exceed the per-minute rate limit (same limiter as other `/oauth-clients/*` routes). Status code `429`. Applicable to 20 of 93 methods.*
* [`ApplicationJsonErrorResponse`](./src/models/errors/application-json-error-response.ts): Standard JSON error envelope from `ErrorMiddleware` for `BaseError` subclasses (`error.middleware.ts`). Returned for most API 4xx errors (unauthorized, forbidden, not found, validation failures, etc.). Applicable to 17 of 93 methods.*
* [`OAuthErrorResponse`](./src/models/errors/o-auth-error-response.ts): OAuth 2.0 Error Response (RFC 6749 Section 5.2). Standard error format for OAuth endpoints. Status code `401`. Applicable to 3 of 93 methods.*
* [`GetKnowledgeHubRootNodesBadRequestError`](./src/models/errors/get-knowledge-hub-root-nodes-bad-request-error.ts): Invalid request parameters. The backend's validation message is returned verbatim in `error.message`. See the examples below for the common triggers. Status code `400`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubChildNodesBadRequestError`](./src/models/errors/get-knowledge-hub-child-nodes-bad-request-error.ts): Invalid request parameters or path values. The backend's validation message is returned verbatim in `error.message`. See the examples below for the common triggers. Status code `400`. Applicable to 1 of 93 methods.*
* [`SearchHistoryBadRequestError`](./src/models/errors/search-history-bad-request-error.ts): Error envelope for a failed request. Status code `400`. Applicable to 1 of 93 methods.*
* [`GetSearchByIdBadRequestError`](./src/models/errors/get-search-by-id-bad-request-error.ts): Invalid request — `searchId` failed Zod validation (not a valid ObjectId). Status code `400`. Applicable to 1 of 93 methods.*
* [`DeleteAgentConversationChatAttachmentBadRequestError`](./src/models/errors/delete-agent-conversation-chat-attachment-bad-request-error.ts): Invalid or blank path params (`agentKey` or `recordId`). Status code `400`. Applicable to 1 of 93 methods.*
* [`GetAvailableModelsByTypeBadRequestError`](./src/models/errors/get-available-models-by-type-bad-request-error.ts): Invalid `modelType` path parameter.  The `modelType` value was not one of the supported enum categories. This response is produced by the Zod validation middleware **before** the handler runs. The `error.metadata.errors` array contains per-field detail about exactly which constraint failed. Status code `400`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubRootNodesUnauthorizedError`](./src/models/errors/get-knowledge-hub-root-nodes-unauthorized-error.ts): Missing or invalid authentication token.  The bearer token was absent, expired, malformed, or could not be verified by the auth middleware. Status code `401`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubChildNodesUnauthorizedError`](./src/models/errors/get-knowledge-hub-child-nodes-unauthorized-error.ts): Missing or invalid authentication token.  The bearer token was absent, expired, malformed, or could not be verified by the auth middleware. Status code `401`. Applicable to 1 of 93 methods.*
* [`SearchHistoryUnauthorizedError`](./src/models/errors/search-history-unauthorized-error.ts): Error envelope for a failed request. Status code `401`. Applicable to 1 of 93 methods.*
* [`GetSearchByIdUnauthorizedError`](./src/models/errors/get-search-by-id-unauthorized-error.ts): Missing or invalid bearer token. Status code `401`. Applicable to 1 of 93 methods.*
* [`GetAvailableModelsByTypeUnauthorizedError`](./src/models/errors/get-available-models-by-type-unauthorized-error.ts): Missing or invalid authentication token.  The bearer token was absent, expired, malformed, or could not be verified by the auth middleware. Status code `401`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubRootNodesForbiddenError`](./src/models/errors/get-knowledge-hub-root-nodes-forbidden-error.ts): Insufficient OAuth scope.  Only applies to OAuth tokens. The token did not carry the `kb:read` scope required by this endpoint. Regular (non-OAuth) JWT bearer tokens are not subject to scope enforcement and will not receive this error. Status code `403`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubChildNodesForbiddenError`](./src/models/errors/get-knowledge-hub-child-nodes-forbidden-error.ts): Insufficient OAuth scope.  Only applies to OAuth tokens. The token did not carry the `kb:read` scope required by this endpoint. Regular (non-OAuth) JWT bearer tokens are not subject to scope enforcement and will not receive this error. Status code `403`. Applicable to 1 of 93 methods.*
* [`SearchHistoryForbiddenError`](./src/models/errors/search-history-forbidden-error.ts): Error envelope for a failed request. Status code `403`. Applicable to 1 of 93 methods.*
* [`GetSearchByIdForbiddenError`](./src/models/errors/get-search-by-id-forbidden-error.ts): Bearer token lacks the `semantic:read` scope. Status code `403`. Applicable to 1 of 93 methods.*
* [`GetAvailableModelsByTypeForbiddenError`](./src/models/errors/get-available-models-by-type-forbidden-error.ts): Insufficient OAuth scope.  Only applies to OAuth tokens. The token did not carry the `config:read` scope required by this endpoint. Regular (non-OAuth) JWT bearer tokens are not subject to scope enforcement and will not receive this error. Status code `403`. Applicable to 1 of 93 methods.*
* [`StreamRecordErrorResponse`](./src/models/errors/stream-record-error-response.ts): Error payload returned by the legacy record-stream proxy when the downstream streaming request fails after route middleware has passed. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubChildNodesNotFoundError`](./src/models/errors/get-knowledge-hub-child-nodes-not-found-error.ts): Parent node not found.  The `parentId` does not correspond to an existing node of the specified `parentType`, or the node has been deleted. Status code `404`. Applicable to 1 of 93 methods.*
* [`GetSearchByIdNotFoundError`](./src/models/errors/get-search-by-id-not-found-error.ts): Reserved for parity with sibling routes; this endpoint currently returns `200` with an empty array for an unknown id rather than emitting `404`. Status code `404`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubRootNodesInternalServerError`](./src/models/errors/get-knowledge-hub-root-nodes-internal-server-error.ts): An unexpected error occurred on the server. Status code `500`. Applicable to 1 of 93 methods.*
* [`GetKnowledgeHubChildNodesInternalServerError`](./src/models/errors/get-knowledge-hub-child-nodes-internal-server-error.ts): An unexpected error occurred on the server. Status code `500`. Applicable to 1 of 93 methods.*
* [`SearchHistoryInternalServerError`](./src/models/errors/search-history-internal-server-error.ts): Error envelope for a failed request. Status code `500`. Applicable to 1 of 93 methods.*
* [`GetSearchByIdInternalServerError`](./src/models/errors/get-search-by-id-internal-server-error.ts): Server error. Possible causes:  - Explicit `InternalServerError`   or any other 500 `BaseError` thrown by the handler. - Non-`BaseError` exception caught by the   global error middleware. - Response serializer fallback. Status code `500`. Applicable to 1 of 93 methods.*
* [`GetAvailableModelsByTypeInternalServerError`](./src/models/errors/get-available-models-by-type-internal-server-error.ts): An unexpected error occurred on the server. Status code `500`. Applicable to 1 of 93 methods.*
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

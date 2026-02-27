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
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
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
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.initAuth({
    email: "user@example.com",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable   |
| ------------ | ---- | ----------- | ---------------------- |
| `bearerAuth` | http | HTTP Bearer | `PIPESHUB_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await pipeshub.userAccount.initAuth({
    email: "user@example.com",
  });

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.resetPasswordWithToken({
    scopedToken: process.env["PIPESHUB_SCOPED_TOKEN"] ?? "",
  }, {
    password: "H9GEHoL829GXj06",
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

### [AgentConversations](docs/sdks/agentconversations/README.md)

* [listAgentConversations](docs/sdks/agentconversations/README.md#listagentconversations) - List agent conversations
* [createAgentConversation](docs/sdks/agentconversations/README.md#createagentconversation) - Create agent conversation
* [streamAgentConversation](docs/sdks/agentconversations/README.md#streamagentconversation) - Create agent conversation with streaming
* [getAgentConversation](docs/sdks/agentconversations/README.md#getagentconversation) - Get agent conversation
* [deleteAgentConversation](docs/sdks/agentconversations/README.md#deleteagentconversation) - Delete agent conversation
* [addAgentMessage](docs/sdks/agentconversations/README.md#addagentmessage) - Add message to agent conversation
* [streamAgentMessage](docs/sdks/agentconversations/README.md#streamagentmessage) - Add message with streaming
* [regenerateAgentAnswer](docs/sdks/agentconversations/README.md#regenerateagentanswer) - Regenerate agent response

### [AgentTemplates](docs/sdks/agenttemplates/README.md)

* [listAgentTemplates](docs/sdks/agenttemplates/README.md#listagenttemplates) - List agent templates
* [createAgentTemplate](docs/sdks/agenttemplates/README.md#createagenttemplate) - Create agent template
* [getAgentTemplate](docs/sdks/agenttemplates/README.md#getagenttemplate) - Get agent template
* [updateAgentTemplate](docs/sdks/agenttemplates/README.md#updateagenttemplate) - Update agent template
* [deleteAgentTemplate](docs/sdks/agenttemplates/README.md#deleteagenttemplate) - Delete agent template

### [Agents](docs/sdks/agents/README.md)

* [listAgents](docs/sdks/agents/README.md#listagents) - List agents
* [createAgent](docs/sdks/agents/README.md#createagent) - Create agent
* [listAgentTools](docs/sdks/agents/README.md#listagenttools) - List available tools
* [getAgent](docs/sdks/agents/README.md#getagent) - Get agent
* [updateAgent](docs/sdks/agents/README.md#updateagent) - Update agent
* [deleteAgent](docs/sdks/agents/README.md#deleteagent) - Delete agent
* [getAgentPermissions](docs/sdks/agents/README.md#getagentpermissions) - Get agent permissions
* [updateAgentPermissions](docs/sdks/agents/README.md#updateagentpermissions) - Update agent permissions
* [shareAgent](docs/sdks/agents/README.md#shareagent) - Share agent

### [AIModelsProviders](docs/sdks/aimodelsproviders/README.md)

* [getModelsByType](docs/sdks/aimodelsproviders/README.md#getmodelsbytype) - Get models by type
* [getAvailableModelsByType](docs/sdks/aimodelsproviders/README.md#getavailablemodelsbytype) - Get available models for selection
* [addAIModelProvider](docs/sdks/aimodelsproviders/README.md#addaimodelprovider) - Add new AI model provider
* [updateAIModelProvider](docs/sdks/aimodelsproviders/README.md#updateaimodelprovider) - Update AI model provider
* [deleteAIModelProvider](docs/sdks/aimodelsproviders/README.md#deleteaimodelprovider) - Delete AI model provider
* [setDefaultAIModel](docs/sdks/aimodelsproviders/README.md#setdefaultaimodel) - Set default AI model

### [AuthenticationConfiguration](docs/sdks/authenticationconfiguration/README.md)

* [setAzureAdAuthConfig](docs/sdks/authenticationconfiguration/README.md#setazureadauthconfig) - Configure Azure AD authentication
* [getAzureAdAuthConfig](docs/sdks/authenticationconfiguration/README.md#getazureadauthconfig) - Get Azure AD configuration
* [setMicrosoftAuthConfig](docs/sdks/authenticationconfiguration/README.md#setmicrosoftauthconfig) - Configure Microsoft authentication
* [getMicrosoftAuthConfig](docs/sdks/authenticationconfiguration/README.md#getmicrosoftauthconfig) - Get Microsoft authentication configuration
* [setGoogleAuthConfig](docs/sdks/authenticationconfiguration/README.md#setgoogleauthconfig) - Configure Google authentication
* [getGoogleAuthConfig](docs/sdks/authenticationconfiguration/README.md#getgoogleauthconfig) - Get Google authentication configuration
* [setSsoAuthConfig](docs/sdks/authenticationconfiguration/README.md#setssoauthconfig) - Configure SAML SSO authentication
* [getSsoAuthConfig](docs/sdks/authenticationconfiguration/README.md#getssoauthconfig) - Get SAML SSO configuration
* [setOAuthConfig](docs/sdks/authenticationconfiguration/README.md#setoauthconfig) - Configure generic OAuth provider
* [getGenericOAuthConfig](docs/sdks/authenticationconfiguration/README.md#getgenericoauthconfig) - Get generic OAuth configuration

### [Connector](docs/sdks/connector/README.md)

* [reindexRecord](docs/sdks/connector/README.md#reindexrecord) - Reindex single record
* [reindexRecordGroup](docs/sdks/connector/README.md#reindexrecordgroup) - Reindex record group
* [resyncConnector](docs/sdks/connector/README.md#resyncconnector) - Resync connector
* [getConnectorStats](docs/sdks/connector/README.md#getconnectorstats) - Get connector statistics

### [ConnectorConfiguration](docs/sdks/connectorconfiguration/README.md)

* [getConnectorConfig](docs/sdks/connectorconfiguration/README.md#getconnectorconfig) - Get connector configuration
* [updateConnectorConfig](docs/sdks/connectorconfiguration/README.md#updateconnectorconfig) - Update connector configuration
* [updateConnectorAuthConfig](docs/sdks/connectorconfiguration/README.md#updateconnectorauthconfig) - Update authentication configuration
* [updateConnectorFiltersSyncConfig](docs/sdks/connectorconfiguration/README.md#updateconnectorfilterssyncconfig) - Update filters and sync configuration

### [ConnectorControl](docs/sdks/connectorcontrol/README.md)

* [toggleConnector](docs/sdks/connectorcontrol/README.md#toggleconnector) - Toggle connector sync or agent

### [ConnectorFilters](docs/sdks/connectorfilters/README.md)

* [getConnectorFilters](docs/sdks/connectorfilters/README.md#getconnectorfilters) - Get filter options
* [saveConnectorFilters](docs/sdks/connectorfilters/README.md#saveconnectorfilters) - Save filter selections
* [getFilterFieldOptions](docs/sdks/connectorfilters/README.md#getfilterfieldoptions) - Get dynamic filter options

### [ConnectorInstances](docs/sdks/connectorinstances/README.md)

* [listConnectorInstances](docs/sdks/connectorinstances/README.md#listconnectorinstances) - List connector instances
* [createConnectorInstance](docs/sdks/connectorinstances/README.md#createconnectorinstance) - Create connector instance
* [listActiveConnectors](docs/sdks/connectorinstances/README.md#listactiveconnectors) - List active connector instances
* [listInactiveConnectors](docs/sdks/connectorinstances/README.md#listinactiveconnectors) - List inactive connector instances
* [listConfiguredConnectors](docs/sdks/connectorinstances/README.md#listconfiguredconnectors) - List configured connector instances
* [listActiveAgentConnectors](docs/sdks/connectorinstances/README.md#listactiveagentconnectors) - List active agent connectors
* [getConnectorInstance](docs/sdks/connectorinstances/README.md#getconnectorinstance) - Get connector instance
* [deleteConnectorInstance](docs/sdks/connectorinstances/README.md#deleteconnectorinstance) - Delete connector instance
* [updateConnectorName](docs/sdks/connectorinstances/README.md#updateconnectorname) - Update connector instance name

### [ConnectorOAuth](docs/sdks/connectoroauth/README.md)

* [getOAuthAuthorizationUrl](docs/sdks/connectoroauth/README.md#getoauthauthorizationurl) - Get OAuth authorization URL
* [handleOAuthCallback](docs/sdks/connectoroauth/README.md#handleoauthcallback) - OAuth callback handler

### [ConnectorRegistry](docs/sdks/connectorregistry/README.md)

* [getConnectorRegistry](docs/sdks/connectorregistry/README.md#getconnectorregistry) - List available connector types
* [getConnectorSchema](docs/sdks/connectorregistry/README.md#getconnectorschema) - Get connector configuration schema

### [Conversations](docs/sdks/conversations/README.md)

* [createConversation](docs/sdks/conversations/README.md#createconversation) - Create a new AI conversation
* [streamChat](docs/sdks/conversations/README.md#streamchat) - Create conversation with streaming response
* [getAllConversations](docs/sdks/conversations/README.md#getallconversations) - List all conversations
* [getArchivedConversations](docs/sdks/conversations/README.md#getarchivedconversations) - List archived conversations
* [getConversationById](docs/sdks/conversations/README.md#getconversationbyid) - Get conversation by ID
* [deleteConversationById](docs/sdks/conversations/README.md#deleteconversationbyid) - Delete conversation
* [addMessage](docs/sdks/conversations/README.md#addmessage) - Add message to conversation
* [addMessageStream](docs/sdks/conversations/README.md#addmessagestream) - Add message with streaming response
* [shareConversation](docs/sdks/conversations/README.md#shareconversation) - Share conversation with users
* [updateConversationTitle](docs/sdks/conversations/README.md#updateconversationtitle) - Update conversation title
* [archiveConversation](docs/sdks/conversations/README.md#archiveconversation) - Archive conversation
* [unarchiveConversation](docs/sdks/conversations/README.md#unarchiveconversation) - Unarchive conversation
* [regenerateAnswer](docs/sdks/conversations/README.md#regenerateanswer) - Regenerate AI response
* [updateMessageFeedback](docs/sdks/conversations/README.md#updatemessagefeedback) - Submit feedback on AI response

### [CrawlingJobs](docs/sdks/crawlingjobs/README.md)

* [scheduleCrawlingJob](docs/sdks/crawlingjobs/README.md#schedulecrawlingjob) - Schedule a crawling job
* [getCrawlingJobStatus](docs/sdks/crawlingjobs/README.md#getcrawlingjobstatus) - Get crawling job status
* [removeCrawlingJob](docs/sdks/crawlingjobs/README.md#removecrawlingjob) - Remove a crawling job

### [DocumentManagement](docs/sdks/documentmanagement/README.md)

* [downloadDocument](docs/sdks/documentmanagement/README.md#downloaddocument) - Download document

### [Folders](docs/sdks/folders/README.md)

* [createRootFolder](docs/sdks/folders/README.md#createrootfolder) - Create root folder
* [getFolderContents](docs/sdks/folders/README.md#getfoldercontents) - Get folder contents
* [updateFolder](docs/sdks/folders/README.md#updatefolder) - Update folder
* [deleteFolder](docs/sdks/folders/README.md#deletefolder) - Delete folder
* [getFolderChildren](docs/sdks/folders/README.md#getfolderchildren) - Get folder children (alias for folder contents)
* [createSubfolder](docs/sdks/folders/README.md#createsubfolder) - Create subfolder

### [KnowledgeBases](docs/sdks/knowledgebases/README.md)

* [createKnowledgeBase](docs/sdks/knowledgebases/README.md#createknowledgebase) - Create a new knowledge base
* [listKnowledgeBases](docs/sdks/knowledgebases/README.md#listknowledgebases) - List all knowledge bases
* [getKnowledgeBase](docs/sdks/knowledgebases/README.md#getknowledgebase) - Get knowledge base by ID
* [updateKnowledgeBase](docs/sdks/knowledgebases/README.md#updateknowledgebase) - Update knowledge base
* [deleteKnowledgeBase](docs/sdks/knowledgebases/README.md#deleteknowledgebase) - Delete knowledge base
* [getKnowledgeHubRootNodes](docs/sdks/knowledgebases/README.md#getknowledgehubrootnodes) - Get knowledge hub root nodes
* [getKnowledgeHubChildNodes](docs/sdks/knowledgebases/README.md#getknowledgehubchildnodes) - Get knowledge hub child nodes

### [MetricsCollection](docs/sdks/metricscollection/README.md)

* [getMetricsCollection](docs/sdks/metricscollection/README.md#getmetricscollection) - Get metrics collection configuration
* [toggleMetricsCollection](docs/sdks/metricscollection/README.md#togglemetricscollection) - Enable or disable metrics collection

### [OAuth](docs/sdks/oauth/README.md)

* [exchangeOAuthCode](docs/sdks/oauth/README.md#exchangeoauthcode) - Exchange OAuth authorization code for tokens

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

* [oauthAuthorize](docs/sdks/oauthprovider/README.md#oauthauthorize) - Initiate OAuth authorization flow
* [oauthAuthorizeConsent](docs/sdks/oauthprovider/README.md#oauthauthorizeconsent) - Submit authorization consent
* [oauthToken](docs/sdks/oauthprovider/README.md#oauthtoken) - Exchange authorization code for tokens
* [oauthRevoke](docs/sdks/oauthprovider/README.md#oauthrevoke) - Revoke an access or refresh token
* [oauthIntrospect](docs/sdks/oauthprovider/README.md#oauthintrospect) - Introspect a token

### [OpenIDConnect](docs/sdks/openidconnect/README.md)

* [oauthUserInfo](docs/sdks/openidconnect/README.md#oauthuserinfo) - Get authenticated user information
* [openidConfiguration](docs/sdks/openidconnect/README.md#openidconfiguration) - OpenID Connect Discovery
* [jwks](docs/sdks/openidconnect/README.md#jwks) - JSON Web Key Set

### [OrganizationAuthConfig](docs/sdks/organizationauthconfig/README.md)

* [getAuthMethods](docs/sdks/organizationauthconfig/README.md#getauthmethods) - Get organization authentication methods
* [updateAuthMethod](docs/sdks/organizationauthconfig/README.md#updateauthmethod) - Update organization authentication methods

### [Organizations](docs/sdks/organizations/README.md)

* [checkOrgExists](docs/sdks/organizations/README.md#checkorgexists) - Check if organization exists
* [createOrganization](docs/sdks/organizations/README.md#createorganization) - Create organization
* [getCurrentOrganization](docs/sdks/organizations/README.md#getcurrentorganization) - Get current organization
* [updateOrganization](docs/sdks/organizations/README.md#updateorganization) - Update organization
* [deleteOrganization](docs/sdks/organizations/README.md#deleteorganization) - Delete organization
* [uploadOrganizationLogo](docs/sdks/organizations/README.md#uploadorganizationlogo) - Upload organization logo
* [getOrganizationLogo](docs/sdks/organizations/README.md#getorganizationlogo) - Get organization logo
* [deleteOrganizationLogo](docs/sdks/organizations/README.md#deleteorganizationlogo) - Delete organization logo
* [getOnboardingStatus](docs/sdks/organizations/README.md#getonboardingstatus) - Get onboarding status
* [updateOnboardingStatus](docs/sdks/organizations/README.md#updateonboardingstatus) - Update onboarding status

### [Permissions](docs/sdks/permissions/README.md)

* [createKBPermission](docs/sdks/permissions/README.md#createkbpermission) - Grant permissions
* [listKBPermissions](docs/sdks/permissions/README.md#listkbpermissions) - List permissions
* [updateKBPermissions](docs/sdks/permissions/README.md#updatekbpermissions) - Update permissions
* [deleteKBPermissions](docs/sdks/permissions/README.md#deletekbpermissions) - Remove permissions

### [PlatformSettings](docs/sdks/platformsettings/README.md)

* [setPlatformSettings](docs/sdks/platformsettings/README.md#setplatformsettings) - Update platform settings
* [getPlatformSettings](docs/sdks/platformsettings/README.md#getplatformsettings) - Get platform settings
* [getAvailableFeatureFlags](docs/sdks/platformsettings/README.md#getavailablefeatureflags) - Get available feature flags
* [setCustomSystemPrompt](docs/sdks/platformsettings/README.md#setcustomsystemprompt) - Update custom system prompt
* [getCustomSystemPrompt](docs/sdks/platformsettings/README.md#getcustomsystemprompt) - Get custom system prompt

### [PublicURLs](docs/sdks/publicurls/README.md)

* [setFrontendPublicUrl](docs/sdks/publicurls/README.md#setfrontendpublicurl) - Set frontend public URL
* [getFrontendPublicUrl](docs/sdks/publicurls/README.md#getfrontendpublicurl) - Get frontend public URL
* [setConnectorPublicUrl](docs/sdks/publicurls/README.md#setconnectorpublicurl) - Set connector public URL
* [getConnectorPublicUrl](docs/sdks/publicurls/README.md#getconnectorpublicurl) - Get connector public URL

### [Records](docs/sdks/records/README.md)

* [getAllRecords](docs/sdks/records/README.md#getallrecords) - Get all records across knowledge bases
* [getKBRecords](docs/sdks/records/README.md#getkbrecords) - Get records for a knowledge base
* [getKBChildren](docs/sdks/records/README.md#getkbchildren) - Get KB children (alias for records)
* [getRecordById](docs/sdks/records/README.md#getrecordbyid) - Get record by ID
* [updateRecord](docs/sdks/records/README.md#updaterecord) - Update record
* [deleteRecord](docs/sdks/records/README.md#deleterecord) - Delete record
* [streamRecordBuffer](docs/sdks/records/README.md#streamrecordbuffer) - Stream record content

### [Saml](docs/sdks/saml/README.md)

* [signInViaSAML](docs/sdks/saml/README.md#signinviasaml) - Initiate SAML sign-in flow

### [SemanticSearch](docs/sdks/semanticsearch/README.md)

* [search](docs/sdks/semanticsearch/README.md#search) - Perform semantic search
* [searchHistory](docs/sdks/semanticsearch/README.md#searchhistory) - Get search history
* [deleteAllSearchHistory](docs/sdks/semanticsearch/README.md#deleteallsearchhistory) - Clear all search history

### [SMTPConfiguration](docs/sdks/smtpconfiguration/README.md)

* [createSMTPConfig](docs/sdks/smtpconfiguration/README.md#createsmtpconfig) - Create or update SMTP configuration
* [getSMTPConfig](docs/sdks/smtpconfiguration/README.md#getsmtpconfig) - Get SMTP configuration

### [StorageConfiguration](docs/sdks/storageconfiguration/README.md)

* [getStorageConfig](docs/sdks/storageconfiguration/README.md#getstorageconfig) - Get current storage configuration

### [Teams](docs/sdks/teams/README.md)

* [createTeam](docs/sdks/teams/README.md#createteam) - Create a team
* [listTeams](docs/sdks/teams/README.md#listteams) - List teams
* [getTeamById](docs/sdks/teams/README.md#getteambyid) - Get team by ID
* [updateTeam](docs/sdks/teams/README.md#updateteam) - Update team
* [deleteTeam](docs/sdks/teams/README.md#deleteteam) - Delete team
* [getUserTeams](docs/sdks/teams/README.md#getuserteams) - Get current user's teams

### [ToolsetConfiguration](docs/sdks/toolsetconfiguration/README.md)

* [getToolsetConfig](docs/sdks/toolsetconfiguration/README.md#gettoolsetconfig) - Get toolset configuration
* [~~saveToolsetConfig~~](docs/sdks/toolsetconfiguration/README.md#savetoolsetconfig) - Save toolset configuration :warning: **Deprecated**
* [updateToolsetConfig](docs/sdks/toolsetconfiguration/README.md#updatetoolsetconfig) - Update toolset configuration
* [deleteToolsetConfig](docs/sdks/toolsetconfiguration/README.md#deletetoolsetconfig) - Delete toolset configuration

### [ToolsetInstances](docs/sdks/toolsetinstances/README.md)

* [createToolset](docs/sdks/toolsetinstances/README.md#createtoolset) - Create toolset instance
* [listConfiguredToolsets](docs/sdks/toolsetinstances/README.md#listconfiguredtoolsets) - List configured toolsets
* [checkToolsetStatus](docs/sdks/toolsetinstances/README.md#checktoolsetstatus) - Check toolset status

### [ToolsetOAuth](docs/sdks/toolsetoauth/README.md)

* [getToolsetOAuthUrl](docs/sdks/toolsetoauth/README.md#gettoolsetoauthurl) - Get OAuth authorization URL
* [handleToolsetOAuthCallback](docs/sdks/toolsetoauth/README.md#handletoolsetoauthcallback) - Handle OAuth callback

### [ToolsetRegistry](docs/sdks/toolsetregistry/README.md)

* [listToolsetRegistry](docs/sdks/toolsetregistry/README.md#listtoolsetregistry) - List available toolsets
* [getToolsetSchema](docs/sdks/toolsetregistry/README.md#gettoolsetschema) - Get toolset schema

### [Upload](docs/sdks/upload/README.md)

* [uploadRecordsToKB](docs/sdks/upload/README.md#uploadrecordstokb) - Upload files to knowledge base
* [uploadRecordsToFolder](docs/sdks/upload/README.md#uploadrecordstofolder) - Upload files to folder
* [getUploadLimits](docs/sdks/upload/README.md#getuploadlimits) - Get upload limits

### [UserAccount](docs/sdks/useraccount/README.md)

* [initAuth](docs/sdks/useraccount/README.md#initauth) - Initialize authentication session
* [authenticate](docs/sdks/useraccount/README.md#authenticate) - Authenticate user with credentials
* [generateLoginOtp](docs/sdks/useraccount/README.md#generateloginotp) - Generate and send OTP for login
* [forgotPassword](docs/sdks/useraccount/README.md#forgotpassword) - Request password reset email
* [resetPasswordWithToken](docs/sdks/useraccount/README.md#resetpasswordwithtoken) - Reset password with email token
* [refreshToken](docs/sdks/useraccount/README.md#refreshtoken) - Refresh access token
* [logout](docs/sdks/useraccount/README.md#logout) - Logout current session

### [UserGroups](docs/sdks/usergroups/README.md)

* [createUserGroup](docs/sdks/usergroups/README.md#createusergroup) - Create user group
* [getAllUserGroups](docs/sdks/usergroups/README.md#getallusergroups) - Get all user groups
* [getUserGroupById](docs/sdks/usergroups/README.md#getusergroupbyid) - Get user group by ID
* [updateUserGroup](docs/sdks/usergroups/README.md#updateusergroup) - Update user group
* [deleteUserGroup](docs/sdks/usergroups/README.md#deleteusergroup) - Delete user group
* [addUsersToGroup](docs/sdks/usergroups/README.md#adduserstogroup) - Add users to group
* [removeUsersFromGroup](docs/sdks/usergroups/README.md#removeusersfromgroup) - Remove users from group
* [getGroupsForUser](docs/sdks/usergroups/README.md#getgroupsforuser) - Get groups for a user

### [Users](docs/sdks/users/README.md)

* [getAllUsers](docs/sdks/users/README.md#getallusers) - Get all users
* [createUser](docs/sdks/users/README.md#createuser) - Create a new user
* [getUserById](docs/sdks/users/README.md#getuserbyid) - Get user by ID
* [updateUser](docs/sdks/users/README.md#updateuser) - Update user
* [deleteUser](docs/sdks/users/README.md#deleteuser) - Delete user
* [getUserEmailById](docs/sdks/users/README.md#getuseremailbyid) - Get user email by ID
* [uploadUserDisplayPicture](docs/sdks/users/README.md#uploaduserdisplaypicture) - Upload display picture
* [getUserDisplayPicture](docs/sdks/users/README.md#getuserdisplaypicture) - Get display picture
* [removeUserDisplayPicture](docs/sdks/users/README.md#removeuserdisplaypicture) - Remove display picture
* [bulkInviteUsers](docs/sdks/users/README.md#bulkinviteusers) - Bulk invite users
* [resendUserInvite](docs/sdks/users/README.md#resenduserinvite) - Resend user invite
* [listUsersGraph](docs/sdks/users/README.md#listusersgraph) - List users (paginated with graph data)
* [unblockUser](docs/sdks/users/README.md#unblockuser) - Unblock a user in organization

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

- [`agentConversationsAddAgentMessage`](docs/sdks/agentconversations/README.md#addagentmessage) - Add message to agent conversation
- [`agentConversationsCreateAgentConversation`](docs/sdks/agentconversations/README.md#createagentconversation) - Create agent conversation
- [`agentConversationsDeleteAgentConversation`](docs/sdks/agentconversations/README.md#deleteagentconversation) - Delete agent conversation
- [`agentConversationsGetAgentConversation`](docs/sdks/agentconversations/README.md#getagentconversation) - Get agent conversation
- [`agentConversationsListAgentConversations`](docs/sdks/agentconversations/README.md#listagentconversations) - List agent conversations
- [`agentConversationsRegenerateAgentAnswer`](docs/sdks/agentconversations/README.md#regenerateagentanswer) - Regenerate agent response
- [`agentConversationsStreamAgentConversation`](docs/sdks/agentconversations/README.md#streamagentconversation) - Create agent conversation with streaming
- [`agentConversationsStreamAgentMessage`](docs/sdks/agentconversations/README.md#streamagentmessage) - Add message with streaming
- [`agentsCreateAgent`](docs/sdks/agents/README.md#createagent) - Create agent
- [`agentsDeleteAgent`](docs/sdks/agents/README.md#deleteagent) - Delete agent
- [`agentsGetAgent`](docs/sdks/agents/README.md#getagent) - Get agent
- [`agentsGetAgentPermissions`](docs/sdks/agents/README.md#getagentpermissions) - Get agent permissions
- [`agentsListAgents`](docs/sdks/agents/README.md#listagents) - List agents
- [`agentsListAgentTools`](docs/sdks/agents/README.md#listagenttools) - List available tools
- [`agentsShareAgent`](docs/sdks/agents/README.md#shareagent) - Share agent
- [`agentsUpdateAgent`](docs/sdks/agents/README.md#updateagent) - Update agent
- [`agentsUpdateAgentPermissions`](docs/sdks/agents/README.md#updateagentpermissions) - Update agent permissions
- [`agentTemplatesCreateAgentTemplate`](docs/sdks/agenttemplates/README.md#createagenttemplate) - Create agent template
- [`agentTemplatesDeleteAgentTemplate`](docs/sdks/agenttemplates/README.md#deleteagenttemplate) - Delete agent template
- [`agentTemplatesGetAgentTemplate`](docs/sdks/agenttemplates/README.md#getagenttemplate) - Get agent template
- [`agentTemplatesListAgentTemplates`](docs/sdks/agenttemplates/README.md#listagenttemplates) - List agent templates
- [`agentTemplatesUpdateAgentTemplate`](docs/sdks/agenttemplates/README.md#updateagenttemplate) - Update agent template
- [`aiModelsProvidersAddAIModelProvider`](docs/sdks/aimodelsproviders/README.md#addaimodelprovider) - Add new AI model provider
- [`aiModelsProvidersDeleteAIModelProvider`](docs/sdks/aimodelsproviders/README.md#deleteaimodelprovider) - Delete AI model provider
- [`aiModelsProvidersGetAvailableModelsByType`](docs/sdks/aimodelsproviders/README.md#getavailablemodelsbytype) - Get available models for selection
- [`aiModelsProvidersGetModelsByType`](docs/sdks/aimodelsproviders/README.md#getmodelsbytype) - Get models by type
- [`aiModelsProvidersSetDefaultAIModel`](docs/sdks/aimodelsproviders/README.md#setdefaultaimodel) - Set default AI model
- [`aiModelsProvidersUpdateAIModelProvider`](docs/sdks/aimodelsproviders/README.md#updateaimodelprovider) - Update AI model provider
- [`authenticationConfigurationGetAzureAdAuthConfig`](docs/sdks/authenticationconfiguration/README.md#getazureadauthconfig) - Get Azure AD configuration
- [`authenticationConfigurationGetGenericOAuthConfig`](docs/sdks/authenticationconfiguration/README.md#getgenericoauthconfig) - Get generic OAuth configuration
- [`authenticationConfigurationGetGoogleAuthConfig`](docs/sdks/authenticationconfiguration/README.md#getgoogleauthconfig) - Get Google authentication configuration
- [`authenticationConfigurationGetMicrosoftAuthConfig`](docs/sdks/authenticationconfiguration/README.md#getmicrosoftauthconfig) - Get Microsoft authentication configuration
- [`authenticationConfigurationGetSsoAuthConfig`](docs/sdks/authenticationconfiguration/README.md#getssoauthconfig) - Get SAML SSO configuration
- [`authenticationConfigurationSetAzureAdAuthConfig`](docs/sdks/authenticationconfiguration/README.md#setazureadauthconfig) - Configure Azure AD authentication
- [`authenticationConfigurationSetGoogleAuthConfig`](docs/sdks/authenticationconfiguration/README.md#setgoogleauthconfig) - Configure Google authentication
- [`authenticationConfigurationSetMicrosoftAuthConfig`](docs/sdks/authenticationconfiguration/README.md#setmicrosoftauthconfig) - Configure Microsoft authentication
- [`authenticationConfigurationSetOAuthConfig`](docs/sdks/authenticationconfiguration/README.md#setoauthconfig) - Configure generic OAuth provider
- [`authenticationConfigurationSetSsoAuthConfig`](docs/sdks/authenticationconfiguration/README.md#setssoauthconfig) - Configure SAML SSO authentication
- [`connectorConfigurationGetConnectorConfig`](docs/sdks/connectorconfiguration/README.md#getconnectorconfig) - Get connector configuration
- [`connectorConfigurationUpdateConnectorAuthConfig`](docs/sdks/connectorconfiguration/README.md#updateconnectorauthconfig) - Update authentication configuration
- [`connectorConfigurationUpdateConnectorConfig`](docs/sdks/connectorconfiguration/README.md#updateconnectorconfig) - Update connector configuration
- [`connectorConfigurationUpdateConnectorFiltersSyncConfig`](docs/sdks/connectorconfiguration/README.md#updateconnectorfilterssyncconfig) - Update filters and sync configuration
- [`connectorControlToggleConnector`](docs/sdks/connectorcontrol/README.md#toggleconnector) - Toggle connector sync or agent
- [`connectorFiltersGetConnectorFilters`](docs/sdks/connectorfilters/README.md#getconnectorfilters) - Get filter options
- [`connectorFiltersGetFilterFieldOptions`](docs/sdks/connectorfilters/README.md#getfilterfieldoptions) - Get dynamic filter options
- [`connectorFiltersSaveConnectorFilters`](docs/sdks/connectorfilters/README.md#saveconnectorfilters) - Save filter selections
- [`connectorGetConnectorStats`](docs/sdks/connector/README.md#getconnectorstats) - Get connector statistics
- [`connectorInstancesCreateConnectorInstance`](docs/sdks/connectorinstances/README.md#createconnectorinstance) - Create connector instance
- [`connectorInstancesDeleteConnectorInstance`](docs/sdks/connectorinstances/README.md#deleteconnectorinstance) - Delete connector instance
- [`connectorInstancesGetConnectorInstance`](docs/sdks/connectorinstances/README.md#getconnectorinstance) - Get connector instance
- [`connectorInstancesListActiveAgentConnectors`](docs/sdks/connectorinstances/README.md#listactiveagentconnectors) - List active agent connectors
- [`connectorInstancesListActiveConnectors`](docs/sdks/connectorinstances/README.md#listactiveconnectors) - List active connector instances
- [`connectorInstancesListConfiguredConnectors`](docs/sdks/connectorinstances/README.md#listconfiguredconnectors) - List configured connector instances
- [`connectorInstancesListConnectorInstances`](docs/sdks/connectorinstances/README.md#listconnectorinstances) - List connector instances
- [`connectorInstancesListInactiveConnectors`](docs/sdks/connectorinstances/README.md#listinactiveconnectors) - List inactive connector instances
- [`connectorInstancesUpdateConnectorName`](docs/sdks/connectorinstances/README.md#updateconnectorname) - Update connector instance name
- [`connectorOAuthGetOAuthAuthorizationUrl`](docs/sdks/connectoroauth/README.md#getoauthauthorizationurl) - Get OAuth authorization URL
- [`connectorOAuthHandleOAuthCallback`](docs/sdks/connectoroauth/README.md#handleoauthcallback) - OAuth callback handler
- [`connectorRegistryGetConnectorRegistry`](docs/sdks/connectorregistry/README.md#getconnectorregistry) - List available connector types
- [`connectorRegistryGetConnectorSchema`](docs/sdks/connectorregistry/README.md#getconnectorschema) - Get connector configuration schema
- [`connectorReindexRecord`](docs/sdks/connector/README.md#reindexrecord) - Reindex single record
- [`connectorReindexRecordGroup`](docs/sdks/connector/README.md#reindexrecordgroup) - Reindex record group
- [`connectorResyncConnector`](docs/sdks/connector/README.md#resyncconnector) - Resync connector
- [`conversationsAddMessage`](docs/sdks/conversations/README.md#addmessage) - Add message to conversation
- [`conversationsAddMessageStream`](docs/sdks/conversations/README.md#addmessagestream) - Add message with streaming response
- [`conversationsArchiveConversation`](docs/sdks/conversations/README.md#archiveconversation) - Archive conversation
- [`conversationsCreateConversation`](docs/sdks/conversations/README.md#createconversation) - Create a new AI conversation
- [`conversationsDeleteConversationById`](docs/sdks/conversations/README.md#deleteconversationbyid) - Delete conversation
- [`conversationsGetAllConversations`](docs/sdks/conversations/README.md#getallconversations) - List all conversations
- [`conversationsGetArchivedConversations`](docs/sdks/conversations/README.md#getarchivedconversations) - List archived conversations
- [`conversationsGetConversationById`](docs/sdks/conversations/README.md#getconversationbyid) - Get conversation by ID
- [`conversationsRegenerateAnswer`](docs/sdks/conversations/README.md#regenerateanswer) - Regenerate AI response
- [`conversationsShareConversation`](docs/sdks/conversations/README.md#shareconversation) - Share conversation with users
- [`conversationsStreamChat`](docs/sdks/conversations/README.md#streamchat) - Create conversation with streaming response
- [`conversationsUnarchiveConversation`](docs/sdks/conversations/README.md#unarchiveconversation) - Unarchive conversation
- [`conversationsUpdateConversationTitle`](docs/sdks/conversations/README.md#updateconversationtitle) - Update conversation title
- [`conversationsUpdateMessageFeedback`](docs/sdks/conversations/README.md#updatemessagefeedback) - Submit feedback on AI response
- [`crawlingJobsGetCrawlingJobStatus`](docs/sdks/crawlingjobs/README.md#getcrawlingjobstatus) - Get crawling job status
- [`crawlingJobsRemoveCrawlingJob`](docs/sdks/crawlingjobs/README.md#removecrawlingjob) - Remove a crawling job
- [`crawlingJobsScheduleCrawlingJob`](docs/sdks/crawlingjobs/README.md#schedulecrawlingjob) - Schedule a crawling job
- [`documentManagementDownloadDocument`](docs/sdks/documentmanagement/README.md#downloaddocument) - Download document
- [`foldersCreateRootFolder`](docs/sdks/folders/README.md#createrootfolder) - Create root folder
- [`foldersCreateSubfolder`](docs/sdks/folders/README.md#createsubfolder) - Create subfolder
- [`foldersDeleteFolder`](docs/sdks/folders/README.md#deletefolder) - Delete folder
- [`foldersGetFolderChildren`](docs/sdks/folders/README.md#getfolderchildren) - Get folder children (alias for folder contents)
- [`foldersGetFolderContents`](docs/sdks/folders/README.md#getfoldercontents) - Get folder contents
- [`foldersUpdateFolder`](docs/sdks/folders/README.md#updatefolder) - Update folder
- [`knowledgeBasesCreateKnowledgeBase`](docs/sdks/knowledgebases/README.md#createknowledgebase) - Create a new knowledge base
- [`knowledgeBasesDeleteKnowledgeBase`](docs/sdks/knowledgebases/README.md#deleteknowledgebase) - Delete knowledge base
- [`knowledgeBasesGetKnowledgeBase`](docs/sdks/knowledgebases/README.md#getknowledgebase) - Get knowledge base by ID
- [`knowledgeBasesGetKnowledgeHubChildNodes`](docs/sdks/knowledgebases/README.md#getknowledgehubchildnodes) - Get knowledge hub child nodes
- [`knowledgeBasesGetKnowledgeHubRootNodes`](docs/sdks/knowledgebases/README.md#getknowledgehubrootnodes) - Get knowledge hub root nodes
- [`knowledgeBasesListKnowledgeBases`](docs/sdks/knowledgebases/README.md#listknowledgebases) - List all knowledge bases
- [`knowledgeBasesUpdateKnowledgeBase`](docs/sdks/knowledgebases/README.md#updateknowledgebase) - Update knowledge base
- [`metricsCollectionGetMetricsCollection`](docs/sdks/metricscollection/README.md#getmetricscollection) - Get metrics collection configuration
- [`metricsCollectionToggleMetricsCollection`](docs/sdks/metricscollection/README.md#togglemetricscollection) - Enable or disable metrics collection
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
- [`oAuthExchangeOAuthCode`](docs/sdks/oauth/README.md#exchangeoauthcode) - Exchange OAuth authorization code for tokens
- [`oAuthProviderOauthAuthorize`](docs/sdks/oauthprovider/README.md#oauthauthorize) - Initiate OAuth authorization flow
- [`oAuthProviderOauthAuthorizeConsent`](docs/sdks/oauthprovider/README.md#oauthauthorizeconsent) - Submit authorization consent
- [`oAuthProviderOauthIntrospect`](docs/sdks/oauthprovider/README.md#oauthintrospect) - Introspect a token
- [`oAuthProviderOauthRevoke`](docs/sdks/oauthprovider/README.md#oauthrevoke) - Revoke an access or refresh token
- [`oAuthProviderOauthToken`](docs/sdks/oauthprovider/README.md#oauthtoken) - Exchange authorization code for tokens
- [`openIDConnectJwks`](docs/sdks/openidconnect/README.md#jwks) - JSON Web Key Set
- [`openIDConnectOauthUserInfo`](docs/sdks/openidconnect/README.md#oauthuserinfo) - Get authenticated user information
- [`openIDConnectOpenidConfiguration`](docs/sdks/openidconnect/README.md#openidconfiguration) - OpenID Connect Discovery
- [`organizationAuthConfigGetAuthMethods`](docs/sdks/organizationauthconfig/README.md#getauthmethods) - Get organization authentication methods
- [`organizationAuthConfigUpdateAuthMethod`](docs/sdks/organizationauthconfig/README.md#updateauthmethod) - Update organization authentication methods
- [`organizationsCheckOrgExists`](docs/sdks/organizations/README.md#checkorgexists) - Check if organization exists
- [`organizationsCreateOrganization`](docs/sdks/organizations/README.md#createorganization) - Create organization
- [`organizationsDeleteOrganization`](docs/sdks/organizations/README.md#deleteorganization) - Delete organization
- [`organizationsDeleteOrganizationLogo`](docs/sdks/organizations/README.md#deleteorganizationlogo) - Delete organization logo
- [`organizationsGetCurrentOrganization`](docs/sdks/organizations/README.md#getcurrentorganization) - Get current organization
- [`organizationsGetOnboardingStatus`](docs/sdks/organizations/README.md#getonboardingstatus) - Get onboarding status
- [`organizationsGetOrganizationLogo`](docs/sdks/organizations/README.md#getorganizationlogo) - Get organization logo
- [`organizationsUpdateOnboardingStatus`](docs/sdks/organizations/README.md#updateonboardingstatus) - Update onboarding status
- [`organizationsUpdateOrganization`](docs/sdks/organizations/README.md#updateorganization) - Update organization
- [`organizationsUploadOrganizationLogo`](docs/sdks/organizations/README.md#uploadorganizationlogo) - Upload organization logo
- [`permissionsCreateKBPermission`](docs/sdks/permissions/README.md#createkbpermission) - Grant permissions
- [`permissionsDeleteKBPermissions`](docs/sdks/permissions/README.md#deletekbpermissions) - Remove permissions
- [`permissionsListKBPermissions`](docs/sdks/permissions/README.md#listkbpermissions) - List permissions
- [`permissionsUpdateKBPermissions`](docs/sdks/permissions/README.md#updatekbpermissions) - Update permissions
- [`platformSettingsGetAvailableFeatureFlags`](docs/sdks/platformsettings/README.md#getavailablefeatureflags) - Get available feature flags
- [`platformSettingsGetCustomSystemPrompt`](docs/sdks/platformsettings/README.md#getcustomsystemprompt) - Get custom system prompt
- [`platformSettingsGetPlatformSettings`](docs/sdks/platformsettings/README.md#getplatformsettings) - Get platform settings
- [`platformSettingsSetCustomSystemPrompt`](docs/sdks/platformsettings/README.md#setcustomsystemprompt) - Update custom system prompt
- [`platformSettingsSetPlatformSettings`](docs/sdks/platformsettings/README.md#setplatformsettings) - Update platform settings
- [`publicURLsGetConnectorPublicUrl`](docs/sdks/publicurls/README.md#getconnectorpublicurl) - Get connector public URL
- [`publicURLsGetFrontendPublicUrl`](docs/sdks/publicurls/README.md#getfrontendpublicurl) - Get frontend public URL
- [`publicURLsSetConnectorPublicUrl`](docs/sdks/publicurls/README.md#setconnectorpublicurl) - Set connector public URL
- [`publicURLsSetFrontendPublicUrl`](docs/sdks/publicurls/README.md#setfrontendpublicurl) - Set frontend public URL
- [`recordsDeleteRecord`](docs/sdks/records/README.md#deleterecord) - Delete record
- [`recordsGetAllRecords`](docs/sdks/records/README.md#getallrecords) - Get all records across knowledge bases
- [`recordsGetKBChildren`](docs/sdks/records/README.md#getkbchildren) - Get KB children (alias for records)
- [`recordsGetKBRecords`](docs/sdks/records/README.md#getkbrecords) - Get records for a knowledge base
- [`recordsGetRecordById`](docs/sdks/records/README.md#getrecordbyid) - Get record by ID
- [`recordsStreamRecordBuffer`](docs/sdks/records/README.md#streamrecordbuffer) - Stream record content
- [`recordsUpdateRecord`](docs/sdks/records/README.md#updaterecord) - Update record
- [`samlSignInViaSAML`](docs/sdks/saml/README.md#signinviasaml) - Initiate SAML sign-in flow
- [`semanticSearchDeleteAllSearchHistory`](docs/sdks/semanticsearch/README.md#deleteallsearchhistory) - Clear all search history
- [`semanticSearchSearch`](docs/sdks/semanticsearch/README.md#search) - Perform semantic search
- [`semanticSearchSearchHistory`](docs/sdks/semanticsearch/README.md#searchhistory) - Get search history
- [`smtpConfigurationCreateSMTPConfig`](docs/sdks/smtpconfiguration/README.md#createsmtpconfig) - Create or update SMTP configuration
- [`smtpConfigurationGetSMTPConfig`](docs/sdks/smtpconfiguration/README.md#getsmtpconfig) - Get SMTP configuration
- [`storageConfigurationGetStorageConfig`](docs/sdks/storageconfiguration/README.md#getstorageconfig) - Get current storage configuration
- [`teamsCreateTeam`](docs/sdks/teams/README.md#createteam) - Create a team
- [`teamsDeleteTeam`](docs/sdks/teams/README.md#deleteteam) - Delete team
- [`teamsGetTeamById`](docs/sdks/teams/README.md#getteambyid) - Get team by ID
- [`teamsGetUserTeams`](docs/sdks/teams/README.md#getuserteams) - Get current user's teams
- [`teamsListTeams`](docs/sdks/teams/README.md#listteams) - List teams
- [`teamsUpdateTeam`](docs/sdks/teams/README.md#updateteam) - Update team
- [`toolsetConfigurationDeleteToolsetConfig`](docs/sdks/toolsetconfiguration/README.md#deletetoolsetconfig) - Delete toolset configuration
- [`toolsetConfigurationGetToolsetConfig`](docs/sdks/toolsetconfiguration/README.md#gettoolsetconfig) - Get toolset configuration
- [`toolsetConfigurationUpdateToolsetConfig`](docs/sdks/toolsetconfiguration/README.md#updatetoolsetconfig) - Update toolset configuration
- [`toolsetInstancesCheckToolsetStatus`](docs/sdks/toolsetinstances/README.md#checktoolsetstatus) - Check toolset status
- [`toolsetInstancesCreateToolset`](docs/sdks/toolsetinstances/README.md#createtoolset) - Create toolset instance
- [`toolsetInstancesListConfiguredToolsets`](docs/sdks/toolsetinstances/README.md#listconfiguredtoolsets) - List configured toolsets
- [`toolsetOAuthGetToolsetOAuthUrl`](docs/sdks/toolsetoauth/README.md#gettoolsetoauthurl) - Get OAuth authorization URL
- [`toolsetOAuthHandleToolsetOAuthCallback`](docs/sdks/toolsetoauth/README.md#handletoolsetoauthcallback) - Handle OAuth callback
- [`toolsetRegistryGetToolsetSchema`](docs/sdks/toolsetregistry/README.md#gettoolsetschema) - Get toolset schema
- [`toolsetRegistryListToolsetRegistry`](docs/sdks/toolsetregistry/README.md#listtoolsetregistry) - List available toolsets
- [`uploadGetUploadLimits`](docs/sdks/upload/README.md#getuploadlimits) - Get upload limits
- [`uploadUploadRecordsToFolder`](docs/sdks/upload/README.md#uploadrecordstofolder) - Upload files to folder
- [`uploadUploadRecordsToKB`](docs/sdks/upload/README.md#uploadrecordstokb) - Upload files to knowledge base
- [`userAccountAuthenticate`](docs/sdks/useraccount/README.md#authenticate) - Authenticate user with credentials
- [`userAccountForgotPassword`](docs/sdks/useraccount/README.md#forgotpassword) - Request password reset email
- [`userAccountGenerateLoginOtp`](docs/sdks/useraccount/README.md#generateloginotp) - Generate and send OTP for login
- [`userAccountInitAuth`](docs/sdks/useraccount/README.md#initauth) - Initialize authentication session
- [`userAccountLogout`](docs/sdks/useraccount/README.md#logout) - Logout current session
- [`userAccountRefreshToken`](docs/sdks/useraccount/README.md#refreshtoken) - Refresh access token
- [`userAccountResetPasswordWithToken`](docs/sdks/useraccount/README.md#resetpasswordwithtoken) - Reset password with email token
- [`userGroupsAddUsersToGroup`](docs/sdks/usergroups/README.md#adduserstogroup) - Add users to group
- [`userGroupsCreateUserGroup`](docs/sdks/usergroups/README.md#createusergroup) - Create user group
- [`userGroupsDeleteUserGroup`](docs/sdks/usergroups/README.md#deleteusergroup) - Delete user group
- [`userGroupsGetAllUserGroups`](docs/sdks/usergroups/README.md#getallusergroups) - Get all user groups
- [`userGroupsGetGroupsForUser`](docs/sdks/usergroups/README.md#getgroupsforuser) - Get groups for a user
- [`userGroupsGetUserGroupById`](docs/sdks/usergroups/README.md#getusergroupbyid) - Get user group by ID
- [`userGroupsRemoveUsersFromGroup`](docs/sdks/usergroups/README.md#removeusersfromgroup) - Remove users from group
- [`userGroupsUpdateUserGroup`](docs/sdks/usergroups/README.md#updateusergroup) - Update user group
- [`usersBulkInviteUsers`](docs/sdks/users/README.md#bulkinviteusers) - Bulk invite users
- [`usersCreateUser`](docs/sdks/users/README.md#createuser) - Create a new user
- [`usersDeleteUser`](docs/sdks/users/README.md#deleteuser) - Delete user
- [`usersGetAllUsers`](docs/sdks/users/README.md#getallusers) - Get all users
- [`usersGetUserById`](docs/sdks/users/README.md#getuserbyid) - Get user by ID
- [`usersGetUserDisplayPicture`](docs/sdks/users/README.md#getuserdisplaypicture) - Get display picture
- [`usersGetUserEmailById`](docs/sdks/users/README.md#getuseremailbyid) - Get user email by ID
- [`usersListUsersGraph`](docs/sdks/users/README.md#listusersgraph) - List users (paginated with graph data)
- [`usersRemoveUserDisplayPicture`](docs/sdks/users/README.md#removeuserdisplaypicture) - Remove display picture
- [`usersResendUserInvite`](docs/sdks/users/README.md#resenduserinvite) - Resend user invite
- [`usersUnblockUser`](docs/sdks/users/README.md#unblockuser) - Unblock a user in organization
- [`usersUpdateUser`](docs/sdks/users/README.md#updateuser) - Update user
- [`usersUploadUserDisplayPicture`](docs/sdks/users/README.md#uploaduserdisplaypicture) - Upload display picture
- ~~[`toolsetConfigurationSaveToolsetConfig`](docs/sdks/toolsetconfiguration/README.md#savetoolsetconfig)~~ - Save toolset configuration :warning: **Deprecated**

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
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.conversations.streamChat({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    query: "What are the key findings from our Q4 financial report?",
    recordIds: [
      "507f1f77bcf86cd799439011",
      "507f1f77bcf86cd799439012",
    ],
    modelKey: "gpt-4-turbo",
    modelName: "GPT-4 Turbo",
    chatMode: "balanced",
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
import { openAsBlob } from "node:fs";
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await pipeshub.users.uploadUserDisplayPicture({
    file: await openAsBlob("example.file"),
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
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.userAccount.initAuth({
    email: "user@example.com",
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
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
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
  const result = await pipeshub.userAccount.initAuth({
    email: "user@example.com",
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
import { Pipeshub } from "pipeshub";
import * as errors from "pipeshub/models/errors";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  try {
    const result = await pipeshub.userAccount.initAuth({
      email: "user@example.com",
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
      if (error instanceof errors.AuthError) {
        console.log(error.data$.error); // string
        console.log(error.data$.message); // string
        console.log(error.data$.code); // string
        console.log(error.data$.statusCode); // number
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`PipeshubError`](./src/models/errors/pipeshub-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`PipeshubError`](./src/models/errors/pipeshub-error.ts)**:
* [`AuthError`](./src/models/errors/auth-error.ts): Authentication error response with details for debugging and user feedback.<br><br> <b>Common Error Codes:</b><br> <ul> <li><code>INVALID_CREDENTIALS</code> - Wrong password or OTP</li> <li><code>ACCOUNT_BLOCKED</code> - Account locked after 5 failed attempts</li> <li><code>SESSION_EXPIRED</code> - Session token has expired</li> <li><code>OTP_EXPIRED</code> - OTP code has expired (10 min validity)</li> <li><code>USER_NOT_FOUND</code> - Email not registered</li> <li><code>INVALID_TOKEN</code> - JWT token is invalid or malformed</li> <li><code>METHOD_NOT_ALLOWED</code> - Auth method not enabled for org</li> </ul>. Applicable to 7 of 211 methods.*
* [`OAuthErrorResponse`](./src/models/errors/o-auth-error-response.ts): OAuth 2.0 Error Response (RFC 6749 Section 5.2). Standard error format for OAuth endpoints. Applicable to 5 of 211 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

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
import { Pipeshub } from "pipeshub";
import { ProxyAgent } from "undici";
import { HTTPClient } from "pipeshub/lib/http";

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
import { Pipeshub } from "pipeshub";

const sdk = new Pipeshub({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PIPESHUB_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

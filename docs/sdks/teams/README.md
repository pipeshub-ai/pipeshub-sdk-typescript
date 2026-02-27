# Teams

## Overview

Team management operations

### Available Operations

* [createTeam](#createteam) - Create a team
* [listTeams](#listteams) - List teams
* [getTeamById](#getteambyid) - Get team by ID
* [updateTeam](#updateteam) - Update team
* [deleteTeam](#deleteteam) - Delete team
* [getUserTeams](#getuserteams) - Get current user's teams

## createTeam

Create a new team within the organization for project collaboration and resource sharing.<br><br>
<b>Overview:</b><br>
Teams are collaborative units that group users together for specific projects, departments, or initiatives. Teams have their own resources, permissions, and member hierarchies.<br><br>
<b>Team Structure:</b><br>
<ul>
<li><b>Owner:</b> Creator of the team, full administrative control</li>
<li><b>Admins:</b> Can manage members and settings</li>
<li><b>Members:</b> Standard access to team resources</li>
<li><b>Viewers:</b> Read-only access</li>
</ul>
<b>What Gets Created:</b><br>
<ul>
<li>Team entity with unique identifier</li>
<li>Owner role automatically assigned to creator</li>
<li>Team workspace for shared resources</li>
<li>Default permission settings</li>
</ul>
<b>Initial Members:</b><br>
You can optionally add initial members with their roles during creation using the <code>userRoles</code> array.<br><br>
<b>Validation:</b><br>
<ul>
<li>Team name is required and must be unique in the org</li>
<li>Name: 1-100 characters</li>
<li>Description: Optional, max 500 characters</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTeam" method="post" path="/teams" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.teams.createTeam({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    name: "Engineering Team",
    description: "Core engineering team for product development",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { teamsCreateTeam } from "pipeshub/funcs/teams-create-team.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await teamsCreateTeam(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    name: "Engineering Team",
    description: "Core engineering team for product development",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsCreateTeam failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTeamRequest](../../models/operations/create-team-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateTeamSecurity](../../models/operations/create-team-security.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTeamResponse](../../models/operations/create-team-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## listTeams

Retrieve all teams in the organization with optional search and pagination.<br><br>
<b>Overview:</b><br>
This endpoint returns teams the authenticated user can access. Admins see all teams; regular users see teams they're members of.<br><br>
<b>Response Data per Team:</b><br>
<ul>
<li>Team metadata (name, description)</li>
<li>Member count</li>
<li>Owner information</li>
<li>Creation timestamp</li>
</ul>
<b>Search:</b><br>
The search parameter performs fuzzy matching on team names and descriptions.<br><br>
<b>Visibility Rules:</b><br>
<ul>
<li><b>Admins:</b> See all organization teams</li>
<li><b>Users:</b> See only teams they belong to</li>
</ul>
<b>Sorting:</b><br>
Results are sorted by name alphabetically by default.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTeams" method="get" path="/teams" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.teams.listTeams({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    search: "engineering",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { teamsListTeams } from "pipeshub/funcs/teams-list-teams.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await teamsListTeams(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    search: "engineering",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsListTeams failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTeamsRequest](../../models/operations/list-teams-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListTeamsSecurity](../../models/operations/list-teams-security.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTeamsResponse](../../models/operations/list-teams-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getTeamById

Retrieve detailed information about a specific team.<br><br>
<b>Overview:</b><br>
Returns complete team details including metadata, member list with roles, and resource information. Use this for team profile pages and detailed views.<br><br>
<b>Response Includes:</b><br>
<ul>
<li>Team metadata (name, description, slug)</li>
<li>Owner and creator information</li>
<li>Member count and list (with pagination)</li>
<li>Team settings and permissions</li>
<li>Creation and modification timestamps</li>
</ul>
<b>Authorization:</b><br>
<ul>
<li>Team members can view their team</li>
<li>Organization admins can view any team</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTeamById" method="get" path="/teams/{teamId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.teams.getTeamById({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    teamId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { teamsGetTeamById } from "pipeshub/funcs/teams-get-team-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await teamsGetTeamById(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    teamId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsGetTeamById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTeamByIdRequest](../../models/operations/get-team-by-id-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTeamByIdSecurity](../../models/operations/get-team-by-id-security.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTeamByIdResponse](../../models/operations/get-team-by-id-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateTeam

Update team metadata and settings.<br><br>
<b>Overview:</b><br>
This endpoint allows updating team properties like name and description. Member management is handled through separate endpoints.<br><br>
<b>Updatable Fields:</b><br>
<ul>
<li><code>name</code>: Team display name (must remain unique)</li>
<li><code>description</code>: Team description</li>
</ul>
<b>Authorization:</b><br>
<ul>
<li><b>Team Owner:</b> Full update access</li>
<li><b>Team Admin:</b> Can update name and description</li>
<li><b>Org Admin:</b> Can update any team</li>
</ul>
<b>Side Effects:</b><br>
<ul>
<li>Team update event published</li>
<li>Team slug may be regenerated if name changes</li>
<li>Cached team data invalidated</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateTeam" method="put" path="/teams/{teamId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.teams.updateTeam({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    teamId: "507f1f77bcf86cd799439011",
    body: {
      name: "Core Engineering Team",
      description: "Primary engineering team for product development",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { teamsUpdateTeam } from "pipeshub/funcs/teams-update-team.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await teamsUpdateTeam(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    teamId: "507f1f77bcf86cd799439011",
    body: {
      name: "Core Engineering Team",
      description: "Primary engineering team for product development",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsUpdateTeam failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTeamRequest](../../models/operations/update-team-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateTeamSecurity](../../models/operations/update-team-security.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTeamResponse](../../models/operations/update-team-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteTeam

Delete a team from the organization.<br><br>
<b>Behavior:</b><br>
<ul>
<li>Team is soft-deleted (isDeleted: true)</li>
<li>Team members lose access to team resources</li>
<li>Team can be restored by admin if needed</li>
</ul>
<b>Restrictions:</b><br>
<ul>
<li>Only team owner or organization admin can delete</li>
<li>Team must have no active resources (configurable)</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteTeam" method="delete" path="/teams/{teamId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.teams.deleteTeam({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    teamId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { teamsDeleteTeam } from "pipeshub/funcs/teams-delete-team.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await teamsDeleteTeam(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {
    teamId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsDeleteTeam failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTeamRequest](../../models/operations/delete-team-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteTeamSecurity](../../models/operations/delete-team-security.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteTeamResponse](../../models/operations/delete-team-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getUserTeams

Retrieve all teams that the authenticated user is a member of.<br><br>
<b>Response Details:</b><br>
<ul>
<li>Includes teams where user is owner, admin, member, or viewer</li>
<li>Returns user's role in each team</li>
<li>Sorted by most recently accessed</li>
</ul>
<b>Use Cases:</b><br>
<ul>
<li>Populating team switcher in UI</li>
<li>Dashboard team list</li>
<li>Access control checks</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserTeams" method="get" path="/teams/user/teams" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await pipeshub.teams.getUserTeams({
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { teamsGetUserTeams } from "pipeshub/funcs/teams-get-user-teams.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await teamsGetUserTeams(pipeshub, {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("teamsGetUserTeams failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserTeamsRequest](../../models/operations/get-user-teams-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetUserTeamsSecurity](../../models/operations/get-user-teams-security.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserTeamsResponse](../../models/operations/get-user-teams-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
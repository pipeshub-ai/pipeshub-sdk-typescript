# UserGroups

## Overview

User group management operations

### Available Operations

* [createUserGroup](#createusergroup) - Create user group
* [getAllUserGroups](#getallusergroups) - Get all user groups
* [getUserGroupById](#getusergroupbyid) - Get user group by ID
* [updateUserGroup](#updateusergroup) - Update user group
* [deleteUserGroup](#deleteusergroup) - Delete user group
* [addUsersToGroup](#adduserstogroup) - Add users to group
* [removeUsersFromGroup](#removeusersfromgroup) - Remove users from group
* [getGroupsForUser](#getgroupsforuser) - Get groups for a user
* [~~getUsersInGroup~~](#getusersingroup) - Get users in group :warning: **Deprecated**
* [~~getGroupStatistics~~](#getgroupstatistics) - Get group statistics :warning: **Deprecated**

## createUserGroup

Create a new user group within the organization.<br><br>
<b>Group Types:</b><br>
<ul>
<li><code>admin</code> - Administrative group with elevated privileges</li>
<li><code>standard</code> - Regular user group</li>
<li><code>everyone</code> - Automatically includes all organization users</li>
<li><code>custom</code> - Custom group with manual membership management</li>
</ul>
<b>Validation Rules:</b><br>
<ul>
<li>Group name must be unique within the organization</li>
<li>Group name is required and cannot be empty</li>
<li>Type must be one of the allowed values</li>
</ul>
<b>Side Effects:</b><br>
<ul>
<li>Creates a unique slug from the group name</li>
<li>Sets createdBy to the authenticated user</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUserGroup" method="post" path="/userGroups" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.createUserGroup({
    name: "Engineering Team",
    type: "standard",
    description: "All engineering department members",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsCreateUserGroup } from "pipeshub/funcs/user-groups-create-user-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsCreateUserGroup(pipeshub, {
    name: "Engineering Team",
    type: "standard",
    description: "All engineering department members",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsCreateUserGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUserGroupRequest](../../models/operations/create-user-group-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserGroup](../../models/user-group.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getAllUserGroups

Retrieve all user groups in the organization.<br><br>
<b>Response Details:</b><br>
<ul>
<li>Returns all groups including admin, standard, everyone, and custom types</li>
<li>Groups are returned with their member counts</li>
<li>Soft-deleted groups are excluded by default</li>
</ul>
<b>Use Cases:</b><br>
<ul>
<li>Populating group selection dropdowns</li>
<li>Managing group memberships</li>
<li>Access control configuration</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllUserGroups" method="get" path="/userGroups" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.getAllUserGroups();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsGetAllUserGroups } from "pipeshub/funcs/user-groups-get-all-user-groups.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsGetAllUserGroups(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsGetAllUserGroups failed:", res.error);
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

**Promise\<[operations.GetAllUserGroupsResponse](../../models/operations/get-all-user-groups-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getUserGroupById

Retrieve detailed information about a specific user group.<br><br>
<b>Response Includes:</b><br>
<ul>
<li>Group metadata (name, type, description)</li>
<li>Member count</li>
<li>Creation and modification timestamps</li>
<li>Creator information</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserGroupById" method="get" path="/userGroups/{groupId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.getUserGroupById({
    groupId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsGetUserGroupById } from "pipeshub/funcs/user-groups-get-user-group-by-id.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsGetUserGroupById(pipeshub, {
    groupId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsGetUserGroupById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserGroupByIdRequest](../../models/operations/get-user-group-by-id-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserGroup](../../models/user-group.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateUserGroup

Update an existing user group's information.<br><br>
<b>Updatable Fields:</b><br>
<ul>
<li><code>name</code> - Display name (must remain unique)</li>
<li><code>description</code> - Group description</li>
</ul>
<b>Note:</b> Group type cannot be changed after creation.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUserGroup" method="put" path="/userGroups/{groupId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.updateUserGroup({
    groupId: "507f1f77bcf86cd799439011",
    body: {
      name: "Engineering Team - Updated",
      description: "All engineering and DevOps members",
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
import { userGroupsUpdateUserGroup } from "pipeshub/funcs/user-groups-update-user-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsUpdateUserGroup(pipeshub, {
    groupId: "507f1f77bcf86cd799439011",
    body: {
      name: "Engineering Team - Updated",
      description: "All engineering and DevOps members",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsUpdateUserGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUserGroupRequest](../../models/operations/update-user-group-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserGroup](../../models/user-group.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteUserGroup

Soft delete a user group.<br><br>
<b>Behavior:</b><br>
<ul>
<li>Group is marked as deleted (isDeleted: true)</li>
<li>Group members are not affected</li>
<li>Group can be restored by admin if needed</li>
</ul>
<b>Restrictions:</b><br>
<ul>
<li>Cannot delete system groups (admin, everyone)</li>
<li>Requires admin privileges</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteUserGroup" method="delete" path="/userGroups/{groupId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.deleteUserGroup({
    groupId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsDeleteUserGroup } from "pipeshub/funcs/user-groups-delete-user-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsDeleteUserGroup(pipeshub, {
    groupId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsDeleteUserGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteUserGroupRequest](../../models/operations/delete-user-group-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteUserGroupResponse](../../models/operations/delete-user-group-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## addUsersToGroup

Add one or more users to a user group.<br><br>
<b>Behavior:</b><br>
<ul>
<li>Users already in the group are silently skipped</li>
<li>Invalid user IDs are reported in the response</li>
<li>Operation is atomic - all valid users are added together</li>
</ul>
<b>Validation:</b><br>
<ul>
<li>All user IDs must be valid MongoDB ObjectIds</li>
<li>Users must belong to the same organization</li>
<li>Group must exist and not be deleted</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="addUsersToGroup" method="post" path="/userGroups/add-users" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.addUsersToGroup({
    groupId: "507f1f77bcf86cd799439011",
    userIds: [
      "507f1f77bcf86cd799439012",
      "507f1f77bcf86cd799439013",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsAddUsersToGroup } from "pipeshub/funcs/user-groups-add-users-to-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsAddUsersToGroup(pipeshub, {
    groupId: "507f1f77bcf86cd799439011",
    userIds: [
      "507f1f77bcf86cd799439012",
      "507f1f77bcf86cd799439013",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsAddUsersToGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddUsersToGroupRequest](../../models/operations/add-users-to-group-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddUsersToGroupResponse](../../models/operations/add-users-to-group-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## removeUsersFromGroup

Remove one or more users from a user group.<br><br>
<b>Behavior:</b><br>
<ul>
<li>Users not in the group are silently skipped</li>
<li>Operation is atomic - all specified users are removed together</li>
</ul>
<b>Restrictions:</b><br>
<ul>
<li>Cannot remove users from "everyone" group type</li>
<li>Cannot remove the last admin from admin group</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeUsersFromGroup" method="post" path="/userGroups/remove-users" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.removeUsersFromGroup({
    groupId: "507f1f77bcf86cd799439011",
    userIds: [
      "507f1f77bcf86cd799439012",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsRemoveUsersFromGroup } from "pipeshub/funcs/user-groups-remove-users-from-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsRemoveUsersFromGroup(pipeshub, {
    groupId: "507f1f77bcf86cd799439011",
    userIds: [
      "507f1f77bcf86cd799439012",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsRemoveUsersFromGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveUsersFromGroupRequest](../../models/operations/remove-users-from-group-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveUsersFromGroupResponse](../../models/operations/remove-users-from-group-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## getGroupsForUser

Retrieve all user groups that a specific user belongs to.<br><br>
<b>Response Details:</b><br>
<ul>
<li>Includes all group types (admin, standard, everyone, custom)</li>
<li>Returns group metadata for each membership</li>
</ul>
<b>Use Cases:</b><br>
<ul>
<li>Displaying user's group memberships in profile</li>
<li>Access control checks</li>
<li>Permission inheritance calculations</li>
</ul>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGroupsForUser" method="get" path="/userGroups/users/{userId}" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.getGroupsForUser({
    userId: "507f1f77bcf86cd799439012",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsGetGroupsForUser } from "pipeshub/funcs/user-groups-get-groups-for-user.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsGetGroupsForUser(pipeshub, {
    userId: "507f1f77bcf86cd799439012",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsGetGroupsForUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGroupsForUserRequest](../../models/operations/get-groups-for-user-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGroupsForUserResponse](../../models/operations/get-groups-for-user-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## ~~getUsersInGroup~~

<b>⚠️ Deprecated:</b> This endpoint is deprecated and will be removed in a future release.<br><br>
Retrieve all users that belong to a specific user group.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUsersInGroup" method="get" path="/userGroups/{groupId}/users" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.getUsersInGroup({
    groupId: "507f1f77bcf86cd799439011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsGetUsersInGroup } from "pipeshub/funcs/user-groups-get-users-in-group.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsGetUsersInGroup(pipeshub, {
    groupId: "507f1f77bcf86cd799439011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsGetUsersInGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUsersInGroupRequest](../../models/operations/get-users-in-group-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUsersInGroupResponse](../../models/operations/get-users-in-group-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |

## ~~getGroupStatistics~~

<b>⚠️ Deprecated:</b> This endpoint is deprecated and will be removed in a future release.<br><br>
Retrieve statistics for all user groups including member counts.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGroupStatistics" method="get" path="/userGroups/stats/list" -->
```typescript
import { Pipeshub } from "pipeshub";

const pipeshub = new Pipeshub({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await pipeshub.userGroups.getGroupStatistics();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PipeshubCore } from "pipeshub/core.js";
import { userGroupsGetGroupStatistics } from "pipeshub/funcs/user-groups-get-group-statistics.js";

// Use `PipeshubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pipeshub = new PipeshubCore({
  security: {
    bearerAuth: process.env["PIPESHUB_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await userGroupsGetGroupStatistics(pipeshub);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGroupsGetGroupStatistics failed:", res.error);
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

**Promise\<[operations.GetGroupStatisticsResponse](../../models/operations/get-group-statistics-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.PipeshubDefaultError | 4XX, 5XX                    | \*/\*                       |
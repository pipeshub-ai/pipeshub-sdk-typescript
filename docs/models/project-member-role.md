# ProjectMemberRole

`viewer` can read the project and its `project`-visible
conversations. `editor` can additionally update project
metadata, instructions, scope, tools, and files. Only the owner
can manage members or change `visibility`/`chatSharing`.


## Example Usage

```typescript
import { ProjectMemberRole } from "@pipeshub-ai/sdk/models";

let value: ProjectMemberRole = "editor";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"viewer" | "editor" | Unrecognized<string>
```
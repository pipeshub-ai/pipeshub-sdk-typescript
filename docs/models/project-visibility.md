# ProjectVisibility

`org` makes the project (and, per `chatSharing`, its
`project`-visible conversations) readable by every member of the
organization, without adding them to `members[]`. Also grants
the organization's synthetic all-members team `READER` access
on the linked hidden Collection.


## Example Usage

```typescript
import { ProjectVisibility } from "@pipeshub-ai/sdk/models";

let value: ProjectVisibility = "private";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "org" | Unrecognized<string>
```
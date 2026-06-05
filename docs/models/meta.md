# Meta

## Example Usage

```typescript
import { Meta } from "@pipeshub-ai/sdk/models";

let value: Meta = {
  requestId: "<id>",
  timestamp: new Date("2025-11-09T01:36:19.299Z"),
  duration: 860788,
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Server-side request identifier. Read from the `X-Request-ID`<br/>header when supplied, otherwise auto-generated, so this field<br/>is always present.<br/> |
| `timestamp`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `duration`                                                                                                                                     | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Server-side processing time in milliseconds.                                                                                                   |
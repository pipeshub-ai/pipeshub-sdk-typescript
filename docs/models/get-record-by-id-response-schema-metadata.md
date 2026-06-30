# GetRecordByIdResponseSchemaMetadata

## Example Usage

```typescript
import { GetRecordByIdResponseSchemaMetadata } from "@pipeshub-ai/sdk/models";

let value: GetRecordByIdResponseSchemaMetadata = {
  languages: [],
  topics: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  subcategories1: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  subcategories2: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  subcategories3: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  departments: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  categories: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `languages`                                                                                            | [models.Language](../models/language.md)[]                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `topics`                                                                                               | [models.Topic](../models/topic.md)[]                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `subcategories1`                                                                                       | [models.Subcategories1](../models/subcategories1.md)[]                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `subcategories2`                                                                                       | [models.Subcategories2](../models/subcategories2.md)[]                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `subcategories3`                                                                                       | [models.Subcategories3](../models/subcategories3.md)[]                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `departments`                                                                                          | [models.Department](../models/department.md)[]                                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `categories`                                                                                           | [models.GetRecordByIdResponseSchemaCategory](../models/get-record-by-id-response-schema-category.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
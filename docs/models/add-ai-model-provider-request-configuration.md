# AddAIModelProviderRequestConfiguration

Provider-specific configuration

## Example Usage

```typescript
import { AddAIModelProviderRequestConfiguration } from "@pipeshub-ai/sdk/models";

let value: AddAIModelProviderRequestConfiguration = {
  model: "gpt-4",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `model`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Model name/identifier                                                  | gpt-4                                                                  |
| `apiKey`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | API key for the provider                                               |                                                                        |
| `endpoint`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Custom endpoint URL (for Azure, self-hosted)                           |                                                                        |
| `organizationId`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | Organization ID (OpenAI)                                               |                                                                        |
| `deploymentName`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | Deployment name (Azure OpenAI)                                         |                                                                        |
| `awsAccessKeyId`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | AWS access key (Bedrock). Optional - omit to use IAM role credentials. |                                                                        |
| `awsAccessSecretKey`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | AWS secret key (Bedrock). Optional - omit to use IAM role credentials. |                                                                        |
| `region`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | AWS region (Bedrock)                                                   |                                                                        |
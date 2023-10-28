import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  nominationsApi: {
    from: {
      relativePath: "./openapi.yaml",
      source: "file",
    },
    outputDir: "./src/query-components",
    to: async (context) => {
      const filenamePrefix = "nominationsApi";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});

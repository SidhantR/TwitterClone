
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",     // get the schema from here 
  documents: "**/*.{tsx,ts}",                  // watch all typescript file in current directory
  generates: {
    './src/gql/': {
      preset: 'client',                        // generate all the typescript in the frontend in this folder
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;

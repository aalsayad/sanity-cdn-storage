import { type SchemaTypeDefinition } from "sanity";

import { assetsType } from "./assetsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [assetsType],
};

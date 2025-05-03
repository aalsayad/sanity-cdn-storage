// sanity/structure.ts

import { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list().title("Content").items(S.documentTypeListItems());

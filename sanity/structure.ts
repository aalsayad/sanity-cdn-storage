// sanity/structure.ts
import { StructureResolver } from "sanity/structure"; // Updated import

export const structure: StructureResolver = (S) =>
  S.list().title("Content").items(S.documentTypeListItems());

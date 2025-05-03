import { defineField, defineType } from "sanity";

export const assetsType = defineType({
  name: "assets",
  title: "Assets",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "file", title: "File", type: "file" }),
  ],
  preview: {
    select: {
      title: "title",
      media: "file",
    },
  },
});

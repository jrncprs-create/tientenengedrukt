import { defineField, defineType } from "sanity";

export const cvItemType = defineType({
  name: "cvItem",
  title: "CV item",
  type: "document",
  fields: [
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "text", title: "Text", type: "text" }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" }),
  ],
});

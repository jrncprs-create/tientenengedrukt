import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({ name: "profileTitle", title: "Profile title", type: "string" }),
    defineField({ name: "profileText", title: "Profile text", type: "text" }),
    defineField({ name: "methodTitle", title: "Method title", type: "string" }),
    defineField({
      name: "methodItems",
      title: "Method items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contexts",
      title: "Contexts",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});

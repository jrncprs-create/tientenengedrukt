import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "heroKicker", title: "Hero kicker", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "text" }),
    defineField({ name: "heroNote", title: "Hero note", type: "text" }),
    defineField({
      name: "statementKicker",
      title: "Statement kicker",
      type: "string",
    }),
    defineField({
      name: "statementTitle",
      title: "Statement title",
      type: "text",
    }),
    defineField({
      name: "statementIntro",
      title: "Statement intro",
      type: "text",
    }),
    defineField({ name: "statementBody", title: "Statement body", type: "text" }),
    defineField({
      name: "contactHeading",
      title: "Contact heading",
      type: "string",
    }),
    defineField({ name: "contactText", title: "Contact text", type: "text" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "instagram", title: "Instagram", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
  ],
});

import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site titel",
      type: "string",
      description: "Algemene naam van de site.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO titel",
      type: "string",
      description: "Standaard titel voor zoekmachines en browser tabs.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO omschrijving",
      type: "text",
      description: "Korte standaard omschrijving voor zoekmachines.",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Locatie",
      type: "string",
    }),
  ],
});

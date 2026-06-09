import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
    }),
    defineField({
      name: "coverImage",
      title: "Hoofdbeeld / cover",
      type: "image",
      description:
        "Dit beeld wordt gebruikt in overzichten en bovenaan de projectpagina.",
      options: { hotspot: true },
    }),
    defineField({
      name: "galleryImages",
      title: "Projectbeelden / gallery",
      type: "array",
      description:
        "Deze beelden verschijnen op de projectpagina. Sleep om de volgorde te wijzigen.",
      of: [
        defineField({
          name: "galleryImage",
          title: "Projectbeeld",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Beeld",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "caption",
              title: "Bijschrift",
              type: "string",
            }),
            defineField({
              name: "alt",
              title: "Alt-tekst",
              type: "string",
              description:
                "Korte beschrijving voor toegankelijkheid en zoekmachines.",
            }),
          ],
          preview: {
            select: {
              title: "caption",
              subtitle: "alt",
              media: "image",
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || "Projectbeeld",
                subtitle,
                media,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "heroKicker",
      title: "Hero label",
      type: "string",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero titel",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero intro",
      type: "text",
    }),
    defineField({
      name: "heroNote",
      title: "Hero toelichting",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero beeld",
      type: "image",
      description:
        "Optioneel. Als dit leeg blijft, gebruikt de site de huidige abstracte hero-achtergrond.",
      options: { hotspot: true },
    }),
    defineField({
      name: "statementKicker",
      title: "Statement label",
      type: "string",
    }),
    defineField({
      name: "statementTitle",
      title: "Statement titel",
      type: "text",
    }),
    defineField({
      name: "statementIntro",
      title: "Statement intro",
      type: "text",
    }),
    defineField({
      name: "statementBody",
      title: "Statement tekst",
      type: "text",
    }),
    defineField({
      name: "workKicker",
      title: "Work label",
      type: "string",
    }),
    defineField({
      name: "workTitle",
      title: "Work titel",
      type: "text",
    }),
    defineField({
      name: "approachKicker",
      title: "Approach label",
      type: "string",
    }),
    defineField({
      name: "approachTitle",
      title: "Approach titel",
      type: "text",
    }),
    defineField({
      name: "approachIntro",
      title: "Approach tekst links",
      type: "text",
    }),
    defineField({
      name: "approachBody",
      title: "Approach tekst rechts",
      type: "text",
    }),
    defineField({
      name: "capabilitiesKicker",
      title: "Capabilities label",
      type: "string",
    }),
    defineField({
      name: "capabilitiesTitle",
      title: "Capabilities titel",
      type: "string",
    }),
    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cvKicker",
      title: "CV label",
      type: "string",
    }),
    defineField({
      name: "cvTitle",
      title: "CV titel",
      type: "string",
    }),
    defineField({
      name: "skillsLabel",
      title: "Skills label",
      type: "string",
    }),
    defineField({
      name: "skillsText",
      title: "Skills tekst",
      type: "text",
    }),
    defineField({
      name: "contactKicker",
      title: "Contact label",
      type: "string",
    }),
    defineField({
      name: "contactHeading",
      title: "Contact titel",
      type: "string",
    }),
    defineField({
      name: "contactText",
      title: "Contact tekst",
      type: "text",
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

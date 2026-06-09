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
      name: "heroMediaType",
      title: "Hero media type",
      type: "string",
      description:
        "Kies of de hero een afbeelding of MP4-video gebruikt. Als video leeg is, valt de site terug op het beeld of de abstracte achtergrond.",
      options: {
        list: [
          { title: "Afbeelding", value: "image" },
          { title: "Video (MP4)", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),
    defineField({
      name: "heroImage",
      title: "Hero beeld",
      type: "image",
      description:
        "Optioneel. Wordt gebruikt als afbeelding, als poster/fallback voor video, of als de video leeg is.",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroVideo",
      title: "Hero video (MP4)",
      type: "file",
      description:
        "Optioneel. Upload een MP4 zonder geluid of met geluid uit; de site speelt deze muted, loopend en inline af.",
      options: {
        accept: "video/mp4",
      },
    }),
    defineField({
      name: "heroVideoPoster",
      title: "Hero video poster",
      type: "image",
      description:
        "Optioneel stilstaand beeld voor voordat de video geladen is. Als dit leeg is, gebruikt de site Hero beeld.",
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
  ],
});

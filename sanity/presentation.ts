import { defineLocations } from "sanity/presentation";

export const previewUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tientenengedrukt.vercel.app";

export const presentationLocations = {
  homePage: defineLocations({
    select: { title: "heroTitle" },
    resolve: (document) => ({
      locations: [
        {
          title: document?.title || "Home page",
          href: "/",
        },
      ],
    }),
  }),
  siteSettings: defineLocations({
    select: { title: "title" },
    resolve: (document) => ({
      locations: [
        {
          title: document?.title || "Site settings",
          href: "/",
        },
      ],
    }),
  }),
  aboutPage: defineLocations({
    select: { title: "title" },
    resolve: (document) => ({
      locations: [
        {
          title: document?.title || "About page",
          href: "/about",
        },
      ],
    }),
  }),
  project: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (document) => {
      if (!document?.slug) {
        return {
          message: "Publish een slug om de projectpagina te previewen.",
          tone: "caution",
        };
      }

      return {
        locations: [
          {
            title: document.title || "Project",
            href: `/work/${document.slug}`,
          },
        ],
      };
    },
  }),
  cvItem: defineLocations({
    select: { title: "title" },
    resolve: (document) => ({
      locations: [
        {
          title: document?.title || "CV item",
          href: "/#cv",
        },
      ],
    }),
  }),
};

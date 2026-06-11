import { defineLocations } from "sanity/presentation";
import { projectSlugFromTitle } from "@/lib/projectSlug";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tientenengedrukt.vercel.app";

export const previewUrl = `${siteUrl}/api/draft-mode/enable?redirect=/`;
export const draftModeUrl = `${siteUrl}/api/draft-mode/enable`;

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
    select: { title: "title" },
    resolve: (document) => {
      if (!document?.title) {
        return {
          message: "Voeg een titel toe om de projectpagina te previewen.",
          tone: "caution",
        };
      }

      const slug = projectSlugFromTitle(document.title);

      return {
        locations: [
          {
            title: document.title || "Project",
            href: `/work/${slug}`,
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

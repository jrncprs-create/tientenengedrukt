import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(sortOrder asc) {
    _id,
    title,
    "slug": slug.current,
    year,
    category,
    summary,
    theme,
    coverImage,
    galleryImages,
    sortOrder,
    featured
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    _id,
    title,
    heroKicker,
    heroTitle,
    heroSubtitle,
    heroNote,
    statementKicker,
    statementTitle,
    statementIntro,
    statementBody,
    contactHeading,
    contactText,
    email,
    instagram,
    location
  }
`;

export const cvItemsQuery = groq`
  *[_type == "cvItem"] | order(sortOrder asc) {
    _id,
    year,
    title,
    text,
    sortOrder
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    _id,
    title,
    intro,
    body,
    profileTitle,
    profileText,
    methodTitle,
    methodItems,
    contexts
  }
`;

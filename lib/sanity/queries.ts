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
    seoTitle,
    seoDescription,
    email,
    instagram,
    location
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    _id,
    heroKicker,
    heroTitle,
    heroSubtitle,
    heroNote,
    heroMediaType,
    heroImage,
    "heroVideo": heroVideo.asset->url,
    heroVideoPoster,
    statementKicker,
    statementTitle,
    statementIntro,
    statementBody,
    workKicker,
    workTitle,
    approachKicker,
    approachTitle,
    approachIntro,
    approachBody,
    capabilitiesKicker,
    capabilitiesTitle,
    capabilities,
    cvKicker,
    cvTitle,
    skillsLabel,
    skillsText,
    contactKicker,
    contactHeading,
    contactText
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

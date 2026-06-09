export type SiteSettings = {
  title: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroNote: string;
  statementKicker: string;
  statementTitle: string;
  statementIntro: string;
  statementBody: string;
  contactHeading: string;
  contactText: string;
  email: string;
  instagram: string;
  location: string;
};

export type CvItem = {
  year: string;
  title: string;
  text: string;
  sortOrder?: number;
};

export type AboutPageContent = {
  title: string;
  intro: string;
  body: string;
  profileTitle: string;
  profileText: string;
  methodTitle: string;
  methodItems: {
    number: string;
    text: string;
  }[];
  contexts: string[];
};

export const fallbackCapabilities = [
  "Art direction",
  "Campaign visuals",
  "Event identities",
  "Spatial styling",
  "Production design",
  "Graphic systems",
  "Image editing",
  "On-site visual support",
];

export const fallbackSiteSettings: SiteSettings = {
  title: "Joep Cuypers",
  heroKicker: "Portfolio 2026",
  heroTitle: "JOEP CUYPERS",
  heroSubtitle:
    "Art direction, visual concepts and production for events, campaigns and branded spaces.",
  heroNote:
    "From first visual direction to on-site production, Joep works where graphic design, spatial rhythm and cultural events meet.",
  statementKicker: "Practice",
  statementTitle: "Designing visual systems for temporary worlds.",
  statementIntro:
    "Joep Cuypers develops visual identities, campaign images and production-ready concepts for events, artists, agencies and cultural spaces.",
  statementBody:
    "His work moves between graphic design, styling, set logic and hands-on making. The result is visual direction that can live as a poster, a stage cue, a social asset, a spatial detail or a full event language.",
  contactHeading: "Let’s make the image work.",
  contactText:
    "For collaborations, campaign visuals, event identities or production-based art direction.",
  email: "hello@joepcuypers.nl",
  instagram: "@joepcuypers",
  location: "Amsterdam / available for projects",
};

export const fallbackCvItems: CvItem[] = [
  {
    year: "2025",
    title: "Freelance art direction and visual production",
    text: "Visual concepts, campaign roll-outs and production support for cultural and commercial projects.",
  },
  {
    year: "2024",
    title: "Campaign and event identity projects",
    text: "Graphic systems, artist assets and adaptable visual directions for temporary cultural spaces.",
  },
  {
    year: "2023",
    title: "Spatial and graphic systems for cultural events",
    text: "Identity work translated into signage, stage moments, screens, print and on-site details.",
  },
  {
    year: "2022",
    title: "Artist visuals and production support",
    text: "Image direction, layout, styling references and practical production for music-led projects.",
  },
  {
    year: "2021",
    title: "Graphic design, layout and image direction",
    text: "Editorial tests, printed matter, visual research and portfolio-based design work.",
  },
];

export const fallbackAboutPage: AboutPageContent = {
  title: "About Joep",
  intro:
    "Joep Cuypers is a graphic designer and art director working across visual identity, events, campaigns and production.",
  body:
    "His practice is shaped by music culture, printed matter, temporary architecture and the practical reality of making things happen. The work often begins as a graphic idea and ends as something physical, social or spatial.",
  profileTitle: "Graphic thinking for live contexts.",
  profileText:
    "Joep works where image, typography, rhythm and production meet. His portfolio moves between campaign work, visual systems, styling, stage-related identity and event-based communication.",
  methodTitle: "Clear mood, strong layout, practical execution.",
  methodItems: [
    {
      number: "01",
      text: "Read the context: artist, space, audience, timing and constraints.",
    },
    {
      number: "02",
      text: "Build a visual direction that can stretch across screen, print, object and space.",
    },
    {
      number: "03",
      text: "Keep the design sharp enough to feel authored and practical enough to be produced.",
    },
  ],
  contexts: [
    "Music campaigns",
    "Club nights",
    "Cultural festivals",
    "Brand activations",
    "Artist visuals",
    "Independent productions",
  ],
};

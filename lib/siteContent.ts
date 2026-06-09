import {
  fallbackAboutPage,
  fallbackCvItems,
  fallbackHomePage,
  fallbackSiteSettings,
  type AboutPageContent,
  type CvItem,
  type HomePageContent,
  type SiteSettings,
} from "@/data/siteContent";
import {
  getAboutPage,
  getCvItems,
  getHomePage,
  getSiteSettings,
} from "@/lib/sanity/fetch";
import { urlForImage } from "@/sanity/lib/image";

type SanitySiteSettings = Partial<SiteSettings> | null;
type SanityHomePage =
  | (Partial<Omit<HomePageContent, "heroImage">> & { heroImage?: unknown })
  | null;
type SanityCvItem = Partial<CvItem> | null;
type SanityAboutPage = Partial<AboutPageContent> | null;

function withFallback<T extends Record<string, unknown>>(
  data: Partial<T> | null | undefined,
  fallback: T,
): T {
  if (!data || typeof data !== "object") {
    return fallback;
  }

  return Object.fromEntries(
    Object.entries(fallback).map(([key, fallbackValue]) => {
      const value = data[key as keyof T];
      return [key, hasContent(value) ? value : fallbackValue];
    }),
  ) as T;
}

function hasContent(value: unknown) {
  if (Array.isArray(value)) return value.length > 0;
  return value !== null && value !== undefined && value !== "";
}

function resolveImage(source: unknown) {
  if (!source) return null;

  try {
    return urlForImage(source).url();
  } catch {
    return null;
  }
}

export async function getSiteSettingsWithFallback(): Promise<SiteSettings> {
  try {
    const settings = (await getSiteSettings()) as SanitySiteSettings;
    return withFallback(settings, fallbackSiteSettings);
  } catch {
    return fallbackSiteSettings;
  }
}

export async function getHomePageWithFallback(): Promise<HomePageContent> {
  try {
    const [homePage, siteSettings] = (await Promise.all([
      getHomePage(),
      getSiteSettings(),
    ])) as [SanityHomePage, SanitySiteSettings];

    const settingsFallback = withFallback(siteSettings, fallbackSiteSettings);
    const homeFallback: HomePageContent = {
      ...fallbackHomePage,
      heroKicker: settingsFallback.heroKicker,
      heroTitle: settingsFallback.heroTitle,
      heroSubtitle: settingsFallback.heroSubtitle,
      heroNote: settingsFallback.heroNote,
      statementKicker: settingsFallback.statementKicker,
      statementTitle: settingsFallback.statementTitle,
      statementIntro: settingsFallback.statementIntro,
      statementBody: settingsFallback.statementBody,
      contactHeading: settingsFallback.contactHeading,
      contactText: settingsFallback.contactText,
      email: settingsFallback.email,
      instagram: settingsFallback.instagram,
      location: settingsFallback.location,
    };

    const homePageText = homePage
      ? (Object.fromEntries(
          Object.entries(homePage).filter(([key]) => key !== "heroImage"),
        ) as Partial<HomePageContent>)
      : null;

    return {
      ...withFallback(homePageText, homeFallback),
      heroImage: resolveImage(homePage?.heroImage) ?? homeFallback.heroImage,
    };
  } catch {
    return fallbackHomePage;
  }
}

export async function getCvItemsWithFallback(): Promise<CvItem[]> {
  try {
    const items = (await getCvItems()) as SanityCvItem[];

    if (!Array.isArray(items) || items.length === 0) {
      return fallbackCvItems;
    }

    const mappedItems = items
      .filter((item): item is Partial<CvItem> => Boolean(item))
      .map((item) => ({
        year: item.year ?? "",
        title: item.title ?? "",
        text: item.text ?? "",
        sortOrder: item.sortOrder,
      }))
      .filter((item) => item.year || item.title || item.text);

    return mappedItems.length > 0 ? mappedItems : fallbackCvItems;
  } catch {
    return fallbackCvItems;
  }
}

export async function getAboutPageWithFallback(): Promise<AboutPageContent> {
  try {
    const about = (await getAboutPage()) as SanityAboutPage;

    if (!about || typeof about !== "object") {
      return fallbackAboutPage;
    }

    return {
      title: about.title ?? fallbackAboutPage.title,
      intro: about.intro ?? fallbackAboutPage.intro,
      body: about.body ?? fallbackAboutPage.body,
      profileTitle: about.profileTitle ?? fallbackAboutPage.profileTitle,
      profileText: about.profileText ?? fallbackAboutPage.profileText,
      methodTitle: about.methodTitle ?? fallbackAboutPage.methodTitle,
      methodItems: hasContent(about.methodItems)
        ? about.methodItems!
        : fallbackAboutPage.methodItems,
      contexts: hasContent(about.contexts)
        ? about.contexts!
        : fallbackAboutPage.contexts,
    };
  } catch {
    return fallbackAboutPage;
  }
}

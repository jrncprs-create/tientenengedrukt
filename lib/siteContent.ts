import {
  fallbackAboutPage,
  fallbackCvItems,
  fallbackSiteSettings,
  type AboutPageContent,
  type CvItem,
  type SiteSettings,
} from "@/data/siteContent";
import { getAboutPage, getCvItems, getSiteSettings } from "@/lib/sanity/fetch";

type SanitySiteSettings = Partial<SiteSettings> | null;
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

export async function getSiteSettingsWithFallback(): Promise<SiteSettings> {
  try {
    const settings = (await getSiteSettings()) as SanitySiteSettings;
    return withFallback(settings, fallbackSiteSettings);
  } catch {
    return fallbackSiteSettings;
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

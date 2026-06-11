import { sanityClient } from "@/sanity/lib/client";
import {
  aboutPageQuery,
  cvItemsQuery,
  homePageQuery,
  projectsQuery,
  siteSettingsQuery,
} from "./queries";

const options = { next: { revalidate: 10 } };

export async function getSanityProjects() {
  try {
    return await sanityClient.fetch(projectsQuery, {}, options);
  } catch {
    return [];
  }
}

export async function getSiteSettings() {
  try {
    return await sanityClient.fetch(siteSettingsQuery, {}, options);
  } catch {
    return null;
  }
}

export async function getHomePage() {
  try {
    return await sanityClient.fetch(homePageQuery, {}, options);
  } catch {
    return null;
  }
}

export async function getCvItems() {
  try {
    return await sanityClient.fetch(cvItemsQuery, {}, options);
  } catch {
    return [];
  }
}

export async function getAboutPage() {
  try {
    return await sanityClient.fetch(aboutPageQuery, {}, options);
  } catch {
    return null;
  }
}

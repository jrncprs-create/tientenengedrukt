import { sanityClient } from "@/sanity/lib/client";
import {
  aboutPageQuery,
  cvItemsQuery,
  homePageQuery,
  projectsQuery,
  siteSettingsQuery,
} from "./queries";

export async function getSanityProjects() {
  try {
    return await sanityClient.fetch(projectsQuery);
  } catch {
    return [];
  }
}

export async function getSiteSettings() {
  try {
    return await sanityClient.fetch(siteSettingsQuery);
  } catch {
    return null;
  }
}

export async function getHomePage() {
  try {
    return await sanityClient.fetch(homePageQuery);
  } catch {
    return null;
  }
}

export async function getCvItems() {
  try {
    return await sanityClient.fetch(cvItemsQuery);
  } catch {
    return [];
  }
}

export async function getAboutPage() {
  try {
    return await sanityClient.fetch(aboutPageQuery);
  } catch {
    return null;
  }
}

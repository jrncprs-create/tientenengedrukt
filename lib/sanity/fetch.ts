import { draftMode } from "next/headers";
import { sanityClient, sanityPreviewClient } from "@/sanity/lib/client";
import {
  aboutPageQuery,
  cvItemsQuery,
  homePageQuery,
  projectsQuery,
  siteSettingsQuery,
} from "./queries";

const liveOptions = { next: { revalidate: 10 } };

async function getClient() {
  const draft = await draftMode();
  return draft.isEnabled ? sanityPreviewClient : sanityClient;
}

export async function getSanityProjects() {
  try {
    const client = await getClient();
    return await client.fetch(projectsQuery, {}, liveOptions);
  } catch {
    return [];
  }
}

export async function getSiteSettings() {
  try {
    const client = await getClient();
    return await client.fetch(siteSettingsQuery, {}, liveOptions);
  } catch {
    return null;
  }
}

export async function getHomePage() {
  try {
    const client = await getClient();
    return await client.fetch(homePageQuery, {}, liveOptions);
  } catch {
    return null;
  }
}

export async function getCvItems() {
  try {
    const client = await getClient();
    return await client.fetch(cvItemsQuery, {}, liveOptions);
  } catch {
    return [];
  }
}

export async function getAboutPage() {
  try {
    const client = await getClient();
    return await client.fetch(aboutPageQuery, {}, liveOptions);
  } catch {
    return null;
  }
}

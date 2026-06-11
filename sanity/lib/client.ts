import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const sanityPreviewClient = sanityClient.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
  perspective: "drafts",
});

export function getSanityFetchClient(isDraftMode: boolean): SanityClient {
  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return sanityPreviewClient;
  }

  return sanityClient;
}

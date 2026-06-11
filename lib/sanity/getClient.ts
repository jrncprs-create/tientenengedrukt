import "server-only";
import { draftMode } from "next/headers";
import { getSanityFetchClient } from "@/sanity/lib/client";

export async function getSanityClientForRequest() {
  const { isEnabled } = await draftMode();
  return getSanityFetchClient(isEnabled);
}

import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/client";

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const hasReadToken = Boolean(process.env.SANITY_API_READ_TOKEN);

  let ok = false;
  let projectCount: number | null = null;
  let homeTitle: string | null = null;
  let error: string | null = null;

  try {
    const result = await sanityClient.fetch(`{
      "projectCount": count(*[_type == "project"]),
      "homeTitle": *[_type == "homePage"][0].heroTitle
    }`);

    ok = true;
    projectCount = result?.projectCount ?? null;
    homeTitle = result?.homeTitle ?? null;
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown Sanity error";
  }

  return NextResponse.json({
    ok,
    projectId,
    dataset,
    hasReadToken,
    projectCount,
    homeTitle,
    error,
  });
}

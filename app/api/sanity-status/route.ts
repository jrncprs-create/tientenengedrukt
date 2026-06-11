import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const hasReadToken = Boolean(process.env.SANITY_API_READ_TOKEN);

const statusQuery = `{
  "projectCount": count(*[_type == "project"]),
  "homePageCount": count(*[_type == "homePage"]),
  "siteSettingsCount": count(*[_type == "siteSettings"]),
  "aboutPageCount": count(*[_type == "aboutPage"]),
  "cvItemCount": count(*[_type == "cvItem"]),
  "homeTitle": *[_type == "homePage"][0].heroTitle,
  "projects": *[_type == "project"] | order(sortOrder asc) [0...10] {
    _id,
    _type,
    title,
    "slug": slug.current,
    sortOrder,
    _updatedAt,
    _createdAt
  },
  "documentTypes": array::unique(*[defined(_type)]._type) | order(@ asc) {
    "type": @,
    "count": count(*[_type == ^])
  }
}`;

export async function GET() {
  try {
    const result = await sanityClient.fetch<{
      projectCount: number;
      homePageCount: number;
      siteSettingsCount: number;
      aboutPageCount: number;
      cvItemCount: number;
      homeTitle: string | null;
      projects: Array<{
        _id: string;
        _type: string;
        title: string | null;
        slug: string | null;
        sortOrder: number | null;
        _updatedAt: string;
        _createdAt: string;
      }>;
      documentTypes: Array<{ type: string; count: number }>;
    }>(statusQuery);

    return NextResponse.json({
      ok: true,
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      hasReadToken,
      projectCount: result.projectCount,
      counts: {
        project: result.projectCount,
        homePage: result.homePageCount,
        siteSettings: result.siteSettingsCount,
        aboutPage: result.aboutPageCount,
        cvItem: result.cvItemCount,
      },
      homeTitle: result.homeTitle,
      projects: result.projects,
      documentTypes: result.documentTypes,
      error: null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        ok: false,
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        hasReadToken,
        projectCount: 0,
        counts: {
          project: 0,
          homePage: 0,
          siteSettings: 0,
          aboutPage: 0,
          cvItem: 0,
        },
        homeTitle: null,
        projects: [],
        documentTypes: [],
        error: message,
      },
      { status: 500 },
    );
  }
}

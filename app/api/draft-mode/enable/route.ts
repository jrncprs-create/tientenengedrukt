import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

function getPath(value: string | null) {
  if (!value || !value.startsWith("/")) return "/";
  return value;
}

export async function GET(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("sanity-preview-secret") ??
    request.nextUrl.searchParams.get("secret");
  const path = getPath(
    request.nextUrl.searchParams.get("sanity-preview-pathname") ??
      request.nextUrl.searchParams.get("redirect"),
  );

  if (process.env.SANITY_PREVIEW_SECRET) {
    if (secret !== process.env.SANITY_PREVIEW_SECRET) {
      return new Response("Invalid secret", { status: 401 });
    }
  }

  if (!process.env.SANITY_API_READ_TOKEN) {
    return new Response("Missing SANITY_API_READ_TOKEN", { status: 500 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(path);
}

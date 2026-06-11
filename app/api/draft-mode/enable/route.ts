import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

function getPath(value: string | null) {
  if (!value || !value.startsWith("/")) return "/";
  return value;
}

export async function GET(request: NextRequest) {
  const path = getPath(request.nextUrl.searchParams.get("redirect"));
  const draft = await draftMode();
  draft.enable();
  redirect(path);
}

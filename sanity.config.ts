import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationLocations, previewUrl } from "@/sanity/presentation";
import { schemaTypes } from "@/sanity/schemas";
import { structure } from "@/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "tientenengedrukt",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    presentationTool({
      title: "Preview",
      previewUrl: {
        initial: previewUrl,
      },
      resolve: {
        locations: presentationLocations,
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

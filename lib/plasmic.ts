import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

const projectId = process.env.PLASMIC_PROJECT_ID || "";
const projectToken = process.env.PLASMIC_PROJECT_TOKEN || "";

export const isPlasmicConfigured = Boolean(projectId && projectToken);

export const PLASMIC = initPlasmicLoader({
  projects: isPlasmicConfigured
    ? [
        {
          id: projectId,
          token: projectToken,
        },
      ]
    : [],
  preview: false,
});

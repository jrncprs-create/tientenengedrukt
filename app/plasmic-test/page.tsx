import { isPlasmicConfigured, PLASMIC } from "@/lib/plasmic";
import { PlasmicTestRenderer } from "./PlasmicTestRenderer";

const PLASMIC_TEST_PATH = "/plasmic-test";

export const revalidate = 60;

export default async function PlasmicTestPage() {
  if (!isPlasmicConfigured) {
    return <main>Plasmic test page not configured yet.</main>;
  }

  try {
    const plasmicData = await PLASMIC.maybeFetchComponentData(PLASMIC_TEST_PATH);
    const componentName = plasmicData?.entryCompMetas[0]?.name;

    if (!plasmicData || !componentName) {
      return <main>Plasmic test page not configured yet.</main>;
    }

    return (
      <PlasmicTestRenderer
        plasmicData={plasmicData}
        componentName={componentName}
      />
    );
  } catch {
    return <main>Plasmic test page not configured yet.</main>;
  }
}

import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { isPlasmicConfigured, PLASMIC } from "@/lib/plasmic";

const PLASMIC_TEST_PATH = "/plasmic-test";

export const revalidate = 60;

export default async function PlasmicTestPage() {
  if (!isPlasmicConfigured) {
    return <main>Plasmic test page not configured yet.</main>;
  }

  try {
    const plasmicData = await PLASMIC.maybeFetchComponentData(PLASMIC_TEST_PATH);
    const componentName = plasmicData?.entryCompMetas[0]?.displayName;

    if (!plasmicData || !componentName) {
      return <main>Plasmic test page not configured yet.</main>;
    }

    return (
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        <PlasmicComponent component={componentName} />
      </PlasmicRootProvider>
    );
  } catch {
    return <main>Plasmic test page not configured yet.</main>;
  }
}

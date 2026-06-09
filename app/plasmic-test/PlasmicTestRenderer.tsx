"use client";

import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/lib/plasmic";
import type { ComponentRenderData } from "@plasmicapp/loader-nextjs";

type PlasmicTestRendererProps = {
  plasmicData: ComponentRenderData;
  componentName: string;
};

export function PlasmicTestRenderer({
  plasmicData,
  componentName,
}: PlasmicTestRendererProps) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={componentName} />
    </PlasmicRootProvider>
  );
}

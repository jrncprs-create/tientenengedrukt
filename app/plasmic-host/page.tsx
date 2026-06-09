"use client";

import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { registerEditorialPlasmicHostComponents } from "@/components/plasmic/PlasmicEditorialBlocks";

registerEditorialPlasmicHostComponents();

export default function PlasmicHostPage() {
  return <PlasmicCanvasHost />;
}

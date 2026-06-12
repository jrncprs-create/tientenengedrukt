import type { HkuMediaGroup } from "@/lib/hkuMedia";
import { HkuProcessViewer } from "@/components/hku/HkuProcessViewer";

type HkuMediaSequenceProps = {
  group: HkuMediaGroup;
  projectTitle?: string;
};

/** Single-group wrapper around the shared process viewer. */
export function HkuMediaSequence({
  group,
  projectTitle = "HKU",
}: HkuMediaSequenceProps) {
  if (group.items.length === 0) return null;

  return (
    <HkuProcessViewer projectTitle={projectTitle} mediaGroups={[group]} />
  );
}

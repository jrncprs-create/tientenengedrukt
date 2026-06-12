import { ScrollReveal } from "@/components/ScrollReveal";

type HkuProcessBlockProps = {
  label: string;
  text: string;
};

export function HkuProcessBlock({ label, text }: HkuProcessBlockProps) {
  return (
    <ScrollReveal className="hku-process-block">
      <p className="hku-process-label">{label}</p>
      <p className="hku-process-text">{text}</p>
    </ScrollReveal>
  );
}

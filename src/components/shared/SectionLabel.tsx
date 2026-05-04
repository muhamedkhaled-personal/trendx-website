import clsx from "clsx";

type LabelVariant = "default" | "dark" | "hero";

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: LabelVariant;
  className?: string;
}

const variantClasses: Record<LabelVariant, string> = {
  default:
    "bg-white text-green border border-green-light/50",
  dark:
    "bg-white/10 text-white border border-white/10",
  hero:
    "bg-green/15 text-[#7DDBA3] border border-green/20",
};

export default function SectionLabel({
  children,
  variant = "default",
  className,
}: SectionLabelProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

import clsx from "clsx";
import SectionLabel from "./SectionLabel";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={clsx("text-center mb-12", className)}>
      {label && (
        <div className="mb-5">
          <SectionLabel variant={dark ? "dark" : "default"}>
            {label}
          </SectionLabel>
        </div>
      )}

      <h2
        className={clsx(
          "text-section-title font-bold",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "text-[17px] max-w-[620px] mx-auto leading-relaxed mt-4",
            dark ? "text-white/70" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

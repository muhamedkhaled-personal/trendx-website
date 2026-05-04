import Link from "next/link";

interface TopBarProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export default function TopBar({ text, linkText, linkHref }: TopBarProps) {
  return (
    <div className="fixed top-0 inset-x-0 z-[101] bg-ice h-10 max-md:h-auto flex items-center justify-center max-md:flex-wrap max-md:px-4 max-md:py-2">
      <p className="text-sm font-medium text-navy max-md:text-[13px] max-sm:text-xs text-center">
        {text}{" "}
        <Link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green font-bold hover:text-green-hover transition-colors"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}

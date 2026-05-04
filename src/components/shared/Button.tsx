import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "green" | "navy" | "white" | "outline" | "outline-white";
type ButtonSize = "default" | "sm";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: undefined;
}

interface ButtonAsLink
  extends ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  green:
    "bg-green text-white shadow-md hover:bg-green-hover hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
  navy:
    "bg-navy text-white hover:bg-navy-dark hover:-translate-y-0.5 active:translate-y-0",
  white:
    "bg-white text-navy shadow-md hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
  outline:
    "bg-transparent border-2 border-gray-200 text-gray-600 hover:border-green hover:text-green",
  "outline-white":
    "bg-transparent border-2 border-white/25 text-white hover:bg-white/10 hover:border-white/50",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-8 py-3.5 text-base",
  sm: "px-6 py-2.5 text-sm",
};

export default function Button({
  variant = "green",
  size = "default",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    "rounded-full font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const linkProps = rest as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonBaseProps
    >;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps
  >;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

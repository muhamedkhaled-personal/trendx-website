import {
  PenLine,
  BarChart3,
  Bookmark,
  Gift,
  Users,
  Target,
  ShieldCheck,
  Star,
  ClipboardList,
  Microscope,
  LineChart,
  TrendingUp,
  Megaphone,
  LayoutDashboard,
  Languages,
  BadgeCheck,
  EyeOff,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  PenLine,
  BarChart3,
  Bookmark,
  Gift,
  Users,
  Target,
  ShieldCheck,
  Star,
  ClipboardList,
  Microscope,
  LineChart,
  TrendingUp,
  Megaphone,
  LayoutDashboard,
  Languages,
  BadgeCheck,
  EyeOff,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...rest }: IconProps) {
  const Component = ICONS[name as IconName];
  if (!Component) return null;
  return <Component {...rest} />;
}

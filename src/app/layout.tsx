import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrendX",
  description: "TrendX — Saudi Community Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

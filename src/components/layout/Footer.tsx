import Image from "next/image";
import Link from "next/link";
import type { FooterColumn, SocialLink } from "@/types";
import Container from "@/components/shared/Container";

interface FooterProps {
  brandDescription: string;
  columns: FooterColumn[];
  copyright: string;
  locale: string;
  socialLinks?: SocialLink[];
}

export default function Footer({
  brandDescription,
  columns,
  copyright,
  locale,
  socialLinks = [],
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        {/* Main grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {/* Brand column */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="TrendX"
                width={120}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {brandDescription}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => {
                  const isCrossPage = link.href.startsWith("/");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(isCrossPage && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-gray-400 hover:text-white transition-colors text-[15px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">{copyright}</p>

          {socialLinks.length > 0 && (
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-green flex items-center justify-center transition-colors"
                >
                  <span
                    className="text-white text-sm"
                    dangerouslySetInnerHTML={{ __html: social.icon }}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}

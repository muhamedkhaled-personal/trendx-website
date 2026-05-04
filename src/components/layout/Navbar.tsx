"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { NavLink } from "@/types";
import Button from "@/components/shared/Button";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  links: NavLink[];
  signInText: string;
  signInHref: string;
  locale: string;
  langToggleLabel: string;
}

export default function Navbar({
  links,
  signInText,
  signInHref,
  locale,
  langToggleLabel,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Build language toggle href */
  const langHref =
    locale === "ar"
      ? pathname.replace(/^\/ar/, "/en")
      : pathname.replace(/^\/en/, "/ar");

  return (
    <>
      <nav
        className={clsx(
          "fixed top-10 inset-x-0 z-[100] bg-white/95 backdrop-blur-lg transition-shadow duration-300",
          scrolled && "shadow-navbar"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="TrendX"
              width={120}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[15px] text-gray-600 font-medium rounded-full hover:text-navy hover:bg-ice transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <Link
              href={langHref}
              className="bg-ice border border-gray-200 rounded-full px-4 py-2 text-[13px] font-semibold text-navy hover:bg-ice-dark transition-colors"
            >
              {langToggleLabel}
            </Link>

            {/* Sign in — desktop only */}
            <div className="hidden lg:block">
              <Button variant="navy" size="sm" href={signInHref}>
                {signInText}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-ice transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={clsx(
                  "block w-5 h-[2px] bg-navy transition-all duration-300 origin-center",
                  menuOpen && "rotate-45 translate-y-[7px]"
                )}
              />
              <span
                className={clsx(
                  "block w-5 h-[2px] bg-navy transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "block w-5 h-[2px] bg-navy transition-all duration-300 origin-center",
                  menuOpen && "-rotate-45 -translate-y-[7px]"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        links={links}
        signInText={signInText}
        signInHref={signInHref}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

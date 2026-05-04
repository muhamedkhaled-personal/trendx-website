"use client";

import Link from "next/link";
import clsx from "clsx";
import type { NavLink } from "@/types";
import Button from "@/components/shared/Button";

interface MobileMenuProps {
  links: NavLink[];
  signInText: string;
  signInHref: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  links,
  signInText,
  signInHref,
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={clsx(
        "fixed top-[112px] inset-x-0 z-[99] bg-white shadow-lg transition-all duration-300 overflow-hidden lg:hidden",
        isOpen
          ? "max-h-[calc(100vh-112px)] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
      )}
    >
      <div className="p-6">
        {/* Navigation links */}
        <nav>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-3 border-b border-gray-100 text-gray-600 text-base font-medium hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex flex-col gap-2 mt-4">
          <Button
            variant="navy"
            href={signInHref}
            className="w-full"
            onClick={onClose}
          >
            {signInText}
          </Button>
        </div>
      </div>
    </div>
  );
}

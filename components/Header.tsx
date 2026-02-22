"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

const navLinks = [
  { href: "/properties/land", label: "Land" },
  { href: "/properties/homes", label: "Houses" },
  { href: "/properties/townhomes", label: "Townhomes" },
  { href: "/properties/apartments", label: "Apartments" },
  { href: "/properties/commercial", label: "Commercial" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-black">
          <HugeiconsIcon icon={Home01Icon} size={24} />
          <span>Pace Consult</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-gray-700 hover:text-black sm:inline-block"
          >
            Contact
          </Link>
          <Link
            href="#sign-in"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Sign In
          </Link>
          <Link
            href="#sign-up"
            className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Sign Up
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

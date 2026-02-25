"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, Menu01Icon, CallIcon } from "@hugeicons/core-free-icons";

const navLinks = [
  { href: "/properties/land", label: "Land" },
  { href: "/properties/homes", label: "Houses" },
  { href: "/properties/townhomes", label: "Townhomes" },
  { href: "/properties/apartments", label: "Apartments" },
  { href: "/properties/commercial", label: "Commercial" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2 font-bold text-pace-green text-lg lg:text-xl tracking-tight pr-2">
          <HugeiconsIcon icon={Home01Icon} size={28} />
          <span className="hidden sm:inline">Pace Consult</span>
        </Link>

        {/* Navigation - responsive gaps and text sizes */}
        <nav className="hidden flex-1 items-center justify-center gap-3 lg:gap-8 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs lg:text-sm font-semibold truncate text-gray-600 transition-colors hover:text-pace-green"
              title={label}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="text-xs lg:text-sm font-semibold truncate text-gray-600 transition-colors hover:text-pace-green"
          >
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:gap-3 pl-2">
          {/* WhatsApp Button - Collapses to Icon on smaller screens */}
          <a
            href="https://wa.me/2348168781298"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border-2 border-pace-green p-2 lg:px-5 lg:py-2 text-sm font-bold text-pace-green transition-all hover:bg-pace-green/5 focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Call Now Button - Collapses to Icon on smaller screens */}
          <a
            href="tel:07034680780"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pace-orange p-2.5 lg:px-6 lg:py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pace-orange focus:ring-offset-2"
            title="Call Now"
          >
            <HugeiconsIcon icon={CallIcon} size={18} color="currentColor" />
            <span className="hidden lg:inline">Call Now</span>
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-pace-green lg:ml-2"
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

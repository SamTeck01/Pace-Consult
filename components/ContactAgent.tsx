"use client";


import { HugeiconsIcon } from "@hugeicons/react";
import { CallIcon } from "@hugeicons/core-free-icons";

export default function ContactAgent() {
  return (
    <div className="rounded-2xl border-2 border-pace-green/10 bg-white p-6 shadow-xl ring-1 ring-gray-900/5 relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-pace-orange/10 rounded-full blur-2xl -mr-10 -mt-10" />

      <p className="text-xs font-bold uppercase tracking-widest text-pace-orange mb-1">
        Direct Contact
      </p>

      <p className="mt-1 font-bold text-gray-900 text-lg">Pace Consult</p>
      <p className="text-sm text-gray-500 mt-1">We are here to help you own your dream property.</p>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href="https://wa.me/2348168781298"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-pace-orange hover:text-orange-600 transition-colors"
        >
          Chat on WhatsApp
        </a>
        <a
          href="tel:07034680780"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pace-green transition-colors"
        >
          <HugeiconsIcon icon={CallIcon} size={18} color="currentColor" />
          Call: 07034680780
        </a>
        <a
          href="tel:08173676999"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pace-green transition-colors"
        >
          <HugeiconsIcon icon={CallIcon} size={18} color="currentColor" />
          Call: 08173676999
        </a>
      </div>

      <div className="mt-6 relative z-10 flex flex-col gap-3">
        <a
          href="https://wa.me/2348168781298"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex justify-center items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-md transition-all bg-pace-green text-white hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
        >
          Message Us Now
        </a>
      </div>
    </div>
  );
}

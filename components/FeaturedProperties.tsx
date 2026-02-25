import Link from "next/link";
import PropertyCard from "./PropertyCard";
import type { Property } from "@/lib/types";

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="relative border-t border-gray-100 bg-white py-24">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-pace-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-pace-orange mb-3">Handpicked Selection</p>
            <h2 className="text-4xl font-extrabold text-pace-green tracking-tight sm:text-5xl">
              Prime Land & <span className="text-gray-900">Luxury Estates</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
              Explore our most exclusive opportunities. From verified residential plots to master-planned luxury communities across Nigeria&apos;s most sought-after locations.
            </p>
          </div>
          <Link
            href="/properties"
            className="hidden md:inline-flex rounded-full border-2 border-pace-green px-8 py-3 text-sm font-bold text-pace-green transition-all hover:bg-pace-green/5 focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
          >
            View All Properties
          </Link>
        </div>

        {properties.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-gray-100 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-6 h-48 w-full max-w-md rounded-2xl overflow-hidden opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img
                src="/images/brand-graphic.png"
                alt="Coming Soon"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-600 text-lg font-medium">New listings are being verified.</p>
            <p className="text-gray-400 text-sm mt-1">Check back soon for exclusive land and luxury opportunities.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-pace-green/10 px-8 py-3 text-sm font-bold text-pace-green hover:bg-pace-green hover:text-white transition-all"
            >
              Get Notified First &rarr;
            </Link>
          </div>
        )}

        <div className="mt-16 text-center md:hidden">
          <Link
            href="/properties"
            className="inline-flex rounded-full bg-pace-green px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

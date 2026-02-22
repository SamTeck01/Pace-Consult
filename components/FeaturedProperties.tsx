import Link from "next/link";
import PropertyCard from "./PropertyCard";
import type { Property } from "@/lib/types";

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Key properties</h2>
        <p className="mt-1 text-gray-600">
          Featured land, homes, and apartments across Nigeria.
        </p>
        {properties.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-gray-600">No featured listings yet.</p>
            <Link
              href="/properties"
              className="mt-4 inline-block text-sm font-medium text-black underline-offset-2 hover:underline"
            >
              Browse all properties
            </Link>
          </div>
        )}
        {properties.length > 0 && (
          <div className="mt-10 text-center">
            <Link
              href="/properties"
              className="inline-flex rounded bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              View all properties
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

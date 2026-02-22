import { Suspense } from "react";
import type { Metadata } from "next";
import { getProperties } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";
import PropertiesFilters from "@/components/PropertiesFilters";

export const metadata: Metadata = {
  title: "Properties | Pace Consult",
  description:
    "Browse land, homes, and apartments for buy, sell, or rent in Nigeria. Lagos, Abuja, Port Harcourt and more.",
};

interface PageProps {
  searchParams: Promise<{ type?: string; city?: string; bedrooms?: string; transaction?: string }>;
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const properties = await getProperties({
    type: params.type,
    city: params.city,
    bedrooms: params.bedrooms,
    transaction: params.transaction,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
      <p className="mt-1 text-gray-600">
        Find land, homes, and apartments across Nigeria.
      </p>

      <Suspense fallback={null}>
        <PropertiesFilters initialFilters={params} />
      </Suspense>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-gray-600">No properties match your filters.</p>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting filters or browse all listings.
            </p>
          </div>
        )}
      </div>

      {properties.length > 0 && (
        <div className="mt-8 flex justify-center">
          <div className="rounded border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
            Map placeholder — Show on Map
          </div>
        </div>
      )}
    </div>
  );
}

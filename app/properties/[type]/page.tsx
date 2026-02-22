import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperties } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";
import PropertiesFilters from "@/components/PropertiesFilters";

const VALID_TYPES = ["land", "homes", "house", "apartments", "apartment", "townhomes", "townhouse", "commercial"] as const;

function typeToSlug(type: string): string {
  const map: Record<string, string> = {
    land: "land",
    homes: "house",
    house: "house",
    apartments: "apartment",
    apartment: "apartment",
    townhomes: "townhouse",
    townhouse: "townhouse",
    commercial: "commercial",
  };
  return map[type] ?? type;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return {
    title: `${label} | Pace Consult`,
    description: `Browse ${label.toLowerCase()} for sale and rent in Nigeria. Lagos, Abuja, Port Harcourt and more.`,
  };
}

interface PageProps {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ city?: string; bedrooms?: string; transaction?: string }>;
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { type } = await params;
  const search = await searchParams;

  if (!VALID_TYPES.includes(type as (typeof VALID_TYPES)[number])) {
    notFound();
  }

  const dbType = typeToSlug(type);
  const properties = await getProperties({
    type: dbType,
    city: search.city,
    bedrooms: search.bedrooms,
    transaction: search.transaction,
  });

  const label = type === "homes" ? "Houses" : type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900">{label}</h1>
      <p className="mt-1 text-gray-600">
        {label} for buy, sell, and rent across Nigeria.
      </p>

      <PropertiesFilters
        basePath={`/properties/${type}`}
        initialFilters={{
          type: dbType,
          city: search.city,
          bedrooms: search.bedrooms,
          transaction: search.transaction,
        }}
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-gray-600">No {label.toLowerCase()} match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

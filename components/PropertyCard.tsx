import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";
import type { Property } from "@/lib/types";

function formatPrice(priceNgn: number) {
  if (priceNgn >= 1_000_000) {
    return `₦${(priceNgn / 1_000_000).toFixed(1)}M`;
  }
  if (priceNgn >= 1_000) {
    return `₦${(priceNgn / 1_000).toFixed(0)}K`;
  }
  return `₦${priceNgn}`;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const imageUrl =
    property.images?.[0] ||
    "https://placehold.co/600x400/e5e7eb/6b7280?text=No+image";
  const detailUrl = `/properties/${property.type}/${property.slug}`;

  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={detailUrl} className="block aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={property.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          unoptimized={imageUrl.startsWith("https://placehold")}
        />
      </Link>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {property.type} · {property.transaction}
        </p>
        <h2 className="mt-1 font-semibold text-gray-900 line-clamp-1">
          <Link href={detailUrl}>{property.title}</Link>
        </h2>
        {property.location && (
          <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
            <HugeiconsIcon icon={Location01Icon} size={14} />
            <span className="line-clamp-1">{property.location}</span>
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          {(property.bedrooms ?? 0) > 0 && (
            <span>{property.bedrooms} beds</span>
          )}
          {(property.bathrooms ?? 0) > 0 && (
            <span>{property.bathrooms} baths</span>
          )}
          {(property.area_sqm ?? property.plot_size_sqm) && (
            <span>
              {property.area_sqm
                ? `${property.area_sqm} m²`
                : `${property.plot_size_sqm} m² plot`}
            </span>
          )}
        </div>
        <p className="mt-2 text-lg font-semibold text-gray-900">
          {formatPrice(property.price_ngn)}
        </p>
        <Link
          href={detailUrl}
          className="mt-3 inline-block text-sm font-medium text-black underline-offset-2 hover:underline"
        >
          View details
        </Link>
      </div>
    </article>
  );
}

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
    "/images/brand-graphic.png";
  const detailUrl = `/properties/${property.type}/${property.slug}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
      <Link href={detailUrl} className="block aspect-[4/3] overflow-hidden bg-gray-50">
        <Image
          src={imageUrl}
          alt={property.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized={imageUrl.startsWith("https://placehold")}
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-pace-green ring-1 ring-inset ring-pace-green/10">
            {property.type}
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">
            {property.transaction}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 group-hover:text-pace-green transition-colors line-clamp-1">
          <Link href={detailUrl}>{property.title}</Link>
        </h2>

        {property.location && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
            <HugeiconsIcon icon={Location01Icon} size={16} className="text-pace-orange" />
            <span className="line-clamp-1">{property.location}</span>
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-gray-600 border-t border-gray-50 pt-4">
          {(property.bedrooms ?? 0) > 0 && (
            <span className="flex items-center gap-1">{property.bedrooms} Bed</span>
          )}
          {(property.bathrooms ?? 0) > 0 && (
            <span className="flex items-center gap-1">{property.bathrooms} Bath</span>
          )}
          {(property.area_sqm ?? property.plot_size_sqm) && (
            <span className="flex items-center gap-1">
              {property.area_sqm
                ? `${property.area_sqm} m²`
                : `${property.plot_size_sqm} m²`}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-pace-green">
            {formatPrice(property.price_ngn)}
          </p>
          <Link
            href={detailUrl}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pace-orange/10 text-pace-orange transition-all hover:bg-pace-orange hover:text-white"
            aria-label="View Details"
          >
            <span className="text-xl font-bold">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

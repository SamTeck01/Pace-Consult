"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";

const PROPERTY_TYPES = [
  { value: "", label: "All types" },
  { value: "land", label: "Land" },
  { value: "house", label: "Houses" },
  { value: "apartment", label: "Apartments" },
  { value: "townhouse", label: "Townhomes" },
  { value: "commercial", label: "Commercial" },
];

const TRANSACTIONS = [
  { value: "", label: "Buy / Sell / Rent" },
  { value: "buy", label: "Buy" },
  { value: "sell", label: "Sell" },
  { value: "rent", label: "Rent" },
];

const CITIES = [
  { value: "", label: "All cities" },
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "port-harcourt", label: "Port Harcourt" },
  { value: "ibadan", label: "Ibadan" },
  { value: "benin", label: "Benin City" },
];

const BEDROOMS = [
  { value: "", label: "Any" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
];

interface PropertiesFiltersProps {
  initialFilters: {
    type?: string;
    city?: string;
    bedrooms?: string;
    transaction?: string;
  };
  /** When on a category page e.g. /properties/land, pass basePath so links stay on that path */
  basePath?: string;
}

export default function PropertiesFilters({ initialFilters, basePath = "/properties" }: PropertiesFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function updateFilter(key: string, value: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    // On category page, type is in the path so don't add it to query
    if (basePath !== "/properties") next.delete("type");
    const qs = next.toString();
    const url = qs ? `${basePath}?${qs}` : basePath;
    startTransition(() => {
      router.push(url);
    });
  }

  return (
    <div className="mt-6 flex flex-wrap items-end gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <HugeiconsIcon icon={FilterHorizontalIcon} size={18} />
        Filters
      </span>
      <div>
        <label htmlFor="transaction" className="sr-only">Transaction</label>
        <select
          id="transaction"
          defaultValue={initialFilters.transaction ?? ""}
          onChange={(e) => updateFilter("transaction", e.target.value)}
          className="rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
        >
          {TRANSACTIONS.map((opt) => (
            <option key={opt.value || "any"} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      {basePath === "/properties" && (
        <div>
          <label htmlFor="type" className="sr-only">Type</label>
          <select
            id="type"
            defaultValue={initialFilters.type ?? ""}
            onChange={(e) => updateFilter("type", e.target.value)}
            className="rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          >
            {PROPERTY_TYPES.map((opt) => (
              <option key={opt.value || "any"} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor="city" className="sr-only">City</label>
        <select
          id="city"
          defaultValue={initialFilters.city ?? ""}
          onChange={(e) => updateFilter("city", e.target.value)}
          className="rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
        >
          {CITIES.map((opt) => (
            <option key={opt.value || "any"} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bedrooms" className="sr-only">Bedrooms</label>
        <select
          id="bedrooms"
          defaultValue={initialFilters.bedrooms ?? ""}
          onChange={(e) => updateFilter("bedrooms", e.target.value)}
          className="rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
        >
          {BEDROOMS.map((opt) => (
            <option key={opt.value || "any"} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      {isPending && (
        <span className="text-sm text-gray-500">Updating…</span>
      )}
    </div>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SearchIcon } from "@hugeicons/core-free-icons";

const PROPERTY_TYPES = [
  { value: "", label: "Any type" },
  { value: "land", label: "Land" },
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "townhouse", label: "Townhouse" },
  { value: "commercial", label: "Commercial" },
];

const CITIES = [
  { value: "", label: "Any city" },
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

export default function PropertySearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") ?? "");
  const [city, setCity] = useState(searchParams.get("city") ?? "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (city) params.set("city", city);
    if (bedrooms) params.set("bedrooms", bedrooms);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <section id="search" className="relative -mt-12 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 ring-1 ring-gray-900/5">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-pace-orange mb-6">
            Find Your Future Today
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap items-end justify-center gap-6"
          >
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="type" className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">
                Property Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="block w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all"
              >
                {PROPERTY_TYPES.map((opt) => (
                  <option key={opt.value || "any"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="city" className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">
                Location
              </label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="block w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all"
              >
                {CITIES.map((opt) => (
                  <option key={opt.value || "any"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <label htmlFor="bedrooms" className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="block w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all"
              >
                {BEDROOMS.map((opt) => (
                  <option key={opt.value || "any"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-pace-green px-10 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2 min-w-[160px]"
            >
              <HugeiconsIcon icon={SearchIcon} size={20} color="white" />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

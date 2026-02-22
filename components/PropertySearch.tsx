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
    <section id="search" className="border-t border-gray-200 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-700">
          We help you find the home that will be yours
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-wrap items-end justify-center gap-4"
        >
          <div>
            <label htmlFor="type" className="sr-only">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block w-full min-w-[140px] rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              {PROPERTY_TYPES.map((opt) => (
                <option key={opt.value || "any"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="block w-full min-w-[140px] rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              {CITIES.map((opt) => (
                <option key={opt.value || "any"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bedrooms" className="sr-only">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="block w-full min-w-[100px] rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
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
            className="flex items-center gap-2 rounded bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            <HugeiconsIcon icon={SearchIcon} size={18} color="white" />
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

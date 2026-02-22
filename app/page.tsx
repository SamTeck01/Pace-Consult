import { Suspense } from "react";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import SeeWhatWeOffer from "@/components/SeeWhatWeOffer";
import SmartSelectionCta from "@/components/SmartSelectionCta";
import { getFeaturedProperties } from "@/lib/properties";

export default async function HomePage() {
  const featured = await getFeaturedProperties(6);
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="border-t border-gray-200 bg-gray-50 py-10" />}>
        <PropertySearch />
      </Suspense>
      <FeaturedProperties properties={featured} />
      <SeeWhatWeOffer />
      <SmartSelectionCta />
    </>
  );
}

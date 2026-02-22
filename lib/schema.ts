import type { Property } from "./types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Pace Consult",
    description:
      "Pace Consult helps you discover and own land, homes, and apartments in Nigeria.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://paceconsult.ng",
    areaServed: { "@type": "Country", name: "Nigeria" },
  };
}

export function propertyJsonLd(property: Property, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.title,
    description: property.description,
    ...(property.images?.[0] && { image: property.images[0] }),
    offers: {
      "@type": "Offer",
      price: property.price_ngn,
      priceCurrency: "NGN",
    },
    ...(property.area_sqm && { floorSize: { "@type": "QuantitativeValue", value: property.area_sqm, unitCode: "MTK" } }),
    url: `${baseUrl}/properties/${property.type}/${property.slug}`,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPropertyBySlug } from "@/lib/properties";
import PropertyGallery from "@/components/PropertyGallery";
import ContactAgent from "@/components/ContactAgent";
import MapSection from "@/components/MapSection";
import { propertyJsonLd, breadcrumbJsonLd } from "@/lib/schema";

function formatPrice(priceNgn: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(priceNgn);
}

interface PageProps {
  params: Promise<{ type: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type, slug } = await params;
  const property = await getPropertyBySlug(type, slug);
  if (!property) return { title: "Property | Pace Consult" };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paceconsult.ng";
  return {
    title: `${property.title} | ${property.location} | Pace Consult`,
    description: property.description.slice(0, 160),
    openGraph: {
      title: property.title,
      description: property.description.slice(0, 160),
      url: `${baseUrl}/properties/${type}/${slug}`,
      ...(property.images?.[0] && { images: [property.images[0]] }),
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { type, slug } = await params;
  const property = await getPropertyBySlug(type, slug);
  if (!property) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paceconsult.ng";
  const propertyUrl = `${baseUrl}/properties/${type}/${slug}`;

  const sections = [
    { id: "photos", label: "Photos" },
    { id: "description", label: "Description" },
    { id: "house-plan", label: "House plan" },
    { id: "smart-estimate", label: "Smart estimate" },
    { id: "map", label: "On map" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertyJsonLd(property, baseUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: baseUrl },
              { name: "Properties", url: `${baseUrl}/properties` },
              { name: property.type, url: `${baseUrl}/properties/${type}` },
              { name: property.title, url: propertyUrl },
            ])
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/properties" className="hover:text-black">Properties</Link>
          <span className="mx-2">/</span>
          <Link href={`/properties/${type}`} className="hover:text-black">{type}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{property.title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left column: sticky summary */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <p className="text-3xl font-bold text-gray-900">
                {formatPrice(property.price_ngn)}
              </p>
              <ContactAgent
                agencyName={property.agency_name}
                contactPhone={property.contact_phone}
                contactWhatsapp={property.contact_whatsapp}
              />
              <nav className="rounded border border-gray-200 p-4" aria-label="Page sections">
                <ul className="space-y-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-gray-700 hover:text-black"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Right column: content */}
          <div className="lg:col-span-2 space-y-12">
            <section id="photos">
              <PropertyGallery images={property.images} title={property.title} />
            </section>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {property.area_sqm != null && <span>{property.area_sqm} m²</span>}
              {property.plot_size_sqm != null && (
                <span>{property.plot_size_sqm} m² plot</span>
              )}
              {(property.bedrooms ?? 0) > 0 && (
                <span>{property.bedrooms} beds</span>
              )}
              {(property.bathrooms ?? 0) > 0 && (
                <span>{property.bathrooms} baths</span>
              )}
            </div>

            <section id="description">
              <h2 className="text-lg font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600 whitespace-pre-line">
                {property.description}
              </p>
            </section>

            {(property.floor_plan_url || property.type !== "land") && (
              <section id="house-plan">
                <h2 className="text-lg font-semibold text-gray-900">House plan</h2>
                {property.floor_plan_url ? (
                  <div className="mt-2 aspect-video overflow-hidden rounded border border-gray-200 bg-gray-100">
                    <img
                      src={property.floor_plan_url}
                      alt="Floor plan"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">Plot/site plan available on request.</p>
                )}
              </section>
            )}

            <section id="smart-estimate">
              <h2 className="text-lg font-semibold text-gray-900">
                Smart estimate
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Market estimate and factors affecting value can be added here.
              </p>
            </section>

            <section id="map">
              <h2 className="text-lg font-semibold text-gray-900">On map</h2>
              <div className="mt-2">
                <MapSection
                  lat={property.map_lat}
                  lng={property.map_lng}
                  address={property.location}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pace Consult",
  description:
    "Pace Consult helps you discover and own quality real estate in Nigeria — land, homes, and apartments.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">About Pace Consult</h1>
      <p className="mt-6 text-gray-600">
        We are a real estate company in Nigeria focused on helping you find and own the right property. Whether you are looking for land, a house, or an apartment, we connect you with listings across Lagos, Abuja, Port Harcourt and other major cities.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-gray-900">What we offer</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
        <li>Land and plot listings (our priority)</li>
        <li>Houses and townhomes for buy, sell, and rent</li>
        <li>Apartments and commercial properties</li>
        <li>Local expertise and contact for every listing</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-gray-900">Our focus</h2>
      <p className="mt-4 text-gray-600">
        We believe in making property search simple and transparent. Our listings are presented with clear details, locations, and contact options so you can make informed decisions and take the next step with confidence.
      </p>
    </div>
  );
}

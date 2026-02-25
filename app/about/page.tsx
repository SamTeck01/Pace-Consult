import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pace Consult",
  description:
    "Pace Consult helps you discover and own quality real estate in Nigeria — land, homes, and apartments.",
};

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-sm font-bold uppercase tracking-widest text-pace-orange mb-3">Our Story</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-pace-green sm:text-6xl">
            Pace <span className="text-gray-900">Consult</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-600 sm:text-xl leading-relaxed">
            We are a premier real estate firm in Nigeria dedicated to simplifying the path to property ownership. Our mission is to provide secure, verified, and high-growth opportunities for every Nigerian.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Defines Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Pace Consult, we don&apos;t just list properties; we build futures. We understand that acquiring land or a home is one of the most significant decisions you&apos;ll make. That&apos;s why local expertise and transparent documentation are at the heart of everything we do.
            </p>
            <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
              <div className="relative pl-12">
                <dt className="inline font-bold text-gray-900">
                  <span className="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-pace-green text-white">✓</span>
                  Land Acquisition Priority.
                </dt>
                <dd className="inline"> We specialize in verified plots across Lagos, Abuja, and Port Harcourt, focusing on development corridors with high ROI.</dd>
              </div>
              <div className="relative pl-12">
                <dt className="inline font-bold text-gray-900">
                  <span className="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-pace-orange text-white text-xs whitespace-nowrap">★</span>
                  Luxury Housing.
                </dt>
                <dd className="inline"> Our portfolio includes the finest duplexes and smart apartments designed for modern Nigerian living.</dd>
              </div>
              <div className="relative pl-12">
                <dt className="inline font-bold text-gray-900">
                  <span className="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-pace-green text-white">✓</span>
                  End-to-End Support.
                </dt>
                <dd className="inline"> From site tours to final deed allocation, we stay with you every step of the way.</dd>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-pace-green/5 aspect-square flex flex-col items-center justify-center p-8 text-center">
              <p className="text-4xl font-extrabold text-pace-green mb-2">100%</p>
              <p className="text-sm font-bold text-gray-500 uppercase">Verified Title</p>
            </div>
            <div className="rounded-3xl bg-pace-orange/5 aspect-square flex flex-col items-center justify-center p-8 text-center translate-y-8">
              <p className="text-4xl font-extrabold text-pace-orange mb-2">5k+</p>
              <p className="text-sm font-bold text-gray-500 uppercase">Happy Clients</p>
            </div>
            <div className="rounded-3xl bg-pace-orange/5 aspect-square flex flex-col items-center justify-center p-8 text-center -translate-y-8">
              <p className="text-4xl font-extrabold text-pace-orange mb-2">10+</p>
              <p className="text-sm font-bold text-gray-500 uppercase">Premium Locations</p>
            </div>
            <div className="rounded-3xl bg-pace-green/5 aspect-square flex flex-col items-center justify-center p-8 text-center">
              <p className="text-4xl font-extrabold text-pace-green mb-2">24/7</p>
              <p className="text-sm font-bold text-gray-500 uppercase">Client Care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

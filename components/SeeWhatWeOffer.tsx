import Link from "next/link";

export default function SeeWhatWeOffer() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              See what we offer and how it works
            </h2>
            <p className="mt-4 text-gray-600">
              We simplify property search across Nigeria. Whether you want land, a house, or an apartment, we help you find options that match your needs and connect you with trusted listings in Lagos, Abuja, Port Harcourt and beyond.
            </p>
            <Link
              href="/properties"
              className="mt-6 inline-block font-medium text-black underline-offset-2 hover:underline"
            >
              Learn more
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              Property selection image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

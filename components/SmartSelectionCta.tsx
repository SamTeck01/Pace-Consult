import Link from "next/link";

export default function SmartSelectionCta() {
  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-xl border border-gray-200 bg-gray-50 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Smart selection of premium real estate
            </h2>
            <p className="mt-2 text-gray-600">
              We curate land, homes, and apartments so you can discover the right property in Nigeria with confidence.
            </p>
          </div>
          <Link
            href="/properties"
            className="shrink-0 rounded bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
          >
            Explore properties
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Pace Consult",
  description: "Guides and resources for buying land and property in Nigeria.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
      <p className="mt-2 text-gray-600">
        Guides and articles to help you with property in Nigeria.
      </p>
      <div className="mt-10 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
        <p className="text-gray-600">No articles yet.</p>
        <Link
          href="/properties"
          className="mt-4 inline-block text-sm font-medium text-black underline-offset-2 hover:underline"
        >
          Browse properties
        </Link>
      </div>
    </div>
  );
}

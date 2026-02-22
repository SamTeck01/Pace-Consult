import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-2 text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Go home
      </Link>
    </div>
  );
}

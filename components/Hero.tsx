export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find a place you will call home
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We help you discover and own quality real estate in Nigeria — land, homes, and apartments in Lagos, Abuja, Port Harcourt and beyond.
          </p>
          <div className="mt-8">
            <a
              href="#search"
              className="inline-flex rounded bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
            >
              Explore properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

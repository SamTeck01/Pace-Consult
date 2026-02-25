import Link from "next/link";

export default function SmartSelectionCta() {
  return (
    <section className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-pace-green rounded-3xl px-6 py-16 shadow-2xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#f79b20" />
                <stop offset={1} stopColor="#066839" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to secure your <br className="hidden sm:inline" />
              <span className="text-pace-orange">prime land in Nigeria?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-green-50">
              Join hundreds of happy property owners with Pace Consult. Whether it&apos;s a residential plot or a luxury home, we make the process seamless and secure.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="https://wa.me/2348168781298"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pace-orange px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pace-orange transition-all hover:scale-105"
              >
                Inquire via WhatsApp
              </Link>
              <Link href="/properties" className="text-sm font-bold leading-6 text-white hover:text-pace-orange transition-colors">
                View catalog <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            {/* Decorative element or just leave space for aesthetics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/10 rounded-full scale-110" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-pace-orange/20 rounded-full scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4fcf7] py-20 sm:py-32">
      {/* Decorative Background Shapes matching the graphic's green/orange flows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-pace-green opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-pace-orange opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl">
            {/* The cursive accent from the graphic ("Welcome to the month of Februaray" style) */}
            <div className="inline-block relative mb-4">
              <span className="font-cursive text-3xl text-pace-orange block -rotate-2">
                A Fresh Start, A New Chance
              </span>
              <div className="absolute inset-0 rounded-[100%] border border-pace-orange/40 scale-125 -rotate-2" />
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-pace-green sm:text-6xl/tight mt-6">
              Find a place you <br />
              <span className="text-gray-900">will call home</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed border-l-4 border-pace-green pl-4">
              We celebrate the beauty of landownership and the happiness it brings.
              We&apos;re here to turn your vision into reality in Lagos, Abuja, Port Harcourt and beyond.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#search"
                className="inline-flex rounded-full bg-pace-green px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
              >
                Explore Properties
              </a>
              <Link
                href="/contact"
                className="inline-flex rounded-full border-2 border-pace-green bg-transparent px-8 py-4 text-base font-bold text-pace-green transition-all hover:bg-pace-green/5 focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side placeholder - typically for the 3D House Image from the graphic */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 group">
            <Image
              src="/images/hero.png"
              alt="Modern luxury real estate"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-pace-green/20 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}

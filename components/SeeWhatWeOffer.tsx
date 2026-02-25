import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Home01Icon, Building04Icon } from "@hugeicons/core-free-icons";

const offerings = [
  {
    title: "Prime Land Acquisition",
    description: "Our primary focus. Secure high-value, verified plots in rapidly developing areas of Lagos, Abuja, and Port Harcourt. Build your dream or hold for incredible ROI.",
    icon: Location01Icon,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    href: "/properties/land"
  },
  {
    title: "Luxury Homes & Apartments",
    description: "Move-in ready duplexes, smart homes, and modern apartments designed for comfort, luxury, and premium living experiences.",
    icon: Home01Icon,
    image: "/images/hero.png",
    href: "/properties/homes"
  },
  {
    title: "Commercial Spaces",
    description: "Strategic office buildings, retail spaces, and commercial plots to position your business for maximum growth and visibility.",
    icon: Building04Icon,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "/properties/commercial"
  }
];

export default function SeeWhatWeOffer() {
  return (
    <section className="relative border-t border-gray-100 bg-[#fdfdfd] py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-pace-green opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-pace-orange opacity-5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-pace-orange mb-3">Our Expertise</p>
          <h2 className="text-4xl font-extrabold text-pace-green tracking-tight sm:text-5xl">
            Prime Real Estate <span className="text-gray-900">Portfolio</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At Pace Consult, we provide a curated selection of Nigeria&apos;s most promising properties. From secured land titles to architectural masterpieces.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {offerings.map((offer, index) => (
            <div key={offer.title} className="group relative flex flex-col rounded-3xl bg-white p-2 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className={`absolute top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-md shadow-lg ${index === 0 ? 'bg-pace-green/90 text-white' : 'bg-white/90 text-pace-orange'}`}>
                  <HugeiconsIcon icon={offer.icon} size={24} />
                </div>
              </div>

              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pace-green transition-colors">{offer.title}</h3>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm">
                  {offer.description}
                </p>
                <Link
                  href={offer.href}
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-bold transition-all ${index === 0 ? 'text-pace-green hover:translate-x-1' : 'text-pace-orange hover:translate-x-1'}`}
                >
                  Explore Catalog
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-pace-orange px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pace-orange focus:ring-offset-2"
          >
            Start Your Journey Today
          </Link>
        </div>
      </div>
    </section>
  );
}

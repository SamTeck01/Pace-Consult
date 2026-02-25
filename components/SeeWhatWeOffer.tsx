import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Home01Icon, Building04Icon } from "@hugeicons/core-free-icons";

const offerings = [
  {
    title: "Prime Land Acquisition",
    description: "Our primary focus. Secure high-value, verified plots in rapidly developing areas of Lagos, Abuja, and Port Harcourt. Build your dream or hold for incredible ROI.",
    icon: Location01Icon,
    href: "/properties/land"
  },
  {
    title: "Luxury Homes & Apartments",
    description: "Move-in ready duplexes, smart homes, and modern apartments designed for comfort, luxury, and premium living experiences.",
    icon: Home01Icon,
    href: "/properties/homes"
  },
  {
    title: "Commercial Spaces",
    description: "Strategic office buildings, retail spaces, and commercial plots to position your business for maximum growth and visibility.",
    icon: Building04Icon,
    href: "/properties/commercial"
  }
];

export default function SeeWhatWeOffer() {
  return (
    <section className="relative border-t border-gray-100 bg-white py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-pace-green opacity-5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-pace-orange mb-3">What We Offer</p>
          <h2 className="text-4xl font-extrabold text-pace-green tracking-tight sm:text-5xl">
            Secure Your Future with <span className="text-gray-900">Prime Real Estate</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            While we specialize in securing the most lucrative and verified <strong className="text-pace-green">land acquisitions</strong> across Nigeria, Pace Consult is your full-service partner for luxury homes, smart apartments, and high-yield commercial properties.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offerings.map((offer, index) => (
            <div key={offer.title} className={`rounded-3xl border ${index === 0 ? 'border-pace-green shadow-lg bg-[#f4fcf7] ring-1 ring-pace-green/20' : 'border-gray-100 bg-white shadow-sm'} p-8 transition-all hover:-translate-y-1 hover:shadow-xl`}>
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${index === 0 ? 'bg-pace-green text-white shadow-md' : 'bg-orange-50 text-pace-orange'}`}>
                <HugeiconsIcon icon={offer.icon} size={28} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{offer.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {offer.description}
              </p>
              <Link
                href={offer.href}
                className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${index === 0 ? 'text-pace-green hover:text-green-800' : 'text-pace-orange hover:text-orange-600'}`}
              >
                Explore {offer.title.split(' ')[0]}
                <span aria-hidden="true">&rarr;</span>
              </Link>
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

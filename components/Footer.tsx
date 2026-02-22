import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-gray-900">
              We help you discover and own quality real estate in Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pace Consult. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

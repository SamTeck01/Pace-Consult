import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, InstagramIcon } from "@hugeicons/core-free-icons";

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
    <footer className="bg-pace-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-tight mb-4 inline-block">Pace Consult</span>
            <p className="text-sm font-medium text-green-100 max-w-sm leading-relaxed mb-6">
              We celebrate the beauty of landownership and the happiness it brings. We&apos;re here to turn your vision into reality.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-green-50">
                <HugeiconsIcon icon={Mail01Icon} size={20} className="text-pace-orange" />
                <a href="mailto:paceconsultltd@gmail.com" className="hover:text-pace-orange transition-colors">paceconsultltd@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-green-50">
                <HugeiconsIcon icon={InstagramIcon} size={20} className="text-pace-orange" />
                <a href="https://instagram.com/paceconsult_associates" target="_blank" rel="noopener noreferrer" className="hover:text-pace-orange transition-colors">Paceconsult_associates</a>
              </div>
            </div>
            <div className="mt-4 text-sm text-green-50">
              <strong>Contacts:</strong> <br />
              07034680780 <br />
              08173676999, 08168781298
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-200">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-green-50 hover:text-white hover:underline transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-green-200">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-green-50 hover:text-white hover:underline transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-200">
          <p>© {new Date().getFullYear()} Pace Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

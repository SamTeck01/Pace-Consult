import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pace Consult | Land, Homes & Apartments in Nigeria",
  description:
    "Find land, homes, and apartments in Nigeria. Pace Consult helps you discover and own property in Lagos, Abuja, Port Harcourt and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

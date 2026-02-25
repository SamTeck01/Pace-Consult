"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-pace-orange mb-3">Get In Touch</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-pace-green sm:text-5xl">Contact <span className="text-gray-900">Pace Consult</span></h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Have questions about a property or ready to invest? Our team is here to provide expert guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Support Channels</h2>
              <p className="mt-4 text-gray-600">Reach us through our direct lines for instant assistance.</p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pace-green text-white shadow-md">
                   <HugeiconsIcon icon={Mail01Icon} size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email Us</p>
                    <a href="mailto:info@paceconsult.ng" className="text-gray-600 hover:text-pace-green transition-colors">info@paceconsult.ng</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">WhatsApp Chat</p>
                    <a href="https://wa.me/2348168781298" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition-colors">+234 816 878 1298</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pace-orange text-white shadow-md">
                    <HugeiconsIcon icon={Location01Icon} size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Office Location</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-2">Direct Phone Lines:</h3>
               <div className="space-y-1 text-gray-600">
                 <p>Call: <a href="tel:07034680780" className="hover:text-pace-green">070 3468 0780</a></p>
                 <p>Call: <a href="tel:08173676999" className="hover:text-pace-green">081 7367 6999</a></p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-pace-green mb-4">
                  <span className="text-3xl font-bold">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="mt-4 text-gray-600">We&apos;ve received your inquiry and our experts will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold text-pace-green hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="mt-2 block w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="mt-2 block w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700">Inquiry Type</label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-2 block w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all outline-none bg-white"
                  >
                    <option>Land Acquisition</option>
                    <option>House/Apartment Purchase</option>
                    <option>Commercial Property</option>
                    <option>General Support</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about the property you're looking for..."
                    className="mt-2 block w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-pace-green focus:outline-none focus:ring-2 focus:ring-pace-green/20 transition-all outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-pace-green py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-pace-green focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

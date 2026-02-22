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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact us</h1>
      <p className="mt-2 text-gray-600">
        Get in touch for property inquiries or general questions.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Contact</h2>
          <ul className="mt-3 space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <HugeiconsIcon icon={Mail01Icon} size={18} />
              <a href="mailto:info@paceconsult.ng" className="hover:text-black">
                info@paceconsult.ng
              </a>
            </li>
            <li className="flex items-center gap-2">
              <HugeiconsIcon icon={Location01Icon} size={18} />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            You can also reach us via WhatsApp on the number listed on each property.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-sm font-semibold text-gray-900">Send a message</h2>
          {submitted ? (
            <p className="mt-4 text-gray-600">
              Thank you. We will get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

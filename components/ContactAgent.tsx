"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CallIcon } from "@hugeicons/core-free-icons";

interface ContactAgentProps {
  agencyName?: string | null;
  contactPhone?: string | null;
  contactWhatsapp?: string | null;
}

export default function ContactAgent({
  agencyName,
  contactPhone,
  contactWhatsapp,
}: ContactAgentProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        Estate agency
      </p>
      {agencyName && (
        <p className="mt-1 font-medium text-gray-900">{agencyName}</p>
      )}
      <div className="mt-4 flex flex-col gap-2">
        {contactWhatsapp && (
          <a
            href={`https://wa.me/${contactWhatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-green-700 hover:underline"
          >
            WhatsApp
          </a>
        )}
        {contactPhone && (
          <a
            href={`tel:${contactPhone}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:underline"
          >
            <HugeiconsIcon icon={CallIcon} size={18} color="currentColor" />
            {contactPhone}
          </a>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <button
          type="submit"
          className="w-full rounded bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
        >
          {submitted ? "Request sent" : "Contact Agent"}
        </button>
      </form>
    </div>
  );
}

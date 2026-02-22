"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [index, setIndex] = useState(0);
  const list = images.length > 0 ? images : ["https://placehold.co/1200x800/e5e7eb/6b7280?text=No+image"];
  const current = list[index]!;

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={current}
          alt={`${title} - image ${index + 1}`}
          fill
          className="object-cover"
          priority
          unoptimized={current.startsWith("https://placehold")}
        />
        {list.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i === 0 ? list.length - 1 : i - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Previous image"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i === list.length - 1 ? 0 : i + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Next image"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
            </button>
          </>
        )}
      </div>
      {list.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {list.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded border-2 ${
                i === index ? "border-black" : "border-transparent"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={96}
                height={64}
                className="h-full w-full object-cover"
                unoptimized={src.startsWith("https://placehold")}
              />
            </button>
          ))}
        </div>
      )}
      {list.length > 1 && (
        <p className="text-sm text-gray-500">
          Show all photos ({list.length})
        </p>
      )}
    </div>
  );
}

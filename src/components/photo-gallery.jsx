"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGallery({ photos, title }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(() => setSelectedIndex((i) => (i > 0 ? i - 1 : photos.length - 1)), [photos.length]);
  const next = useCallback(() => setSelectedIndex((i) => (i < photos.length - 1 ? i + 1 : 0)), [photos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src={photo}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 text-white hover:text-zinc-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 text-white hover:text-zinc-300 transition-colors z-10"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 text-white hover:text-zinc-300 transition-colors z-10"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedIndex]}
              alt={`${title} screenshot ${selectedIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

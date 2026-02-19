"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// photos can be strings (url) or objects { url, caption }
function getUrl(photo) {
  return typeof photo === "string" ? photo : photo.url;
}
function getCaption(photo) {
  return typeof photo === "string" ? null : photo.caption || null;
}

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
        {photos.map((photo, i) => {
          const url = getUrl(photo);
          const caption = getCaption(photo);
          return (
            <div key={i} className="space-y-1">
              <button
                onClick={() => setSelectedIndex(i)}
                className="relative aspect-video w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src={url}
                  alt={caption || `${title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
              {caption && (
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{caption.split("\n\n")[0]}</p>
                  {caption.includes("\n\n") && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{caption.split("\n\n")[1]}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
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
            className="relative max-w-[90vw] max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getUrl(photos[selectedIndex])}
              alt={getCaption(photos[selectedIndex]) || `${title} screenshot ${selectedIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {getCaption(photos[selectedIndex]) && (
            <div
              className="mt-3 text-center px-6 max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white font-medium text-sm">{getCaption(photos[selectedIndex]).split("\n\n")[0]}</p>
              {getCaption(photos[selectedIndex]).includes("\n\n") && (
                <p className="text-zinc-400 text-xs mt-1">{getCaption(photos[selectedIndex]).split("\n\n")[1]}</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

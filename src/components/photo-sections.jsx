"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PhotoGallery from "@/components/photo-gallery";

export default function PhotoSections({ photos, title }) {
  // Group photos by section; photos without a section fall under "Other"
  const grouped = photos.reduce((acc, photo) => {
    const key = (typeof photo === "object" && photo.section) ? photo.section : "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(photo);
    return acc;
  }, {});

  const sectionNames = Object.keys(grouped);

  // All sections open by default
  const [open, setOpen] = useState(() => Object.fromEntries(sectionNames.map((s) => [s, true])));

  const toggle = (name) => setOpen((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <div className="space-y-3">
      {sectionNames.map((name) => (
        <div key={name} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(name)}
            className="w-full flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left"
          >
            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{name}</span>
            <ChevronDown
              className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${open[name] ? "rotate-180" : ""}`}
            />
          </button>
          {open[name] && (
            <div className="p-4">
              <PhotoGallery photos={grouped[name]} title={`${title} — ${name}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

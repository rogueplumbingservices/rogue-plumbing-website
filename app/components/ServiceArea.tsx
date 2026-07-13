"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const featuredCities = [
  "Burbank", "Eagle Rock", "Glendale", "La Cañada",
  "Los Angeles", "Pasadena", "Studio City", "Van Nuys",
];

const otherCities = [
  "Arleta", "Beverly Hills", "Brentwood", "Calabasas",
  "Canoga Park", "Century City", "Chatsworth", "Culver City",
  "Granada Hills", "Hollywood", "Northridge",
  "Panorama City", "Reseda", "Santa Monica", "Sherman Oaks",
  "Sierra Madre", "Sun Valley", "Sylmar", "West Hollywood", "Woodland Hills",
];

const cities = [...featuredCities, ...otherCities].sort();
const PREVIEW_COUNT = featuredCities.length;
const previewCities = [...featuredCities].sort();

export default function ServiceArea() {
  const [showAll, setShowAll] = useState(false);
  const visibleCities = showAll ? cities : previewCities;

  return (
    <section className="bg-[#0d0d0d] site-texture px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-5xl font-black text-[#c9a227]">
          Service Area
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Proudly serving Los Angeles County and surrounding communities.
        </p>

        <div className="mt-12 columns-2 gap-x-8 text-center sm:columns-3 md:columns-4">
          {visibleCities.map((c) => (
            <div key={c} className="mb-4 flex items-center justify-center gap-2 break-inside-avoid">
              <MapPin className="h-4 w-4 flex-shrink-0 text-[#c9a227]" strokeWidth={2} />
              <span className="text-gray-300">{c}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 rounded-xl border-2 border-[#b8901a] px-8 py-3 font-bold text-[#c9a227] transition hover:bg-[#b8901a] hover:text-black"
        >
          {showAll ? "Show Less" : "View All Cities"}
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Free Estimate", href: "#estimate" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-yellow-500/20 bg-black/90 backdrop-blur z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <h2 className="text-xl font-bold text-yellow-400">
          Rogue Plumbing
        </h2>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+13234465001"
            className="rounded-lg bg-yellow-500 px-5 py-2 font-bold text-black hover:bg-yellow-400"
          >
            Call Now
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+13234465001"
            className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-bold text-black hover:bg-yellow-400"
          >
            Call
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-yellow-500/30"
          >
            <span
              className={`h-0.5 w-6 bg-yellow-400 transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-yellow-400 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-yellow-400 transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-yellow-500/20 bg-black md:hidden">
          <div className="flex flex-col p-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-yellow-500/10 py-4 text-gray-300 hover:text-yellow-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

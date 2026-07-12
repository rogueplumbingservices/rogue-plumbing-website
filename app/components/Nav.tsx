"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Free Estimate", href: "#estimate" },
];

const sparkles = [
  { top: "5%", left: "8%", delay: "0s", size: "10px" },
  { top: "55%", left: "18%", delay: "0.4s", size: "8px" },
  { top: "15%", left: "32%", delay: "0.9s", size: "12px" },
  { top: "65%", left: "45%", delay: "0.2s", size: "9px" },
  { top: "8%", left: "58%", delay: "1.3s", size: "11px" },
  { top: "60%", left: "70%", delay: "0.7s", size: "8px" },
  { top: "12%", left: "82%", delay: "1.6s", size: "12px" },
  { top: "50%", left: "92%", delay: "1s", size: "9px" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-[#b8901a]/20 bg-[#0d0d0d]/90 backdrop-blur z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <Link href="/" className="relative inline-block">
          <h2
            style={{ fontFamily: "OldEnglishFive, serif" }}
            className="sparkle-text text-3xl"
          >
            Rogue Plumbing
          </h2>
          {sparkles.map((s, i) => (
            <span
              key={i}
              className="sparkle-point"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                animationDelay: s.delay,
              }}
            />
          ))}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#c9a227]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+13233665929"
            className="rounded-lg bg-[#b8901a] px-5 py-2 font-bold text-black hover:bg-[#c9a227]"
          >
            Call Now
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+13233665929"
            className="rounded-lg bg-[#b8901a] px-4 py-2 text-sm font-bold text-black hover:bg-[#c9a227]"
          >
            Call
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#b8901a]/30"
          >
            <span
              className={`h-0.5 w-6 bg-[#c9a227] transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#c9a227] transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#c9a227] transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-[#b8901a]/20 bg-[#0d0d0d] site-texture lg:hidden">
          <div className="flex flex-col p-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#b8901a]/10 py-4 text-gray-300 hover:text-[#c9a227]"
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#b8901a]/20 bg-[#0d0d0d] site-texture px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">

        <div>
          <h3 className="text-2xl font-black text-[#c9a227]">
            Rogue Plumbing
          </h3>
          <p className="mt-4 text-gray-400">
            Fast, honest, dependable plumbing service across Los Angeles County.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100068443025820"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rogue Plumbing on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b8901a]/30 text-[#c9a227] transition hover:bg-[#b8901a] hover:text-black"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/rogue_plumbing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rogue Plumbing on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b8901a]/30 text-[#c9a227] transition hover:bg-[#b8901a] hover:text-black"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-[#c9a227]">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="tel:+13233665929" className="hover:text-[#c9a227]">
                (323) 366-5929
              </a>
            </li>
            <li>Available 24/7 for emergencies</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-[#c9a227]">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="#estimate" className="hover:text-[#c9a227]">
                Free Estimate
              </a>
            </li>
            <li>
              <a href="tel:+13233665929" className="hover:text-[#c9a227]">
                Call Now
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[#b8901a]/10 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rogue Plumbing. All rights reserved.
      </div>
    </footer>
  );
}

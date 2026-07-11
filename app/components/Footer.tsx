export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">

        <div>
          <h3 className="text-2xl font-black text-yellow-400">
            Rogue Plumbing
          </h3>
          <p className="mt-4 text-gray-400">
            Fast, honest, dependable plumbing service across Los Angeles County.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-yellow-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="tel:+13234465001" className="hover:text-yellow-400">
                (323) 446-5001
              </a>
            </li>
            <li>Available 24/7 for emergencies</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-yellow-400">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="#estimate" className="hover:text-yellow-400">
                Free Estimate
              </a>
            </li>
            <li>
              <a href="tel:+13234465001" className="hover:text-yellow-400">
                Call Now
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-yellow-500/10 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rogue Plumbing. All rights reserved.
      </div>
    </footer>
  );
}

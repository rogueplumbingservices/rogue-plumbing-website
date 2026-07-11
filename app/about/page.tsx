import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { Phone, Home } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#c9a227] hover:text-[#d4b13f]"
          >
            <Home className="h-4 w-4" strokeWidth={2.25} />
            Back to Home
          </Link>

          <h1 className="text-center text-5xl font-black text-[#c9a227]">
            About Rogue Plumbing
          </h1>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              At Rogue Plumbing, we&apos;re committed to providing honest, dependable
              plumbing services backed by over 11 years of hands-on industry
              experience. We proudly serve homeowners and businesses with
              high-quality workmanship, fair pricing, and reliable solutions
              that are built to last.
            </p>

            <p>
              Whether you&apos;re dealing with a leaking pipe, clogged drain, water
              heater issue, sewer problem, fixture installation, or an
              emergency plumbing repair, you can count on Rogue Plumbing to
              get the job done right the first time. We take pride in clear
              communication, punctual service, and treating every property
              with the same care and respect we&apos;d give our own.
            </p>

            <p>
              Our services include plumbing repairs, drain cleaning, leak
              detection, water heater repair and replacement, toilet, faucet
              and garbage disposal installation, repiping, valve replacement,
              and plumbing code corrections.
            </p>

            <p>
              At Rogue Plumbing, our reputation is built on honesty, hard
              work, and old-school craftsmanship. If you&apos;re looking for a
              trusted local plumber who stands behind their work, give us a
              call today. We look forward to earning your business.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="tel:+13234465001"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#b8901a] px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
            >
              <Phone className="h-5 w-5" strokeWidth={2.25} fill="currentColor" />
              Call (323) 446-5001
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

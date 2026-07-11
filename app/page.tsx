import Image from "next/image";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import EstimateForm from "./components/EstimateForm";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import StickyCallBar from "./components/StickyCallBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pb-16 md:pb-0">

      <Nav />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">

        <div className="flex flex-col items-center animate-fade-in-up">
          <Image
            src="/images/rogue-logo.png"
            width={480}
            height={480}
            alt="Rogue Plumbing Logo"
            className="mb-10 h-auto w-[480px]"
            priority
          />

          <h1 className="text-6xl font-black text-yellow-400">
            24/7 Emergency Plumbing
          </h1>

          <h2 className="mt-3 text-3xl font-light text-white">
            Serving Los Angeles County
          </h2>

          <p className="mt-8 max-w-2xl text-xl text-gray-300">
            Fast response times, honest service, and dependable plumbing
            solutions whenever you need them.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <a
              href="tel:+13234465001"
              className="rounded-xl bg-yellow-500 px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
            >
              📞 Call (323) 446-5001
            </a>

            <a
              href="#estimate"
              className="rounded-xl border-2 border-yellow-500 px-10 py-5 text-lg font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Free Estimate
            </a>

          </div>
        </div>

      </section>

      <div id="services">
        <Reveal>
          <Services />
        </Reveal>
      </div>

      <div id="why-us">
        <Reveal>
          <WhyChooseUs />
        </Reveal>
      </div>

      <div id="service-area">
        <Reveal>
          <ServiceArea />
        </Reveal>
      </div>

      <Reveal>
        <EstimateForm />
      </Reveal>

      <Footer />

      <StickyCallBar />

    </main>
  );
}

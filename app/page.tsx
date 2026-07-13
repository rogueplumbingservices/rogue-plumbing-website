import { Phone } from "lucide-react";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import EstimateForm from "./components/EstimateForm";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] site-texture text-white">

      <SplashScreen />

      

      <Nav />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pb-20 pt-40 text-center">

        <div className="flex flex-col items-center animate-fade-in-up">
          <h1 className="text-6xl font-black text-[#c9a227]">
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
              href="tel:+13233665929"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#b8901a] px-10 py-5 text-lg font-bold text-black transition hover:scale-105 sm:w-80"
            >
              <Phone className="h-5 w-5" strokeWidth={2.25} fill="currentColor" />
              Call (323) 366-5929
            </a>

            <a
              href="/#estimate"
              className="flex w-full items-center justify-center rounded-xl border-2 border-[#b8901a] px-10 py-5 text-lg font-bold text-[#c9a227] transition hover:bg-[#b8901a] hover:text-black sm:w-80"
            >
              Request Estimate
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

    </main>
  );
}

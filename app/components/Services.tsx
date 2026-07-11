import { Droplet, Wrench, Flame, ShowerHead, Home, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Leak Detection & Repair",
    desc: "Fast diagnosis and repair of hidden or visible leaks before they cause real damage.",
  },
  {
    icon: Wrench,
    title: "Drain Cleaning",
    desc: "Clogged drains cleared quickly with professional-grade equipment.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    desc: "Installation, repair, and maintenance for traditional and tankless water heaters.",
  },
  {
    icon: ShowerHead,
    title: "Fixture Installation",
    desc: "Toilets, faucets, sinks, and showers installed cleanly and correctly.",
  },
  {
    icon: Home,
    title: "Repiping",
    desc: "Full or partial repiping for older homes with outdated or failing plumbing.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Service",
    desc: "24/7 response for burst pipes, major leaks, and plumbing emergencies.",
  },
];

export default function Services() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-black text-[#c9a227]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Complete plumbing solutions for homes and businesses across LA County.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-[#b8901a]/20 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-[#b8901a]/60"
              >
                <Icon className="h-9 w-9 text-[#c9a227]" strokeWidth={1.75} />
                <h3 className="mt-4 text-xl font-bold text-[#c9a227]">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-300">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

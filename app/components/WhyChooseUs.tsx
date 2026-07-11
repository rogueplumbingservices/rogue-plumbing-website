const points = [
  { stat: "24/7", label: "Emergency Availability" },
  { stat: "11+", label: "Years of Experience" },
  { stat: "100%", label: "Satisfaction Guarantee" },
  { stat: "5★", label: "Average Customer Rating" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-black text-yellow-400">
            Why Choose Rogue Plumbing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Old-school craftsmanship, honest pricing, and a plumber who
            shows up on time and gets it right the first time. We are the
            gold standard in Los Angeles County plumbing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {points.map((p) => (
            <div key={p.label} className="text-center">
              <div className="text-5xl font-black text-yellow-400">
                {p.stat}
              </div>
              <div className="mt-2 text-gray-300">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

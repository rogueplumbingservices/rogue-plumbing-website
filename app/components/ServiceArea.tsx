const cities = [
  "Los Angeles", "Burbank", "Glendale", "Pasadena",
  "Santa Monica", "Van Nuys", "Beverly Hills",
];

export default function ServiceArea() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-5xl font-black text-yellow-400">
          Service Area
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Proudly serving Los Angeles County and surrounding communities.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {cities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-yellow-500/30 px-6 py-3 text-gray-200"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const cities = [
  { name: "Van Nuys", x: 230, y: 110 },
  { name: "Burbank", x: 340, y: 120 },
  { name: "Glendale", x: 400, y: 190 },
  { name: "Pasadena", x: 500, y: 150 },
  { name: "Los Angeles", x: 380, y: 300 },
  { name: "Beverly Hills", x: 230, y: 280 },
  { name: "Santa Monica", x: 110, y: 300 },
];

export default function ServiceMap() {
  return (
    <div className="mt-12 flex justify-center">
      <svg
        viewBox="0 0 620 400"
        className="w-full max-w-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative outer frame, echoing the logo's ornate border */}
        <rect
          x="8"
          y="8"
          width="604"
          height="384"
          rx="16"
          fill="none"
          stroke="#b8901a"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <rect
          x="16"
          y="16"
          width="588"
          height="368"
          rx="12"
          fill="none"
          stroke="#b8901a"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {/* Soft service-area blob connecting the region */}
        <path
          d="M 110 300 Q 80 190 230 110 Q 320 70 400 120 Q 520 110 500 150 Q 540 220 400 300 Q 350 340 230 280 Q 150 330 110 300 Z"
          fill="#c9a227"
          fillOpacity="0.06"
          stroke="#b8901a"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />

        {/* City markers */}
        {cities.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="10" fill="#c9a227" fillOpacity="0.15">
              <animate
                attributeName="r"
                values="8;14;8"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                values="0.25;0.05;0.25"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={c.x} cy={c.y} r="5" fill="#c9a227" />
            <circle cx={c.x} cy={c.y} r="5" fill="none" stroke="#0d0d0d" strokeWidth="1.5" />
            <text
              x={c.x}
              y={c.y - 16}
              textAnchor="middle"
              fill="#e8c866"
              fontSize="15"
              fontWeight="700"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

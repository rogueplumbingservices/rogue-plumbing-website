import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rogueplumbingservices.com"),
  title: "Rogue Plumbing | 24/7 Emergency Plumber in Los Angeles County",
  description:
    "Trusted local plumber serving Los Angeles County. Leak detection, drain cleaning, water heater repair, repiping, and 24/7 emergency plumbing service. Call (323) 366-5929.",
  openGraph: {
    title: "Rogue Plumbing | 24/7 Emergency Plumber in Los Angeles County",
    description:
      "Trusted local plumber serving Los Angeles County. Available 24/7 for emergencies.",
    images: ["/images/rogue-logo.png"],
    url: "https://www.rogueplumbingservices.com",
    siteName: "Rogue Plumbing",
  },
  other: {
    "format-detection": "telephone=no, address=no, email=no, date=no",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Rogue Plumbing",
  image: "https://www.rogueplumbingservices.com/images/rogue-logo.png",
  url: "https://www.rogueplumbingservices.com",
  telephone: "+13233665929",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "Burbank" },
    { "@type": "City", name: "Glendale" },
    { "@type": "City", name: "Pasadena" },
    { "@type": "City", name: "Santa Monica" },
    { "@type": "City", name: "Van Nuys" },
    { "@type": "City", name: "Beverly Hills" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100068443025820",
    "https://www.instagram.com/rogue_plumbing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

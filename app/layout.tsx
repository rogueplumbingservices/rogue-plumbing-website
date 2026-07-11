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
  title: "Rogue Plumbing | 24/7 Emergency Plumbing in LA County",
  description:
    "Fast, honest, dependable plumbing service across Los Angeles County. Leak detection, drain cleaning, water heaters, repiping, and 24/7 emergency response. Call (323) 446-5001.",
  openGraph: {
    title: "Rogue Plumbing | 24/7 Emergency Plumbing in LA County",
    description:
      "Fast, honest, dependable plumbing service across Los Angeles County. Available 24/7 for emergencies.",
    images: ["/images/rogue-logo.png"],
  },
  other: {
    "format-detection": "telephone=no, address=no, email=no, date=no",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

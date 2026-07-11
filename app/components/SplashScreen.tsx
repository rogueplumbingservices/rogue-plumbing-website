"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setLogoVisible(true), 100);
    const fadeOutTimer = setTimeout(() => setLogoVisible(false), 1300);
    const removeTimer = setTimeout(() => setVisible(false), 2100);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <Image
        src="/images/rogue-logo.png"
        width={1200}
        height={1200}
        alt="Rogue Plumbing"
        className={`h-auto w-[85vw] max-w-[600px] transition-opacity duration-700 ease-in-out ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}

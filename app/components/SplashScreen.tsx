"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [overlayFading, setOverlayFading] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");
    if (alreadyPlayed) {
      setVisible(false);
      setChecked(true);
      return;
    }

    sessionStorage.setItem("splashPlayed", "true");
    setVisible(true);
    setChecked(true);

    const fadeInTimer = setTimeout(() => setLogoVisible(true), 80);
    const fadeOutTimer = setTimeout(() => {
      setLogoVisible(false);
      setOverlayFading(true);
    }, 1100);
    const removeTimer = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!checked || !visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-[900ms] ease-in-out ${
        overlayFading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/images/splash-logo.png"
        width={700}
        height={754}
        alt="Rogue Plumbing"
        className={`h-auto w-[85vw] max-w-[600px] transition-opacity duration-500 ease-in-out ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}

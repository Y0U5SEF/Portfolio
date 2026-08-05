import { useState, useEffect } from "react";
import useTypewriterCycle from "./useTypewriterCycle";
import { siteData } from "../../data/content";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AnimatedSpecialities() {
  const reducedMotion = prefersReducedMotion();
  const words = siteData.specialities;
  const [staticIndex, setStaticIndex] = useState(0);

  const displayedText = useTypewriterCycle(words, {
    typeSpeed: 55,
    holdDuration: 1400,
    deleteSpeed: 35,
    pauseDuration: 400,
  });

  useEffect(() => {
    if (!reducedMotion) return;
    const interval = setInterval(() => {
      setStaticIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion, words.length]);

  if (reducedMotion) {
    return (
      <div
        className="animated-specialities"
        role="status"
        aria-live="polite"
        aria-label="Specialities"
      >
        {words[staticIndex]}
      </div>
    );
  }

  return (
    <div
      className="animated-specialities"
      role="status"
      aria-live="polite"
      aria-label="Specialities"
    >
      {displayedText}
      <span
        className="animated-specialities__cursor animated-specialities__cursor--blink"
        aria-hidden="true"
      />
    </div>
  );
}

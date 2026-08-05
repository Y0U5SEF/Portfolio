import { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeContext";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Logo({ size = 96 }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const strokeRef = useRef(null);
  const reducedMotion = prefersReducedMotion();
  const [showFill, setShowFill] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const el = strokeRef.current;
    if (!el) return;
    const length = el.getTotalLength();
    el.style.strokeDasharray = length;
    el.style.strokeDashoffset = length;

    el.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      { duration: 1200, easing: "ease-in-out", fill: "forwards" }
    ).onfinish = () => setShowFill(true);
  }, [reducedMotion]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 230.47"
      width={size}
      height={size * 0.77}
      className="logo"
      aria-label="Ussefy logo"
      role="img"
    >
      <path
        ref={strokeRef}
        d="M261.59,153.65h-9.78a17.29,17.29,0,0,1-16.91-20.88l6.46-30.37h0l5.44-25.57L263.12,0H186.29L170,76.83,158.51,130.7a29.24,29.24,0,0,1-28.55,23H76.81L93.15,76.83,109.48,0H32.65L16.33,76.83,0,153.65l60.48,76.82H137.3l5.44-25.58h0l6-28.08a29.24,29.24,0,0,1,28.49-23.17h32A17.29,17.29,0,0,1,226,174.52l-2.14,10,0,0a38.41,38.41,0,1,0,37.66-30.89Z"
        fill="none"
        stroke={isDark ? "#E2E6EB" : "#1A2332"}
        strokeWidth="1.5"
      />
      <path
        d="M261.59,153.65h-9.78a17.29,17.29,0,0,1-16.91-20.88l6.46-30.37h0l5.44-25.57L263.12,0H186.29L170,76.83,158.51,130.7a29.24,29.24,0,0,1-28.55,23H76.81L93.15,76.83,109.48,0H32.65L16.33,76.83,0,153.65l60.48,76.82H137.3l5.44-25.58h0l6-28.08a29.24,29.24,0,0,1,28.49-23.17h32A17.29,17.29,0,0,1,226,174.52l-2.14,10,0,0a38.41,38.41,0,1,0,37.66-30.89Z"
        fill={isDark ? "#E2E6EB" : "#1A2332"}
        opacity={showFill ? 1 : 0}
        style={{ transition: "opacity 0.6s ease-in" }}
      />
    </svg>
  );
}

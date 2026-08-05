import { useState, useEffect, useRef, useCallback } from "react";

const TYPING = "typing";
const HOLDING = "holding";
const DELETING = "deleting";
const PAUSING = "pausing";

export default function useTypewriterCycle(words, {
  typeSpeed = 55,
  holdDuration = 1400,
  deleteSpeed = 35,
  pauseDuration = 400,
} = {}) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const phaseRef = useRef(TYPING);
  const charRef = useRef(0);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const tick = useCallback(() => {
    clearTimer();
    const word = words[indexRef.current];
    const phase = phaseRef.current;

    if (phase === TYPING) {
      charRef.current++;
      setDisplayedText(word.slice(0, charRef.current));

      if (charRef.current === word.length) {
        phaseRef.current = HOLDING;
        timerRef.current = setTimeout(() => {
          phaseRef.current = DELETING;
          tick();
        }, holdDuration);
        return;
      }
      timerRef.current = setTimeout(tick, typeSpeed);
    } else if (phase === DELETING) {
      charRef.current--;
      setDisplayedText(word.slice(0, charRef.current));

      if (charRef.current === 0) {
        phaseRef.current = PAUSING;
        timerRef.current = setTimeout(() => {
          indexRef.current = (indexRef.current + 1) % words.length;
          phaseRef.current = TYPING;
          tick();
        }, pauseDuration);
        return;
      }
      timerRef.current = setTimeout(tick, deleteSpeed);
    }
  }, [words, typeSpeed, holdDuration, deleteSpeed, pauseDuration]);

  useEffect(() => {
    clearTimer();
    timerRef.current = setTimeout(tick, typeSpeed);
    return clearTimer;
  }, [tick, typeSpeed]);

  return displayedText;
}

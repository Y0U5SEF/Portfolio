import { useState, useEffect, useCallback, useRef } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState(TYPING);
  const timeoutRef = useRef(null);

  const currentWord = words[currentIndex];

  const tick = useCallback(() => {
    if (phase === TYPING) {
      setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      if (displayedText.length + 1 === currentWord.length) {
        setPhase(HOLDING);
        timeoutRef.current = setTimeout(() => setPhase(DELETING), holdDuration);
        return;
      }
      timeoutRef.current = setTimeout(tick, typeSpeed);
    } else if (phase === DELETING) {
      setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      if (displayedText.length - 1 === 0) {
        setPhase(PAUSING);
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
          setPhase(TYPING);
        }, pauseDuration);
        return;
      }
      timeoutRef.current = setTimeout(tick, deleteSpeed);
    }
  }, [displayedText, currentWord, phase, currentIndex, words.length, typeSpeed, holdDuration, deleteSpeed, pauseDuration]);

  useEffect(() => {
    if (phase === TYPING || phase === DELETING) {
      timeoutRef.current = setTimeout(tick, phase === TYPING ? typeSpeed : deleteSpeed);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [tick, phase, typeSpeed, deleteSpeed]);

  return displayedText;
}

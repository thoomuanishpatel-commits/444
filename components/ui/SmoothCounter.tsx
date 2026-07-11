"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface SmoothCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function SmoothCounter({ value, suffix = "", duration = 2000 }: SmoothCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const elapsed = timestamp - startTimestamp.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, value, duration]);

  return <span ref={ref} className="tabular-nums font-extrabold">{count}{suffix}</span>;
}

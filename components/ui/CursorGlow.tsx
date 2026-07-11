"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const delayed = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onEnter = () => {
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const onDown = () => {
      cursor.style.transform = `translate(${delayed.current.x - 20}px, ${delayed.current.y - 20}px) scale(0.8)`;
    };
    const onUp = () => {
      cursor.style.transform = `translate(${delayed.current.x - 20}px, ${delayed.current.y - 20}px) scale(1)`;
    };

    // Hoverable elements
    const handleHoverStart = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.background = "rgba(14, 165, 233, 0.15)";
      cursor.style.borderColor = "rgba(14, 165, 233, 0.6)";
    };
    const handleHoverEnd = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.background = "transparent";
      cursor.style.borderColor = "rgba(14, 165, 233, 0.4)";
    };

    const hoverables = document.querySelectorAll("a, button, [data-cursor-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    const loop = () => {
      delayed.current.x += (pos.current.x - delayed.current.x) * 0.12;
      delayed.current.y += (pos.current.y - delayed.current.y) * 0.12;
      cursor.style.transform = `translate(${delayed.current.x - 20}px, ${delayed.current.y - 20}px)`;
      rafRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* Main glow ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] opacity-0 transition-[width,height,background,border-color] duration-300"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1.5px solid rgba(14, 165, 233, 0.4)",
          background: "transparent",
          willChange: "transform",
        }}
      />
      {/* Dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] opacity-0"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#0ea5e9",
          willChange: "transform",
          boxShadow: "0 0 10px rgba(14, 165, 233, 0.8)",
        }}
      />
    </>
  );
}

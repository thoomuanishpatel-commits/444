"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Play, ChevronDown, Sparkles, Zap, Globe } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 800, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Countries" },
  { value: 6, suffix: "+", label: "Years Experience" },
];

const floatingBadges = [
  { icon: "⚡", text: "AI-Powered", delay: 0, x: "-10%", y: "20%" },
  { icon: "🚀", text: "500+ Projects", delay: 0.3, x: "85%", y: "15%" },
  { icon: "⭐", text: "Awwwards Level", delay: 0.6, x: "80%", y: "70%" },
  { icon: "🔒", text: "99.9% Uptime", delay: 0.9, x: "-5%", y: "75%" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mouseX.set(x);
      mouseY.set(y);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const scrollToNext = () => {
    document.querySelector("#trusted-by")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 z-0">
        {/* Aurora */}
        <div className="aurora-bg absolute inset-0" />

        {/* Gradient orbs */}
        <motion.div
          className="absolute rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{
            width: "60vw",
            height: "60vw",
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
            top: "-20%",
            left: "-10%",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{
            width: "50vw",
            height: "50vw",
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full opacity-10 blur-[80px] pointer-events-none"
          style={{
            width: "40vw",
            height: "40vw",
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            bottom: "0%",
            left: "30%",
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 4 }}
        />

        {/* Mouse-following glow */}
        <motion.div
          className="absolute pointer-events-none rounded-full blur-[80px] opacity-10"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
            left: springX.get() + "%",
            top: springY.get() + "%",
            translateX: "-50%",
            translateY: "-50%",
            x: "-50%",
            y: "-50%",
          }}
        />

        {/* Grid dots */}
        <div className="absolute inset-0 grid-dots opacity-40" />
      </div>

      {/* ── Floating Badges ── */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute z-20 glass-strong rounded-2xl px-4 py-2.5 flex items-center gap-2.5 hidden lg:flex"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: 2 + badge.delay, duration: 0.6 },
            scale: { delay: 2 + badge.delay, duration: 0.6 },
            y: {
              delay: 2 + badge.delay,
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="text-base">{badge.icon}</span>
          <span className="text-xs font-semibold text-white/70 whitespace-nowrap">
            {badge.text}
          </span>
        </motion.div>
      ))}

      {/* ── Main Content ── */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center pt-36 pb-24">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-label gap-2 mb-8"
        >
          <Sparkles size={12} />
          <span>World-Class Digital Agency — Trusted by 500+ Clients</span>
          <Sparkles size={12} />
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="heading-xl font-black text-white max-w-5xl mx-auto leading-[1.02]"
          >
            We Build{" "}
            <span className="text-gradient-animated">Digital Empires</span>
            <br />
            That Dominate{" "}
            <span className="relative inline-block">
              The Future
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9, #7c3aed, #06b6d4)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="body-lg max-w-2xl mb-12"
        >
          AARIVON is a premium digital agency crafting world-class websites, mobile apps,
          AI solutions, and brand identities for companies that refuse to settle for ordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            onClick={scrollToContact}
            className="btn-primary text-base px-8 py-4 rounded-xl group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight
              size={18}
              className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
          <button
            onClick={scrollToPortfolio}
            className="btn-secondary text-base px-8 py-4 rounded-xl group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <Play size={12} className="ml-0.5" fill="currentColor" />
            </div>
            View Our Work
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/[0.08] w-full max-w-3xl mb-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={0.2 + i * 0.1}
                    suffix={stat.suffix}
                    useEasing
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-xs text-white/40 font-semibold text-center uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <span className="text-xs text-white/25 mr-1 font-medium">Built with</span>
          {["Next.js", "React", "Node.js", "AWS", "OpenAI", "Three.js"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-white/40 border border-white/[0.08] bg-white/[0.03] hover:text-white/70 hover:border-white/20 transition-all duration-300"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-2"
          animate={{ borderColor: ["rgba(255,255,255,0.15)", "rgba(14,165,233,0.4)", "rgba(255,255,255,0.15)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/50"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
